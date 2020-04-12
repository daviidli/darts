import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import serialPort from './serialPort';
import clearDartsWaitTime from './clearDartsWaitTime';
import players from './players';
import maxDarts from './maxDarts';
import maxRounds from './maxRounds';
import currentPlayer from './currentPlayer';
import currentDart from './currentDart';
import currentRound from './currentRound';
import rounds from './rounds';
import totals from './totals';
import winner from './winner';
import waiting from './waiting';

const createRootReducer = (history: any) => {
	return combineReducers({
		router: connectRouter(history) as any,
		serialPort,
		clearDartsWaitTime,
		players,
		maxDarts,
		maxRounds,
		currentPlayer,
		currentDart,
		currentRound,
		rounds,
		totals,
		winner,
		waiting
	});
};

export default createRootReducer;
