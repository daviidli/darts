import { connect } from 'react-redux';
import Settings from '../components/settings/Settings';
import { stateType } from '../reducers/types';
import { setSerialPort } from '../actions/actions';

const mapStateToProps = (state: stateType) => {
	return {
		serialPort: state.serialPort
	};
};

const mapDispatchToProps = {
	setSerialPort
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
