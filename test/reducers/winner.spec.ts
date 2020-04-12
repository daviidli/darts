import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import winner from '../../app/reducers/winner';

describe('winner reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(winner(undefined, action)).toEqual(-1);
	});

	it('should return same state', () => {
		const state = 2;
		const action: AnyAction = {
			type: 'someType'
		};
		expect(winner(state, action)).toEqual(state);
	});

	it('should return updated state', () => {
		const state = -1;
		const action: AnyAction = {
			type: actions.SET_WINNER,
			winner: 1
		};
		expect(winner(state, action)).toEqual(1);
	});
});
