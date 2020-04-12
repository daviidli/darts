import { connect } from 'react-redux';
import { stateType } from '../reducers/types';
import RoundsPanelComponent from '../components/roundsPanel/RoundsPanelComponent';

type MapStateProps = {
	rounds: string[][][];
	currentPlayer: number;
	currentRound: number;
	maxRounds: number;
};

const mapStateToProps = (state: stateType) => ({
	rounds: state.rounds,
	currentPlayer: state.currentPlayer,
	currentRound: state.currentRound,
	maxRounds: state.maxRounds
});

export default connect<MapStateProps, {}, {}, stateType>(mapStateToProps)(
	RoundsPanelComponent
);
