import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const totals = (state: number[] = [], action: AnyAction) => {
	switch (action.type) {
		case actions.SET_TOTALS: {
			return action.totals;
		}
		case actions.SET_TOTAL: {
			const newTotals = [...state];
			newTotals[action.index] = action.total;
			return newTotals;
		}
		default: {
			return state;
		}
	}
};

export default totals;
