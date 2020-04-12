import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import rounds from '../../app/reducers/rounds';

describe('rounds reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(rounds(undefined, action)).toEqual([]);
	});

	it('should return same state', () => {
		const state = [];
		const action: AnyAction = {
			type: 'someType'
		};
		expect(rounds(state, action)).toEqual(state);
	});

	it('should initialize rounds', () => {
		const state = [];
		const newRounds = [[['1']]];
		const action: AnyAction = {
			type: actions.INITIALIZE_ROUNDS,
			rounds: newRounds
		};
		expect(rounds(state, action)).toEqual(newRounds);
	});

	it('should set round', () => {
		const state = [[['1', '2', '3']]];
		const action: AnyAction = {
			type: actions.SET_ROUND,
			player: 0,
			round: 0,
			dart: 2,
			roundValue: '20'
		};
		expect(rounds(state, action)).toEqual([[['1', '2', '20']]]);
	});
});
