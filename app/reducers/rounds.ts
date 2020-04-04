import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const rounds = (state: string[] = [], action: AnyAction) => {
	let newState;
	switch (action.type) {
		case actions.ADD_ROUND:
			newState = state.slice();
			newState.push(action.round);
			return newState;
		default:
			return state;
	}
};

export default rounds;
