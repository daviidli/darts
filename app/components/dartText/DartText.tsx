import React from 'react';
import clsx from 'clsx';
import { dartValue } from '../../utils/dartUtils';
import styles from './DartText.scss';

type Props = {
	value: dartValue;
	style?: {};
};

const DartText = (props: Props) => {
	const { value, style } = props;
	return (
		<span
			className={clsx({
				[styles.double]: value.modifier === 'd',
				[styles.triple]: value.modifier === 't'
			})}
			style={style}
		>
			{value.value}
		</span>
	);
};

export default DartText;
