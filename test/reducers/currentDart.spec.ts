import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import currentDart from '../../app/reducers/currentDart';

describe('currentDart reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(currentDart(undefined, action)).toEqual(0);
	});

	it('should return same state', () => {
		const state = 0;
		const action: AnyAction = {
			type: 'someType',
			index: 1
		};
		expect(currentDart(state, action)).toEqual(state);
	});

	it('should return updated state', () => {
		const state = 0;
		const action: AnyAction = {
			type: actions.SET_CURRENT_DART,
			index: 1
		};
		expect(currentDart(state, action)).toEqual(1);
	});
});
