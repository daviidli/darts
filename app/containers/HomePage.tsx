import { connect } from 'react-redux';
import Home from '../components/home/Home';
import { stateType } from '../reducers/types';
import { setSerialPort as setSerialPortAction } from '../actions/actions';

type MapStateProps = {
	serialPort: string;
};

type MapDispatchProps = {
	setSerialPort: (port: string) => {};
};

const mapStateToProps = (state: stateType): MapStateProps => ({
	serialPort: state.serialPort
});

const actions: MapDispatchProps = {
	setSerialPort: setSerialPortAction
};

export default connect<MapStateProps, MapDispatchProps, {}, stateType>(
	mapStateToProps,
	actions
)(Home);
