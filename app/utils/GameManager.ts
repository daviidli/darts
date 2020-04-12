/* eslint-disable no-await-in-loop */
import DartBoard from './dartBoard';
import store from '../store/store';
import {
	setCurrentRound,
	setCurrentPlayer,
	initializedRound,
	setWinner,
	setWaiting,
	setMaxDarts,
	setMaxRounds,
	setCurrentDart,
	setTotals
} from '../actions/gameActions';

abstract class GameManager {
	private dartboard: DartBoard;
	private running: boolean;
	private missedDart: boolean;
	private dartsCleared: boolean;

	constructor() {
		const state = store.getState();

		if (!state.serialPort.length) {
			throw new Error('No serial port selected.');
		}

		this.dartboard = new DartBoard(state.serialPort);
		this.running = false;
		this.missedDart = false;
		this.dartsCleared = false;
	}

	protected abstract initialize(): void;
	protected abstract async turn(): Promise<void>;

	protected async run() {
		const {
			maxRounds,
			maxDarts,
			players,
			clearDartsWaitTime
		} = store.getState();

		const roundsArr = this.createStrArray(
			players.length,
			maxRounds,
			maxDarts
		);
		store.dispatch(initializedRound(roundsArr));

		this.running = true;
		for (let r = 0; r < maxRounds && this.running; r++) {
			store.dispatch(setCurrentRound(r));
			for (let p = 0; p < players.length && this.running; p++) {
				store.dispatch(setCurrentPlayer(p));
				await this.turn();
				await this.waitForClearingDarts(clearDartsWaitTime);
			}
		}
	}

	protected async getDart(): Promise<string> {
		let currentDart;
		while (true) {
			try {
				currentDart = await this.dartboard.getResults(1, 500);
			} catch (e) {
				// continue regardless of error
				// todo: show error notification
			}

			if (this.missedDart) {
				this.missedDart = false;
				return 'miss';
			}

			if (currentDart) {
				return currentDart[0];
			}
		}
	}

	public start() {
		this.initialize();
		this.run();
	}

	public stop() {
		this.running = false;
		this.dartboard.close();
		store.dispatch(setMaxDarts(0));
		store.dispatch(setMaxRounds(0));
		store.dispatch(setCurrentPlayer(0));
		store.dispatch(setCurrentDart(0));
		store.dispatch(setCurrentRound(0));
		store.dispatch(initializedRound([]));
		store.dispatch(setTotals([]));
	}

	public setWinner(index: number) {
		this.stop();
		store.dispatch(setWinner(index));
	}

	public miss() {
		this.missedDart = true;
	}

	public getRunning() {
		return this.running;
	}

	public clearedDarts() {
		this.dartsCleared = true;
	}

	private async waitForClearingDarts(timeout = 0) {
		this.dartsCleared = false;
		store.dispatch(setWaiting(true));
		let timeouts = 0;

		while (true) {
			await this.timeout(1000);
			timeouts += 1;
			if (timeouts === timeout) {
				store.dispatch(setWaiting(false));
				return;
			}
			if (this.dartsCleared) {
				this.dartsCleared = false;
				store.dispatch(setWaiting(false));
				return;
			}
		}
	}

	private timeout(ms: number): Promise<void> {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	private createStrArray(
		iMax: number,
		jMax: number,
		kMax: number
	): string[][][] {
		const initialRounds: string[][][] = [];
		for (let i = 0; i < iMax; i++) {
			const arr = [];
			for (let j = 0; j < jMax; j++) {
				arr.push(new Array(kMax).fill(''));
			}
			initialRounds.push(arr);
		}
		return initialRounds;
	}
}

export default GameManager;
