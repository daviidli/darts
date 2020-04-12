import { connect } from 'react-redux';
import GamePanelComponent from '../components/gamePanel/GamePanelComponent';
import { stateType } from '../reducers/types';
import GameManager from '../utils/GameManager';

type OwnProps = {
	gameManager: GameManager;
};

type MapStateProps = {
	winner: number;
	waiting: boolean;
};

const mapStateToProps = (state: stateType) => ({
	winner: state.winner,
	waiting: state.waiting
});

export default connect<MapStateProps, {}, OwnProps, stateType>(mapStateToProps)(
	GamePanelComponent
);
