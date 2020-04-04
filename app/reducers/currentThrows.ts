import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const currentThrows = (state: string[] = [], action: AnyAction) => {
	switch (action.type) {
		case actions.SET_CURRENT_THROWS:
			return action.throws;
		default:
			return state;
	}
};

export default currentThrows;
