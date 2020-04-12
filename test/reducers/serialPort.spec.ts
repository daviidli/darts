import { AnyAction } from 'redux';
import actions from '../../app/actions/actionTypes.json';
import serialPort from '../../app/reducers/serialPort';

describe('serialPort reducer', () => {
	it('should handle initial state', () => {
		const action = { type: 'someType' };
		expect(serialPort(undefined, action)).toEqual('');
	});

	it('should return same state', () => {
		const state = '';
		const action: AnyAction = {
			type: 'someType'
		};
		expect(serialPort(state, action)).toEqual(state);
	});

	it('should return updated state', () => {
		const state = '';
		const action: AnyAction = {
			type: actions.SET_SERIAL_PORT,
			port: 'port1'
		};
		expect(serialPort(state, action)).toEqual('port1');
	});
});
