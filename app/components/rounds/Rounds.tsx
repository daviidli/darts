import React from 'react';
import clsx from 'clsx';
import styles from './Rounds.scss';
import { mappingToString, dartValue } from '../../utils/dartUtils';
import DartText from '../dartText/DartText';

type Props = {
	round: string[];
};

const Rounds = (props: Props) => {
	const { round } = props;

	let content;

	if (round.length <= 1) {
		content = <div>{round[0]}</div>;
	} else {
		content = round.map((r, i) => {
			const roundValue: dartValue =
				r === '' ? { value: '-', modifier: '' } : mappingToString(r);

			return (
				<span
					key={`${r}-${i}`}
					className={clsx(styles.item, {
						[styles.first]: i === 0,
						[styles.last]: i === round.length - 1
					})}
				>
					<DartText value={roundValue} />
				</span>
			);
		});
	}

	return <li>{content}</li>;
};

export default Rounds;
