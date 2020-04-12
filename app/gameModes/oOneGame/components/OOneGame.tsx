import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import routes from '../../../constants/routes.json';
import OOneOptions from './OOneOptions';
import GamePanel from '../../../containers/GamePanel';
import OOneGameManager from '../OOneGameManager';

const OOneGame = () => {
	const [gameType, setGameType] = useState<string>('');
	const [gameManager, setGameManager] = useState<OOneGameManager | null>(
		null
	);

	useEffect(() => {
		if (gameType) {
			setGameManager(new OOneGameManager(gameType));
		}
	}, [gameType]);

	if (gameManager === null) {
		return (
			<Route path={routes.OONE} exact>
				<OOneOptions setGameType={setGameType} />
			</Route>
		);
	}

	return (
		<Route>
			<GamePanel gameManager={gameManager} />
		</Route>
	);
};

export default OOneGame;
