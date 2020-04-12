import { connect } from 'react-redux';
import { stateType } from '../reducers/types';
import { setWaitTime as setWaitTimeAction } from '../actions/actions';
import SettingsSliderComponent from '../components/settingsSlider/SettingsSliderComponent';

type MapStateProps = {
	clearDartsWaitTime: number;
};

type MapDispatchProps = {
	setWaitTime: (waitTime: number) => {};
};

type OwnProps = {
	className?: string;
};

const mapStateToProps = (state: stateType): MapStateProps => ({
	clearDartsWaitTime: state.clearDartsWaitTime
});

const actions: MapDispatchProps = {
	setWaitTime: setWaitTimeAction
};

export default connect<MapStateProps, MapDispatchProps, OwnProps, stateType>(
	mapStateToProps,
	actions
)(SettingsSliderComponent);
