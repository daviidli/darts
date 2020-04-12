import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';
import GameManager from '../../utils/GameManager';
import styles from './ClearDarts.scss';

export type Props = {
	waiting: boolean;
	gameManager: GameManager;
};

const ClearDarts = (props: Props) => {
	const { waiting, gameManager } = props;

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			spacing={8}
			className={clsx(styles.clearDartsPanel, {
				[styles.visible]: waiting
			})}
		>
			<Grid item>
				<Typography variant="h1" className={styles.clearDarts}>
					Clear Darts
				</Typography>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => gameManager.clearedDarts()}
				>
					Darts Cleared
				</Button>
			</Grid>
		</Grid>
	);
};

export default ClearDarts;
