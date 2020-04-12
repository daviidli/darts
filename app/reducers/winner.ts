import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const winner = (state = -1, action: AnyAction) => {
	switch (action.type) {
		case actions.SET_WINNER: {
			return action.winner;
		}
		default: {
			return state;
		}
	}
};

export default winner;
