import { connect } from 'react-redux';
import {
	addPlayer as addPlayerAction,
	removePlayer as removePlayerAction,
	changePlayer as changePlayerAction
} from '../actions/gameActions';
import { stateType, playerType } from '../reducers/types';
import PlayersComponent from '../components/players/PlayersComponent';

type MapStateProps = {
	players: playerType[];
};

type MapDispatchProps = {
	addPlayer: (player: string) => {};
	removePlayer: (index: number) => {};
	changePlayer: (player: string, index: number) => {};
};

const mapStateToProps = (state: stateType): MapStateProps => ({
	players: state.players
});

const mapDispatchToProps: MapDispatchProps = {
	addPlayer: addPlayerAction,
	removePlayer: removePlayerAction,
	changePlayer: changePlayerAction
};

export default connect<MapStateProps, MapDispatchProps, {}, stateType>(
	mapStateToProps,
	mapDispatchToProps
)(PlayersComponent);
