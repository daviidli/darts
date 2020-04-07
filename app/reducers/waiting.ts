import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const waiting = (state = false, action: AnyAction) => {
	switch (action.type) {
		case actions.SET_WAITING: {
			return action.waiting;
		}
		default: {
			return state;
		}
	}
};

export default waiting;
