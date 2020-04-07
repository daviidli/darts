import React from 'react';
import { useHistory } from 'react-router';
import { Grid, Button } from '@material-ui/core';
import routes from '../../../constants/routes.json';
import Options, { optionsItems } from '../../../components/options/Options';
import Players from '../../../components/players/Players';
import styles from './OOneOptions.scss';

type Props = {
	setGameType: (type: string) => void;
};

const OOneOptions = (props: Props) => {
	const { setGameType } = props;
	const history = useHistory();

	const handleClick = (type: string) => {
		setGameType(type);
		history.push(`${routes.OONE}${routes.START}`);
	};

	const items: optionsItems[] = [
		{
			label: '301',
			onClick: handleClick
		},
		{
			label: '501',
			onClick: handleClick
		},
		{
			label: '701',
			onClick: handleClick
		},
		{
			label: '901',
			onClick: handleClick
		},
		{
			label: '1001',
			onClick: handleClick
		}
	];

	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<Grid
				item
				container
				justify="flex-start"
				className={styles.buttonBar}
			>
				<Button
					variant="outlined"
					onClick={() => history.push(routes.HOME)}
				>
					Back
				</Button>
			</Grid>
			<Grid item className={styles.optionsContainer}>
				<Options items={items} />
			</Grid>
			<Grid item className={styles.playerContainer}>
				<Players />
			</Grid>
		</Grid>
	);
};

export default OOneOptions;
