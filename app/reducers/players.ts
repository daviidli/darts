import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const players = (state = [], action: AnyAction) => {
	switch (action.type) {
		case actions.SET_PLAYERS:
			return action.players;
		default:
			return state;
	}
};

export default players;
