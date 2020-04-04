import React from 'react';
import { Grid, Button } from '@material-ui/core';
import styles from './Options.scss';

export type optionsItems = {
	label: string;
	onClick: (label: string) => any;
};

type Props = {
	items: optionsItems[];
};

const Options = (props: Props) => {
	const { items } = props;
	return (
		<Grid container className={styles.options}>
			{items.map(item => (
				<Grid item key={item.label}>
					<Button
						className={styles.button}
						onClick={() => item.onClick(item.label)}
					>
						{item.label}
					</Button>
				</Grid>
			))}
		</Grid>
	);
};

export default Options;
