import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import clearDartsWaitTime from '../../app/reducers/clearDartsWaitTime';

describe('clearDartsWaitTime reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(clearDartsWaitTime(undefined, action)).toEqual(0);
	});

	it('should return same state', () => {
		const state = 0;
		const action: AnyAction = {
			type: 'someType',
			waitTime: 1
		};
		expect(clearDartsWaitTime(state, action)).toEqual(state);
	});

	it('should return updated state', () => {
		const state = 0;
		const action: AnyAction = {
			type: actions.SET_WAIT_TIME,
			waitTime: 30
		};
		expect(clearDartsWaitTime(state, action)).toEqual(30);
	});
});
