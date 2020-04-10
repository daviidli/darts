import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import SerialPort from 'serialport';
import routes from '../../constants/routes.json';
import styles from './Home.scss';
import Options, { optionsItems } from '../options/Options';

export type Props = {
	serialPort: string;
	setSerialPort: (port: string) => {};
};

const Home = (props: Props) => {
	const { serialPort, setSerialPort } = props;
	const history = useHistory();

	useEffect(() => {
		const fetchPorts = async () => {
			try {
				let p = await SerialPort.list();
				p = p.filter(port => port.productId);
				if (p.length) {
					setSerialPort(p[0].path);
				}
			} catch (e) {
				// continue regardless of error
				// todo: show error notification in future
			}
		};

		if (serialPort === '') {
			fetchPorts();
		}
	}, [serialPort, setSerialPort]);

	const gameModes: optionsItems[] = [
		{
			label: "01's",
			onClick: () => history.push(routes.OONE)
		}
	];

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			spacing={3}
			className={styles.home}
		>
			<Grid item>
				<Typography className={styles.title} variant="h2">
					Darts
				</Typography>
			</Grid>
			<Grid item>
				<Options items={gameModes} />
			</Grid>
			<Grid item>
				<Button
					className={styles.button}
					variant="contained"
					color="secondary"
					disableElevation
					onClick={() => history.push(routes.SETTINGS)}
				>
					Settings
				</Button>
			</Grid>
		</Grid>
	);
};

export default Home;
