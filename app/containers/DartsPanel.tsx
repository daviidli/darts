import { connect } from 'react-redux';
import { stateType } from '../reducers/types';
import DartsPanelComponent from '../components/dartsPanel/DartsPanelComponent';

type MapStateProps = {
	totals: any[];
	rounds: string[][][];
	currentPlayer: number;
	currentRound: number;
	currentDart: number;
};

const mapStateToProps = (state: stateType) => ({
	totals: state.totals,
	rounds: state.rounds,
	currentPlayer: state.currentPlayer,
	currentRound: state.currentRound,
	currentDart: state.currentDart
});

export default connect<MapStateProps, {}, {}, stateType>(mapStateToProps)(
	DartsPanelComponent
);
