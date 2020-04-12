import React from 'react';
import { Grid } from '@material-ui/core';
import GameManager from '../../utils/GameManager';
import styles from './Panel.scss';
import HeaderBar from '../headerBar/HeaderBar';
import PlayersPanel from '../../containers/PlayersPanel';
import RoundsPanel from '../../containers/RoundsPanel';
import DartsPanel from '../../containers/DartsPanel';

export type Props = {
	gameManager: GameManager;
};

const Panel = (props: Props) => {
	const { gameManager } = props;

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			className={styles.gamePanel}
		>
			<Grid item>
				<HeaderBar gameManager={gameManager} />
			</Grid>
			<Grid
				item
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Grid item xs={3}>
					<RoundsPanel />
				</Grid>
				<Grid item xs={6} className={styles.center}>
					<DartsPanel gameManager={gameManager} />
				</Grid>
				<Grid item xs={3}>
					{/* todo: right side panel */}
				</Grid>
			</Grid>
			<Grid item>
				<PlayersPanel />
			</Grid>
		</Grid>
	);
};

export default Panel;
