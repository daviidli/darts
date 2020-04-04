import React from 'react';
import { useHistory } from 'react-router';
import Options, { optionsItems } from '../options/Options';
import Players from '../players/Players';
import routes from '../../constants/routes.json';
import GameManager from '../../utils/gameManager';

type Props = {
	gameManager: GameManager;
};

const ZeroOneOptions = (props: Props) => {
	const history = useHistory();
	const { gameManager } = props;

	const handleClick = (label: string) => {
		console.log('label', label);
		gameManager.setType(label);
		history.push(`${routes['01S']}${routes.START}`);
	};

	const items: optionsItems[] = [
		{
			label: '301',
			onClick: handleClick
		}
	];

	return (
		<>
			<Options items={items} />
			<Players />
		</>
	);
};

export default ZeroOneOptions;
