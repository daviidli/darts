import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const maxDarts = (state = 0, action: AnyAction) => {
	switch (action.type) {
		case actions.SET_MAX_DARTS: {
			return action.max;
		}
		default: {
			return state;
		}
	}
};

export default maxDarts;
