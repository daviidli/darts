import React, { useEffect } from 'react';
import GameManager from '../../utils/GameManager';
import Panel from './Panel';

type Props = {
	gameManager: GameManager;
};

const GamePanel = (props: Props) => {
	const { gameManager } = props;

	useEffect(() => {
		gameManager.start();
	}, [gameManager]);

	return <Panel gameManager={gameManager} />;
};

export default GamePanel;
