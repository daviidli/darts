import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import maxRounds from '../../app/reducers/maxRounds';

describe('maxRounds reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(maxRounds(undefined, action)).toEqual(0);
	});

	it('should return same state', () => {
		const state = 0;
		const action: AnyAction = {
			type: 'someType',
			max: 1
		};
		expect(maxRounds(state, action)).toEqual(state);
	});

	it('should return updated state', () => {
		const state = 0;
		const action: AnyAction = {
			type: actions.SET_MAX_ROUNDS,
			max: 1
		};
		expect(maxRounds(state, action)).toEqual(1);
	});
});
