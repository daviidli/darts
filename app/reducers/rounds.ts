import { AnyAction } from 'redux';
import rfdc from 'rfdc';
import actions from '../actions/actionTypes.json';

const rounds = (state: string[][][] = [], action: AnyAction) => {
	switch (action.type) {
		case actions.INITIALIZE_ROUNDS: {
			return action.rounds;
		}
		case actions.SET_ROUND: {
			const { player, round, dart, roundValue } = action;
			const newState = rfdc()(state);
			// todo: check player, round and dart are within range
			newState[player][round][dart] = roundValue;
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default rounds;
