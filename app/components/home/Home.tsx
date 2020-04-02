import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import routes from '../../constants/routes.json';
import styles from './Home.scss';
import Games from '../games/Games';

const Home = () => {
	const history = useHistory();

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
				<Games />
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
