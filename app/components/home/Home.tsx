import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import routes from '../../constants/routes.json';
import styles from './Home.scss';
import Options, { optionsItems } from '../options/Options';
import useSerialPorts from '../../hooks/useSerialPorts';

export type Props = {
	serialPort: string;
	setSerialPort: (port: string) => {};
};

const Home = (props: Props) => {
	const { serialPort, setSerialPort } = props;
	const ports = useSerialPorts();
	const history = useHistory();

	if (serialPort === '' && ports.length) {
		setSerialPort(ports[0].path);
	}

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
