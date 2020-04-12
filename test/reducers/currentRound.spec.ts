import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import currentRound from '../../app/reducers/currentRound';

describe('currentRound reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(currentRound(undefined, action)).toEqual(0);
	});

	it('should return same state', () => {
		const state = 0;
		const action: AnyAction = {
			type: 'someType',
			index: 1
		};
		expect(currentRound(state, action)).toEqual(state);
	});

	it('should return updated state', () => {
		const state = 0;
		const action: AnyAction = {
			type: actions.SET_CURRENT_ROUND,
			index: 1
		};
		expect(currentRound(state, action)).toEqual(1);
	});
});
