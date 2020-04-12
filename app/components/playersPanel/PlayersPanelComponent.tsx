import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { playerType } from '../../reducers/types';
import styles from './PlayersPanelComponent.scss';

export type Props = {
	totals: any[];
	players: playerType[];
	currentPlayer: number;
};

const PlayersPanelComponent = (props: Props) => {
	const { totals, players, currentPlayer } = props;

	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			className={styles.players}
		>
			{players.map((player, i) => (
				<Grid
					item
					xs
					container
					direction="column"
					justify="center"
					alignItems="center"
					key={player.id}
					className={clsx(styles.player, {
						[styles.active]: i === currentPlayer
					})}
				>
					<Grid item>
						<Typography variant="h2" className={styles.playerTotal}>
							{totals[i]}
						</Typography>
					</Grid>
					<Grid item>{player.name}</Grid>
				</Grid>
			))}
		</Grid>
	);
};

export default PlayersPanelComponent;
