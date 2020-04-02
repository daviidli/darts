import React from 'react';
import { Grid, Button } from '@material-ui/core';
import styles from './Games.scss';

const Games = () => {
	return (
		<Grid container className={styles.games}>
			<Grid item>
				<Button className={styles.button}>01&apos;s</Button>
			</Grid>
		</Grid>
	);
};

export default Games;
