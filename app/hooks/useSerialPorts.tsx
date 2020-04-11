import { useState, useEffect } from 'react';
import SerialPort, { PortInfo } from 'serialport';

const useSerialPorts = () => {
	const [ports, setPorts] = useState<PortInfo[]>([]);

	useEffect(() => {
		const fetchPorts = async () => {
			try {
				let p = await SerialPort.list();
				p = p.filter((port: PortInfo) => port.manufacturer);
				if (p.length) {
					setPorts(p);
				}
			} catch (e) {
				// continue regardless of error
				// todo: show notification of failure to list ports
			}
		};

		fetchPorts();
	}, [setPorts]);

	return ports;
};

export default useSerialPorts;
