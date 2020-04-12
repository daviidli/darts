import React, { useEffect } from 'react';
import GameManager from '../../utils/GameManager';
import Panel from '../panel/Panel';
import Winner from '../../containers/Winner';
import ClearDarts from '../clearDarts/ClearDarts';

export type Props = {
	winner: number;
	waiting: boolean;
	gameManager: GameManager;
};

const GamePanelComponent = (props: Props) => {
	const { winner, waiting, gameManager } = props;

	useEffect(() => {
		gameManager.start();
	}, [gameManager]);

	if (winner !== -1) {
		return <Winner />;
	}

	if (waiting) {
		return <ClearDarts gameManager={gameManager} waiting={waiting} />;
	}

	if (!gameManager.getRunning()) {
		return <div>starting up</div>;
	}

	return <Panel gameManager={gameManager} />;
};

export default GamePanelComponent;
