import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const players = (state: string[] = [], action: AnyAction) => {
	switch (action.type) {
		case actions.SET_PLAYERS: {
			return action.players;
		}
		case actions.SET_PLAYER: {
			const newPlayers = state.slice();
			newPlayers[action.index] = action.player;
			return newPlayers;
		}
		case actions.ADD_PLAYER: {
			const newPlayers = state.slice();
			newPlayers.push(action.player);
			return newPlayers;
		}
		case actions.REMOVE_PLAYER: {
			const newPlayers = state.slice();
			const index = newPlayers.indexOf(action.player);
			if (index >= 0) {
				newPlayers.splice(index, 1);
			}
			return newPlayers;
		}
		default: {
			return state;
		}
	}
};

export default players;
