import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const maxThrows = (state = 0, action: AnyAction) => {
	switch (action.type) {
		case actions.SET_MAX_THROWS:
			return action.maxThrows;
		default:
			return state;
	}
};

export default maxThrows;
