import React from 'react';
import { connect } from 'react-redux';
import { Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { stateType, playerType } from '../../reducers/types';
import styles from './Winner.scss';
import routes from '../../constants/routes.json';
import { setWinner as setWinnerAction } from '../../actions/gameActions';

type Props = {
	winner: number;
	players: playerType[];
	setWinner: (index: number) => {};
};

const Winner = (props: Props) => {
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

const mapStateToProps = (state: stateType) => ({
	winner: state.winner,
	players: state.players
});

const actions = {
	setWinner: setWinnerAction
};

export default connect<any, any, any, stateType>(
	mapStateToProps,
	actions
)(Winner);
