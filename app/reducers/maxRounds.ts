import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const maxRounds = (state = 0, action: AnyAction) => {
	switch (action.type) {
		case actions.SET_MAX_ROUNDS:
			return action.maxRounds;
		default:
			return state;
	}
};

export default maxRounds;
