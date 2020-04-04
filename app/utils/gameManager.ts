/* eslint-disable no-await-in-loop */
import store from '../store/store';
import DartBoard from './dartBoard';
import {
	setCurrentPlayer,
	setMaxRounds,
	addRound,
	setMaxThrows,
	setTotals,
	setCurrentThrows
} from '../actions/gameActions';

class GameManager {
	private readonly dartBoard: DartBoard;
	private running: boolean;
	private missed: boolean;
	private type: string;

	public constructor(port: string) {
		this.dartBoard = new DartBoard(port);
		this.running = false;
		this.missed = false;
		this.type = '';
	}

	public setType(type: string) {
		this.type = type;
	}

	public getType(): string {
		return this.type;
	}

	public setTurns(maxTurns: number) {
		store.dispatch(setMaxRounds(maxTurns));
	}

	public async start() {
		console.log('starting');
		const state = store.getState();

		const totals = new Array(state.players.length).fill(
			this.getValueFromType(this.type)
		);
		store.dispatch(setTotals(totals));
		store.dispatch(setMaxThrows(3));

		this.running = true;

		for (let i = 0; i < state.maxRounds && this.running; i++) {
			console.log('turn', i);
			await this.turn();
		}
	}

	public async turn() {
		const state = store.getState();

		const throwResults: string[] = new Array(state.maxThrows).fill(null);
		store.dispatch(setCurrentThrows(throwResults));
		console.log('should have somthing');
		for (let i = 0; i < state.maxThrows; i++) {
			let currentThrow: string[] = [];
			console.log('waiting for dart');
			while (true) {
				try {
					currentThrow = await this.dartBoard.getResults(1, 1000);
					// eslint-disable-next-line no-empty
				} catch (e) {}

				if (this.missed) {
					this.missed = false;
					console.log('missed');
					throwResults[i] = 'miss';
					break;
				}

				if (currentThrow.length) {
					console.log('got dart');
					// eslint-disable-next-line prefer-destructuring
					throwResults[i] = currentThrow[0];
					break;
				}
			}
			store.dispatch(setCurrentThrows(throwResults));
		}

		store.dispatch(addRound(throwResults));
		store.dispatch(setCurrentPlayer(state.currentPlayer + 1));
	}

	public stop() {
		this.running = false;
		// todo: clear game states
		this.dartBoard.close();
	}

	public miss() {
		this.missed = true;
	}

	private getValueFromType(type: string): number {
		return parseInt(type, 10);
	}
}

export default GameManager;
