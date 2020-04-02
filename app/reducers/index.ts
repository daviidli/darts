import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import serialPort from './serialPort';

const createRootReducer = (history: History<History.PoorMansUnknown>) => {
	return combineReducers({
		router: connectRouter(history),
		serialPort
	});
};

export default createRootReducer;
