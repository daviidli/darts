/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Typography } from '@material-ui/core';
import Rounds from '../rounds/Rounds';
import { getPreviousRounds } from '../../utils/dartUtils';
import styles from './RoundsPanelComponent.scss';

export type Props = {
	rounds: string[][][];
	currentPlayer: number;
	currentRound: number;
	maxRounds: number;
};

const RoundsPanelComponent = (props: Props) => {
	const { rounds, currentPlayer, currentRound, maxRounds } = props;

	const roundsShown = 6;
	return (
		<div className={styles.rounds}>
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
		</div>
	);
};

export default RoundsPanelComponent;
