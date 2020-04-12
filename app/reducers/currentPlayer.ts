import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const currentPlayer = (state = 0, action: AnyAction) => {
	switch (action.type) {
		case actions.SET_CURRENT_PLAYER: {
			return action.index;
		}
		default: {
			return state;
		}
	}
};

export default currentPlayer;
