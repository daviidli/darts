import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import routes from '../../constants/routes.json';
import styles from './Home.scss';
import Options, { optionsItems } from '../options/Options';

const Home = () => {
	const history = useHistory();

	const gameModes: optionsItems[] = [
		{
			label: "01's",
			onClick: () => history.push(routes['01S'])
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
					color="primary"
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
