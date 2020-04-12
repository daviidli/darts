import { AnyAction } from 'redux';
import actions from '../actions/actionTypes.json';

const totals = (state: any[] = [], action: AnyAction) => {
	switch (action.type) {
		case actions.SET_TOTALS: {
			return action.totals;
		}
		default: {
			return state;
		}
	}
};

export default totals;
