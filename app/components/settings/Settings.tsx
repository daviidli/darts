import React, { useState, useEffect } from 'react';
import SerialPort, { PortInfo } from 'serialport';
import {
	Grid,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
	Button
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Settings.scss';
import SettingsSlider from '../settingsSlider/SettingsSlider';

type Props = {
	setSerialPort: (port: string) => {};
	serialPort: string;
};

const Settings = (props: Props) => {
	const { setSerialPort, serialPort } = props;
	const [ports, setPortsList] = useState<PortInfo[]>([]);
	const history = useHistory();

	useEffect(() => {
		const fetchPorts = async () => {
			const p = await SerialPort.list();
			setPortsList(p.filter((port: PortInfo) => port.manufacturer));
		};

		fetchPorts();
	}, [setPortsList]);

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			spacing={3}
			className={styles.settings}
		>
			<Grid item className={styles.gridItem}>
				<Typography className={styles.title}>Settings</Typography>
			</Grid>
			<Grid item className={styles.gridItem}>
				<FormControl variant="outlined" className={styles.gridItem}>
					<InputLabel>Serial Port</InputLabel>
					<Select
						value={serialPort}
						onChange={(event: any) => {
							setSerialPort(event.target.value);
						}}
						label="Serial Port"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						{ports.map(port => (
							<MenuItem key={port.serialNumber} value={port.path}>
								{`${port.path} - (${port.manufacturer})`}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item className={styles.gridItem}>
				<SettingsSlider className={styles.slider} />
			</Grid>
			<Grid item className={styles.gridItem}>
				<Button
					variant="contained"
					onClick={() => history.push(routes.HOME)}
				>
					Back
				</Button>
			</Grid>
		</Grid>
	);
};

export default Settings;
