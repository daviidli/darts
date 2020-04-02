import actions from './actionTypes.json';

const setSerialPort = (port: string) => {
	return {
		type: actions.SET_SERIAL_PORT,
		port
	};
};

const test = () => {};

export { setSerialPort, test };
