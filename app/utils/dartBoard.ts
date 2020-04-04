import SerialPort from 'serialport';
import mappings from '../constants/mapping.json';

const Delimiter = require('@serialport/parser-readline');

class DartBoard {
	private parser: SerialPort;

	public constructor(port: string) {
		const p = new SerialPort(port, {
			baudRate: 9600
		});

		this.parser = p.pipe(new Delimiter({ delimiter: '\n' }));
	}

	public getResults(n: number, timeout = 10000): Promise<string[]> {
		this.parser.resume();
		return new Promise((resolve, reject) => {
			const results: string[] = [];

			let timeoutObj: NodeJS.Timeout;
			if (timeout !== -1) {
				timeoutObj = setTimeout(() => reject(), timeout);
			}

			this.parser.on('data', (data: string) => {
				results.push(data);

				if (results.length === n) {
					this.parser.pause();
					clearTimeout(timeoutObj);
					resolve(DartBoard.mapResults(results));
				}
			});
		});
	}

	private static mapResults(coords: string[]): string[] {
		return coords.map(coord => {
			const [x, y] = coord.split(',');
			return mappings.board[x][y];
		});
	}
}

export default DartBoard;
