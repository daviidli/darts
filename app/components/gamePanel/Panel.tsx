/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { useHistory } from 'react-router';
import { GiDart } from 'react-icons/gi';
import { stateType, playerType } from '../../reducers/types';
import GameManager from '../../utils/GameManager';
import Winner from '../../containers/Winner';
import styles from './Panel.scss';
import routes from '../../constants/routes.json';
import Rounds from '../rounds/Rounds';
import { getPreviousRounds, mappingToString } from '../../utils/dartUtils';
import DartText from '../dartText/DartText';

type Props = {
	totals: any[];
	rounds: string[][][];
	players: playerType[];
	currentPlayer: number;
	currentRound: number;
	currentDart: number;
	winner: number;
	maxRounds: number;
	waiting: boolean;
	gameManager: GameManager;
};

const Panel = (props: Props) => {
	const {
		totals,
		rounds,
		players,
		currentPlayer,
		currentRound,
		currentDart,
		winner,
		maxRounds,
		waiting,
		gameManager
	} = props;
	const history = useHistory();

	const goBack = () => {
		gameManager.stop();
		history.push(routes.HOME);
	};

	if (winner !== -1) {
		return <Winner />;
	}

	if (!gameManager.getRunning()) {
		return <div>starting up</div>;
	}

	const roundsShown = 6;
	return (
		<>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				spacing={8}
				className={clsx(styles.waitingPanel, {
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
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				className={styles.gamePanel}
			>
				<Grid
					item
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
				<Grid
					item
					container
					direction="row"
					justify="center"
					alignItems="center"
				>
					<Grid item xs={3} className={styles.rounds}>
						<Typography variant="h4">
							{`Rounds (${currentRound + 1}/${maxRounds})`}
						</Typography>
						<ol
							start={
								currentRound <= roundsShown
									? 1
									: currentRound - (roundsShown - 1)
							}
						>
							{getPreviousRounds(
								rounds[currentPlayer],
								roundsShown,
								currentRound
							).map((round: string[], i) => (
								<Rounds round={round} key={`round-${i}`} />
							))}
						</ol>
					</Grid>
					<Grid item xs={6} className={styles.center}>
						<div className={styles.totalsContainer}>
							<Typography variant="h2" className={styles.totals}>
								{totals[currentPlayer]}
							</Typography>
						</div>
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
							className={styles.dartsContainer}
						>
							{rounds[currentPlayer][currentRound].map(
								(dart, i) => {
									let content;

									if (dart === '') {
										content = <GiDart />;
									} else {
										content = (
											<DartText
												value={mappingToString(dart)}
											/>
										);
									}

									return (
										<Grid
											item
											xs
											key={`round-${i}`}
											className={clsx(styles.dart, {
												[styles.active]:
													i === currentDart
											})}
										>
											{content}
										</Grid>
									);
								}
							)}
						</Grid>
					</Grid>
					<Grid item xs={3}>
						{/* todo: add player info */}
					</Grid>
				</Grid>
				<Grid
					item
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
								<Typography
									variant="h2"
									className={styles.playerTotal}
								>
									{totals[i]}
								</Typography>
							</Grid>
							<Grid item>{player.name}</Grid>
						</Grid>
					))}
				</Grid>
			</Grid>
		</>
	);
};

const mapStateToProps = (state: stateType) => ({
	totals: state.totals,
	rounds: state.rounds,
	players: state.players,
	currentPlayer: state.currentPlayer,
	currentRound: state.currentRound,
	currentDart: state.currentDart,
	winner: state.winner,
	maxRounds: state.maxRounds,
	waiting: state.waiting
});

export default connect<any, any, any, stateType>(mapStateToProps, {})(Panel);
