import { connect } from 'react-redux';
import WinnerComponent from '../components/winner/WinnerComponent';
import { setWinner as setWinnerAction } from '../actions/gameActions';
import { stateType, playerType } from '../reducers/types';

type MapStateProps = {
	winner: number;
	players: playerType[];
};

type MapDispatchProps = {
	setWinner: (index: number) => {};
};

const mapStateToProps = (state: stateType) => ({
	winner: state.winner,
	players: state.players
});

const actions = {
	setWinner: setWinnerAction
};

export default connect<MapStateProps, MapDispatchProps, {}, stateType>(
	mapStateToProps,
	actions
)(WinnerComponent);
