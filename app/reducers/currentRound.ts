import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const currentRound = (state = 0, action: AnyAction) => {
	switch (action.type) {
		case actions.SET_CURRENT_ROUND:
			return action.currentRound;
		default:
			return state;
	}
};

export default currentRound;
