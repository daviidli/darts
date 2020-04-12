import * as actions from '../../app/actions/actions';

describe('actions', () => {
	it('should create setSerialPort action', () => {
		expect(actions.setSerialPort('somePort')).toMatchSnapshot();
	});

	it('should create setWaitTime action', () => {
		expect(actions.setWaitTime(0)).toMatchSnapshot();
	});
});
