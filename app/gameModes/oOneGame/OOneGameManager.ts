import GameManager from '../../utils/GameManager';
import store from '../../store/store';
import {
	setCurrentDart,
	setRound,
	setTotals,
	setMaxRounds,
	setMaxDarts
} from '../../actions/gameActions';
import { getValue } from '../../utils/dartUtils';

class OOneGameManager extends GameManager {
	private type: string;

	constructor(type: string) {
		super();
		this.type = type;
	}

	public start() {
		const { players } = store.getState();
		store.dispatch(setMaxRounds(this.getRounds()));
		store.dispatch(setMaxDarts(3));
		store.dispatch(
			setTotals(new Array(players.length).fill(parseInt(this.type, 10)))
		);
		this.superStart();
	}

	public async turn() {
		const { maxDarts } = store.getState();
		for (let d = 0; d < maxDarts; d++) {
			const { currentPlayer, currentRound, totals } = store.getState();

			store.dispatch(setCurrentDart(d));
			const dart = await this.getDart();
			store.dispatch(setRound(currentPlayer, currentRound, d, dart));

			let currentPlayerTotal = totals[currentPlayer];
			currentPlayerTotal -= getValue(dart);

			if (currentPlayerTotal > 0) {
				const newTotals = [...totals];
				newTotals[currentPlayer] = currentPlayerTotal;
				store.dispatch(setTotals(newTotals));
			} else if (currentPlayerTotal === 0) {
				this.setWinner(currentPlayer);
			} else {
				break;
			}
		}
	}

	private getRounds() {
		switch (this.type) {
			case '301':
				return 12;
			case '501':
				return 15;
			case '701':
				return 18;
			case '901':
				return 21;
			case '1001':
				return 24;
			default:
				return 12;
		}
	}
}

export default OOneGameManager;
