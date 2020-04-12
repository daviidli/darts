import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const clearDartsWaitTime = (state = 0, action: AnyAction) => {
	switch (action.type) {
		case actions.SET_WAIT_TIME: {
			return action.waitTime;
		}
		default: {
			return state;
		}
	}
};

export default clearDartsWaitTime;
