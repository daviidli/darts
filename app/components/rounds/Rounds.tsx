import React from 'react';
import clsx from 'clsx';
import styles from './Rounds.scss';
import { mappingToString } from '../../utils/dartUtils';
import DartText from '../dartText/DartText';

type Props = {
	round: string[];
};

const Rounds = (props: Props) => {
	const { round } = props;

	return (
		<li>
			{round.map((r, i) => {
				return (
					<span
						key={`${r}-${i}`}
						className={clsx(styles.item, {
							[styles.first]: i === 0,
							[styles.last]: i === round.length - 1
						})}
					>
						<DartText value={mappingToString(r)} />
					</span>
				);
			})}
		</li>
	);
};

export default Rounds;
