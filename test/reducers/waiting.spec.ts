import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import waiting from '../../app/reducers/waiting';

describe('waiting reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(waiting(undefined, action)).toEqual(false);
	});

	it('should return same state', () => {
		const state = true;
		const action: AnyAction = {
			type: 'someType'
		};
		expect(waiting(state, action)).toEqual(state);
	});

	it('should return updated state', () => {
		const state = false;
		const action: AnyAction = {
			type: actions.SET_WAITING,
			waiting: true
		};
		expect(waiting(state, action)).toEqual(true);
	});
});
