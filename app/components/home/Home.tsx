import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import SerialPort from 'serialport';
import routes from '../../constants/routes.json';
import styles from './Home.scss';
import Options, { optionsItems } from '../options/Options';
import store from '../../store/store';
import { setSerialPort } from '../../actions/actions';

const Home = () => {
	const history = useHistory();

	useEffect(() => {
		const fetchPorts = async () => {
			const p = await SerialPort.list();
			if (p.length) {
				store.dispatch(setSerialPort(p[0].path));
			}
		};

		const state = store.getState();
		if (state.serialPort === '') {
			fetchPorts();
		}
	}, []);

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
