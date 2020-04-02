import actions from './actions.json';

export const setSerialPort = (port: string) => ({
	type: actions.SET_SERIAL_PORT,
	port
});

export const test = () => {
	return {};
};
