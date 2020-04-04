import React, { useEffect } from 'react';
import GameManager from '../../utils/gameManager';
import Panel from './Panel';

type Props = {
	gameManager: GameManager;
};

const GamePanel = (props: Props) => {
	const { gameManager } = props;

	useEffect(() => {
		gameManager.setTurns(5);
		gameManager.start();
	}, [gameManager]);

	return <Panel />;
};

export default GamePanel;
