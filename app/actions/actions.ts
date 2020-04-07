import actions from './actionTypes.json';

export const setSerialPort = (port: string) => ({
	type: actions.SET_SERIAL_PORT,
	port
});

export const setWaitTime = (waitTime: number) => ({
	type: actions.SET_WAIT_TIME,
	waitTime
});
