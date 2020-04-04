/* eslint-disable no-await-in-loop */
import store from '../store/store';
import DartBoard from './dartBoard';
import {
	setPlayers,
	setCurrentPlayer,
	setMaxRounds,
	addRound,
	setMaxThrows
} from '../actions/gameActions';

class GameManager {
	private readonly dartBoard: DartBoard;
	private players: string[];
	private running: boolean;
	private missed: boolean;

	public constructor(port: string) {
		this.dartBoard = new DartBoard(port);
		this.players = [];
		this.running = false;
		this.missed = false;
	}

	public addPlayer(name: string) {
		this.players.push(name);
	}

	public removePlayer(name: string) {
		const index = this.players.indexOf(name);
		if (index < 0) {
			return;
		}

		this.players.splice(index, 1);
	}

	public setTurns(maxTurns: number) {
		store.dispatch(setMaxRounds(maxTurns));
	}

	public async start() {
		console.log('starting');
		const state = store.getState();

		store.dispatch(setPlayers(this.players));
		store.dispatch(setMaxThrows(3));

		this.running = true;

		for (let i = 0; i < state.maxRounds && this.running; i++) {
			await this.turn();
		}
	}

	public async turn() {
		const state = store.getState();

		const throwResults: string[] = [];
		for (let i = 0; i < state.maxThrows; i++) {
			let currentThrow: string[] = [];
			while (true) {
				try {
					currentThrow = await this.dartBoard.getResults(1, 1000);
					// eslint-disable-next-line no-empty
				} catch (e) {}

				if (this.missed) {
					this.missed = false;
					throwResults.push('miss');
					break;
				}

				if (currentThrow.length) {
					throwResults.push(currentThrow[0]);
					break;
				}
			}
		}

		store.dispatch(addRound(throwResults));
		store.dispatch(setCurrentPlayer(state.currentPlayer + 1));
	}

	public stop() {
		this.running = false;
		// todo: clear game states
	}

	public miss() {
		this.missed = true;
	}
}

export default GameManager;
