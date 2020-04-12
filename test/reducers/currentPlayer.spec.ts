import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import currentPlayer from '../../app/reducers/currentPlayer';

describe('currentPlayer reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(currentPlayer(undefined, action)).toEqual(0);
	});

	it('should return same state', () => {
		const state = 0;
		const action: AnyAction = {
			type: 'someType',
			index: 1
		};
		expect(currentPlayer(state, action)).toEqual(state);
	});

	it('should return updated state', () => {
		const state = 0;
		const action: AnyAction = {
			type: actions.SET_CURRENT_PLAYER,
			index: 1
		};
		expect(currentPlayer(state, action)).toEqual(1);
	});
});
