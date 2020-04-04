import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const currentThrows = (state = 0, action: AnyAction) => {
	switch (action.type) {
		case actions.SET_CURRENT_THROW:
			return action.currentThrow;
		default:
			return state;
	}
};

export default currentThrows;
