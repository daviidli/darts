import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import totals from '../../app/reducers/totals';

describe('totals reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(totals(undefined, action)).toEqual([]);
	});

	it('should return same state', () => {
		const state = [1, 2, 3];
		const action: AnyAction = {
			type: 'someType'
		};
		expect(totals(state, action)).toEqual(state);
	});

	it('should return updated state', () => {
		const state = [];
		const action: AnyAction = {
			type: actions.SET_TOTALS,
			totals: [1, 2, 3]
		};
		expect(totals(state, action)).toEqual([1, 2, 3]);
	});
});
