import SerialPort from 'serialport';
import mappings from '../constants/mapping.json';

const Delimiter = require('@serialport/parser-readline');

class DartBoard {
	private p: SerialPort;
	private parser: SerialPort;

	public constructor(port: string) {
		this.p = new SerialPort(port, {
			baudRate: 9600
		});

		this.parser = this.p.pipe(new Delimiter({ delimiter: '\n' }));
	}

	public getResults(n: number, timeout = 10000): Promise<string[]> {
		return new Promise((resolve, reject) => {
			const results: string[] = [];

			let timeoutObj: NodeJS.Timeout;
			if (timeout !== -1) {
				timeoutObj = setTimeout(() => reject(), timeout);
			}

			const receiveData = (data: string) => {
				results.push(data);

				if (results.length === n) {
					clearTimeout(timeoutObj);
					resolve(DartBoard.mapResults(results));
					this.parser.off('data', receiveData);
				}
			};

			this.parser.on('data', receiveData);
		});
	}

	public close() {
		this.p.close();
	}

	private static mapResults(coords: string[]): string[] {
		return coords.map(coord => {
			const [x, y] = coord.split(',');
			return mappings.board[parseInt(x, 10)][parseInt(y, 10)] as string;
		});
	}
}

export default DartBoard;
