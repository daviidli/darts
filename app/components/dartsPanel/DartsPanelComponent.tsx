/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { GiDart } from 'react-icons/gi';
import GameManager from '../../utils/GameManager';
import styles from './DartsPanelComponent.scss';
import { mappingToString } from '../../utils/dartUtils';
import DartText from '../dartText/DartText';

export type Props = {
	totals: any[];
	rounds: string[][][];
	currentPlayer: number;
	currentRound: number;
	currentDart: number;
	gameManager: GameManager;
};

const DartsPanelComponent = (props: Props) => {
	const { totals, rounds, currentPlayer, currentRound, currentDart } = props;

	return (
		<>
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
				{rounds[currentPlayer][currentRound].map((dart, i) => {
					let content;

					if (dart === '') {
						content = <GiDart />;
					} else {
						content = <DartText value={mappingToString(dart)} />;
					}

					return (
						<Grid
							item
							xs
							key={`round-${i}`}
							className={clsx(styles.dart, {
								[styles.active]: i === currentDart
							})}
						>
							{content}
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default DartsPanelComponent;
