import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const currentDart = (state = 0, action: AnyAction) => {
	switch (action.type) {
		case actions.SET_CURRENT_DART: {
			return action.index;
		}
		default: {
			return state;
		}
	}
};

export default currentDart;
