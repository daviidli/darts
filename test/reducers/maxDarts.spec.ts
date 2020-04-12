import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import maxDarts from '../../app/reducers/maxDarts';

describe('maxDarts reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(maxDarts(undefined, action)).toEqual(0);
	});

	it('should return same state', () => {
		const state = 0;
		const action: AnyAction = {
			type: 'someType',
			max: 1
		};
		expect(maxDarts(state, action)).toEqual(state);
	});

	it('should return updated state', () => {
		const state = 0;
		const action: AnyAction = {
			type: actions.SET_MAX_DARTS,
			max: 1
		};
		expect(maxDarts(state, action)).toEqual(1);
	});
});
