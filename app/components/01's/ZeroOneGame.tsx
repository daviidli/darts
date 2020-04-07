import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../constants/routes.json';
import GamePanel from '../gamePanel/GamePanel';
import ZeroOneOptions from './ZeroOneOptions';
import GameManager from '../../utils/gameManager';
import { stateType } from '../../reducers/types';

type Props = {
	serialPort: string;
};

const ZeroOneGame = (props: Props) => {
	const { serialPort } = props;
	const [gameManager, setGameManager] = useState<GameManager | null>(null);

	useEffect(() => {
		if (serialPort.length) {
			setGameManager(new GameManager(serialPort));
		}
	}, [serialPort, setGameManager]);

	if (gameManager === null) {
		return <div>error</div>;
	}

	return (
		<>
			<Route path={routes['01S']} exact>
				<ZeroOneOptions gameManager={gameManager} />
			</Route>
			<Route path={`${routes['01S']}${routes.START}`}>
				<GamePanel gameManager={gameManager} />
			</Route>
		</>
	);
};

const mapStateToProps = (state: stateType) => ({
	serialPort: state.serialPort
});

export default connect<any, any, any, stateType>(
	mapStateToProps,
	{}
)(ZeroOneGame);
