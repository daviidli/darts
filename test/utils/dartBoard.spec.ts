import SerialPort from 'serialport';
import { EventEmitter } from 'events';
import DartBoard from '../../app/utils/dartBoard';

jest.mock('serialport', () => jest.fn());

const pipeMock = jest.fn();
const onMock = jest.fn();
const offMock = jest.fn();
const closeMock = jest.fn();
(SerialPort as any).mockImplementation(() => ({
	pipe: pipeMock,
	on: onMock,
	off: offMock,
	close: closeMock
}));

describe('dartBoard tests', () => {
	beforeEach(() => {
		pipeMock.mockClear();
		onMock.mockClear();
		offMock.mockClear();
		closeMock.mockClear();
	});

	it('should call close on close', () => {
		const board = new DartBoard('port');
		expect(SerialPort).toHaveBeenCalledTimes(1);
		expect(SerialPort).toHaveBeenCalledWith('port', { baudRate: 9600 });
		expect(pipeMock).toHaveBeenCalledTimes(1);
		board.close();
		expect(closeMock).toHaveBeenCalledTimes(1);
	});

	it('should get results', async () => {
		const emitter = new EventEmitter();
		pipeMock.mockImplementation(() => {
			return emitter;
		});
		const board = new DartBoard('port');
		setTimeout(() => emitter.emit('data', '0,0'), 100);
		const results = await board.getResults(1);
		expect(results).toStrictEqual(['14-d']);
	});

	it('should timeout get results', async () => {
		const emitter = new EventEmitter();
		pipeMock.mockImplementation(() => {
			return emitter;
		});
		const board = new DartBoard('port');
		setTimeout(() => emitter.emit('data', '0,0'), 100);

		return new Promise(resolve => {
			board.getResults(1, 1).catch(e => {
				expect(e).toStrictEqual(new Error('timed out'));
				resolve();
			});
		});
	});

	it('should get results with no timeout', async () => {
		const emitter = new EventEmitter();
		pipeMock.mockImplementation(() => {
			return emitter;
		});
		const board = new DartBoard('port');
		setTimeout(() => emitter.emit('data', '0,0'), 100);
		const results = await board.getResults(1, -1);
		expect(results).toStrictEqual(['14-d']);
	});

	it('should get multiple results', async () => {
		const emitter = new EventEmitter();
		pipeMock.mockImplementation(() => {
			return emitter;
		});
		const board = new DartBoard('port');
		setTimeout(() => emitter.emit('data', '0,0'), 100);
		setTimeout(() => emitter.emit('data', '0,0'), 200);
		const results = await board.getResults(2);
		expect(results).toStrictEqual(['14-d', '14-d']);
	});
});
