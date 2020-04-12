import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import players from '../../app/reducers/players';

describe('players reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(players(undefined, action)).toEqual([]);
	});

	it('should return same state', () => {
		const state = [{ id: '1', name: 'player1' }];
		const action: AnyAction = {
			type: 'someType'
		};
		expect(players(state, action)).toEqual(state);
	});

	it('should set players', () => {
		const state = [];
		const newPlayers = [{ id: '1', name: 'player1' }];
		const action: AnyAction = {
			type: actions.SET_PLAYERS,
			players: newPlayers
		};
		expect(players(state, action)).toEqual(newPlayers);
	});

	it('should add a player', () => {
		const state = [];
		const action: AnyAction = {
			type: actions.ADD_PLAYER,
			player: 'unicorn'
		};
		const result = players(state, action);
		expect(result).toHaveLength(1);
		expect(result[0]).toMatchSnapshot({
			id: expect.any(String), // jest was unable to mock uuid/v4
			name: 'unicorn'
		});
	});

	it('should remove a player', () => {
		const state = [{ id: '1', name: 'player1' }];
		const action: AnyAction = {
			type: actions.REMOVE_PLAYER,
			index: 0
		};
		expect(players(state, action)).toEqual([]);
	});

	it('should try to remove a player out of range', () => {
		const state = [{ id: '1', name: 'player1' }];
		const action: AnyAction = {
			type: actions.REMOVE_PLAYER,
			index: 10
		};
		expect(players(state, action)).toEqual(state);
	});

	it("should change a player's name", () => {
		const state = [{ id: '1', name: 'player1' }];
		const action: AnyAction = {
			type: actions.CHANGE_PLAYER,
			player: 'unicorn',
			index: 0
		};
		expect(players(state, action)).toEqual([{ id: '1', name: 'unicorn' }]);
	});

	it("should change a player's name out of range", () => {
		const state = [{ id: '1', name: 'player1' }];
		const action: AnyAction = {
			type: actions.CHANGE_PLAYER,
			player: 'unicorn',
			index: 10
		};
		expect(players(state, action)).toEqual(state);
	});
});
