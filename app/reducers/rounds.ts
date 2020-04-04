import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const rounds = (state: string[] = [], action: AnyAction) => {
	switch (action.type) {
		case actions.ADD_ROUND: {
			const newState = state.slice();
			newState.push(action.round);
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default rounds;
