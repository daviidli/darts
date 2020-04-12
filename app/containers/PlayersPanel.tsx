import { connect } from 'react-redux';
import PlayersPanelComponent from '../components/playersPanel/PlayersPanelComponent';
import { stateType, playerType } from '../reducers/types';

type MapStateProps = {
	totals: any[];
	players: playerType[];
	currentPlayer: number;
};

const mapStateToProps = (state: stateType) => ({
	totals: state.totals,
	players: state.players,
	currentPlayer: state.currentPlayer
});

export default connect<MapStateProps, {}, {}, stateType>(mapStateToProps)(
	PlayersPanelComponent
);
