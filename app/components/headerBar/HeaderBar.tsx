import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import GameManager from '../../utils/GameManager';
import styles from './HeaderBar.scss';
import routes from '../../constants/routes.json';

export type Props = {
	gameManager: GameManager;
};

const HeaderBar = (props: Props) => {
	const { gameManager } = props;
	const history = useHistory();

	const goBack = () => {
		gameManager.stop();
		history.push(routes.HOME);
	};

	return (
		<Grid
			container
			direction="row"
			justify="space-around"
			alignItems="center"
			className={styles.header}
		>
			<Grid item xs>
				<Button variant="outlined" onClick={goBack}>
					End Game
				</Button>
			</Grid>
			<Grid item xs container justify="flex-end">
				<Button
					variant="contained"
					color="secondary"
					onClick={() => gameManager.miss()}
				>
					Miss
				</Button>
			</Grid>
		</Grid>
	);
};

export default HeaderBar;
