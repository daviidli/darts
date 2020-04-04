import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { stateType } from '../../reducers/types';
import { getRounds } from '../../utils/dataSelectors';

type Props = {
	players: string[];
	currentPlayer: number;
	totals: number[];
	rounds: string[][];
	maxRounds: number;
	currentThrows: string[];
};

const Panel = (props: Props) => {
	const {
		players,
		currentPlayer,
		totals,
		rounds,
		maxRounds,
		currentThrows
	} = props;

	const previousRounds: string[] = getRounds(rounds, currentPlayer);
	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<Grid
				item
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Grid item xs={3}>
					<ul>
						{previousRounds.map((round, i) => (
							// eslint-disable-next-line react/no-array-index-key
							<li key={`${round}-${i}`}>{JSON.stringify(round)}</li>
						))}
					</ul>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="h2">
						{totals[currentPlayer]}
					</Typography>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid
							item
							container
							direction="row"
							justify="center"
							alignItems="center"
						>
							{currentThrows.map((currentThrow, i) => (
								// eslint-disable-next-line react/no-array-index-key
								<Grid item key={`${currentThrow}-${i}`}>
									{currentThrow === null
										? 'dart'
										: currentThrow}
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={3}>
					player info
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				{players.map((player, i) => (
					<Grid item xs key={player}>
						{i === currentPlayer ? `${player}-current` : player}
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

const mapStateToProps = (state: stateType) => ({
	players: state.players,
	currentPlayer: state.currentPlayer,
	totals: state.totals,
	rounds: state.rounds,
	maxRounds: state.maxRounds,
	currentThrows: state.currentThrows
});

export default connect<any, any, any, stateType>(mapStateToProps, {})(Panel);
