import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import serialPort from './serialPort';
import players from './players';
import currentPlayer from './currentPlayer';
import maxRounds from './maxRounds';
import rounds from './rounds';
import maxThrows from './maxThrows';
import currentThrows from './currentThrows';
import totals from './totals';

const createRootReducer = (history: any) => {
	return combineReducers({
		router: connectRouter(history) as any,
		serialPort,
		players,
		currentPlayer,
		maxRounds,
		rounds,
		maxThrows,
		currentThrows,
		totals
	});
};

export default createRootReducer;
