import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import counter from './counter';

const createRootReducer = (history: History<History.PoorMansUnknown>) => {
	return combineReducers({
		router: connectRouter(history),
		counter
	});
};

export default createRootReducer;
