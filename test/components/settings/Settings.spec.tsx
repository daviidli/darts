import { spy, stub } from 'sinon';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SerialPort from 'serialport';
import Settings, { Props } from '../../../app/components/settings/Settings';

Enzyme.configure({ adapter: new Adapter() });

const mockPush = spy();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
		push: mockPush
	})
}));

jest.mock('../../../app/containers/SettingsSlider', () => () => (
	<div className="SettingsSlider" />
));
jest.mock('@material-ui/core/Select', () => props => {
	const { value, onChange, label, children } = props;
	return (
		<>
			<div className="selectMock" onChange={onChange}>
				{value}
			</div>
			<div className="lableMock">{label}</div>
			<div className="childrenMock">{children}</div>
		</>
	);
});

const initialProps: Props = {
	serialPort: 'port1',
	setSerialPort: () => ({})
};

const setup = (props: Props = initialProps) => {
	const wrapper = mount(<Settings {...props} />);
	return {
		wrapper,
		select: wrapper.find('.selectMock'),
		portsList: wrapper.find('.childrenMock'),
		button: wrapper.find('.button')
	};
};

describe('Settings component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<Settings {...initialProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	// it('should fetch available ports from SerialPort', () => {
	// 	jest.useFakeTimers();
	// 	stub(SerialPort, 'list').returns(
	// 		Promise.resolve([
	// 			{ path: 'port123', manufacturer: '123', serialNumber: '123' }
	// 		])
	// 	);

	// 	const { portsList } = setup();

	// 	return new Promise(resolve => {
	// 		setImmediate(() => {
	// 			expect(portsList.length).toBe(1);
	// 			expect(portsList.at(0).text()).toMatch('port123 - (123)');
	// 			resolve();
	// 		});
	// 	});
	// });
});
