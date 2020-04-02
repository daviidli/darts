import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const serialPort = (state = '', action: AnyAction) => {
	switch (action.type) {
		case actions.SET_SERIAL_PORT:
			return action.port;
		default:
			return state;
	}
};

export default serialPort;
