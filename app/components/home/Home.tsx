import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import routes from '../../constants/routes.json';
import styles from './Home.scss';

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
			<Link to={routes.GAME}>Link</Link>
			<Grid item>
				<Button
					className={styles.button}
					variant="contained"
					color="primary"
					disableElevation
					onClick={() => history.push(routes.GAME)}
				>
					Play
				</Button>
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
