import { AnyAction } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import rfdc from 'rfdc';
import actions from '../actions/actionTypes.json';
import { playerType } from './types';

const players = (state: playerType[] = [], action: AnyAction) => {
	switch (action.type) {
		case actions.SET_PLAYERS: {
			return action.players;
		}
		case actions.ADD_PLAYER: {
			const newState = rfdc()(state);
			const newPlayer: playerType = {
				id: uuidv4(),
				name: action.player
			};
			newState.push(newPlayer);
			return newState;
		}
		case actions.REMOVE_PLAYER: {
			if (action.index >= state.length) {
				return state;
			}

			const newState = rfdc()(state);
			newState.splice(action.index, 1);
			return newState;
		}
		case actions.CHANGE_PLAYER: {
			const { player, index } = action;
			if (index >= state.length) {
				return state;
			}

			const newState = rfdc()(state);
			newState[index].name = player;
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default players;
