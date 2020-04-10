import { spy, stub } from 'sinon';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SerialPort from 'serialport';
import renderer from 'react-test-renderer';
import Home, { Props } from '../../../app/components/home/Home';

Enzyme.configure({ adapter: new Adapter() });

const mockPush = spy();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
		push: mockPush
	})
}));

const initialProps: Props = {
	serialPort: 'port1',
	setSerialPort: () => ({})
};

const setup = (props: Props = initialProps) => {
	const wrapper = shallow(<Home {...props} />);
	return {
		wrapper,
		title: wrapper.find('.title'),
		button: wrapper.find('.button')
	};
};

const setupMount = (props: Props = initialProps) => {
	const wrapper = mount(<Home {...props} />);
	return {
		wrapper,
		title: wrapper.find('.title'),
		button: wrapper.find('.button')
	};
};

describe('Home component', () => {
	it('should match the snapshot', () => {
		const tree = renderer.create(<Home {...initialProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should go to settings screen on click', () => {
		const { button } = setup();
		expect(button.at(0).text()).toMatch('Settings');
		button.at(0).simulate('click');
		expect(mockPush.callCount).toBe(1);
		expect(mockPush.calledWith('/settings')).toBeTruthy();
	});

	it('should not select any serial ports due to SerialPort.list() return of []', () => {
		const setSerialPort = spy();
		const props: Props = {
			serialPort: '',
			setSerialPort
		};

		setupMount(props);

		return new Promise(resolve => {
			setImmediate(() => {
				expect(setSerialPort.notCalled).toBeTruthy();
				resolve();
			});
		});
	});

	it('should select the first available serial port', () => {
		const path = 'port123';
		stub(SerialPort, 'list').returns(
			Promise.resolve([{ path, productId: '123' }])
		);
		const setSerialPort = spy();
		const props: Props = {
			serialPort: '',
			setSerialPort
		};

		setupMount(props);

		return new Promise(resolve => {
			setImmediate(() => {
				expect(setSerialPort.callCount).toBe(1);
				expect(setSerialPort.calledWith(path)).toBeTruthy();
				resolve();
			});
		});
	});

	it('should not select any ports as one is already selected', () => {
		const setSerialPortMock = spy();
		const props = { ...initialProps };
		props.setSerialPort = setSerialPortMock;

		setupMount(props);

		return new Promise(resolve => {
			setImmediate(() => {
				expect(setSerialPortMock.callCount).toBe(0);
				resolve();
			});
		});
	});
});
