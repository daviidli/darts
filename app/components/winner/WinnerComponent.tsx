import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { playerType } from '../../reducers/types';
import styles from './WinnerComponent.scss';
import routes from '../../constants/routes.json';

export type Props = {
	winner: number;
	players: playerType[];
	setWinner: (index: number) => {};
};

const WinnerComponent = (props: Props) => {
	const { winner, players, setWinner } = props;
	const history = useHistory();

	const handleClick = () => {
		history.push(routes.HOME);
		setWinner(-1);
	};

	return (
		<div className={styles.container}>
			<Typography className={styles.message}>Winner is</Typography>
			<Typography className={styles.name}>
				{players[winner].name}
			</Typography>
			<Button
				variant="contained"
				color="secondary"
				className={styles.button}
				onClick={handleClick}
			>
				Home
			</Button>
		</div>
	);
};

export default WinnerComponent;
