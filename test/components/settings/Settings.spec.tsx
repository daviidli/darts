import { spy } from 'sinon';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Button } from '@material-ui/core';
import Settings, { Props } from '../../../app/components/settings/Settings';
import useSerialPorts from '../../../app/hooks/useSerialPorts';

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

jest.mock('@material-ui/core/MenuItem', () => props => {
	const { value } = props;
	return <div className="menuItemMock">{value}</div>;
});

jest.mock('../../../app/hooks/useSerialPorts', () => ({
	__esModule: true,
	default: jest.fn().mockImplementation(() => [])
}));

const initialProps: Props = {
	serialPort: '',
	setSerialPort: () => ({})
};

const setup = (props: Props = initialProps) => {
	const wrapper = mount(<Settings {...props} />);
	return {
		wrapper,
		select: wrapper.find('.selectMock'),
		portsList: wrapper.find('.menuItemMock'),
		button: wrapper.find(Button)
	};
};

describe('Settings component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<Settings {...initialProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should list out 1 port from hook', () => {
		const sp = useSerialPorts as jest.Mock;
		sp.mockImplementation(() => [
			{ path: 'port123', serialNumber: '123', manufacturer: '123' }
		]);

		const { portsList } = setup();

		return new Promise(resolve => {
			setImmediate(() => {
				expect(portsList.length).toBe(2);
				expect(portsList.at(0).text()).toMatch('');
				expect(portsList.at(1).text()).toMatch('port123');
				resolve();
			});
		});
	});

	it('should list out 2 ports from hook', () => {
		const sp = useSerialPorts as jest.Mock;
		sp.mockImplementation(() => [
			{ path: 'port123', serialNumber: '123', manufacturer: '123' },
			{ path: 'port456', serialNumber: '456', manufacturer: '456' }
		]);

		const { portsList } = setup();

		return new Promise(resolve => {
			setImmediate(() => {
				expect(portsList.length).toBe(3);
				expect(portsList.at(0).text()).toMatch('');
				expect(portsList.at(1).text()).toMatch('port123');
				expect(portsList.at(2).text()).toMatch('port456');
				resolve();
			});
		});
	});

	it('should select new value on change event', () => {
		const sp = useSerialPorts as jest.Mock;
		sp.mockImplementation(() => [
			{ path: 'port123', serialNumber: '123', manufacturer: '123' },
			{ path: 'port456', serialNumber: '456', manufacturer: '456' }
		]);

		const setSerialPortMock = spy();
		const props = { ...initialProps };
		props.setSerialPort = setSerialPortMock;
		const { select } = setup(props);
		select.simulate('change', { target: { value: 'port456' } });

		return new Promise(resolve => {
			setImmediate(() => {
				expect(setSerialPortMock.calledOnce).toBeTruthy();
				expect(setSerialPortMock.calledWith('port456')).toBeTruthy();
				resolve();
			});
		});
	});

	it('should go to home page on back button', () => {
		const { button } = setup();
		expect(button.text()).toMatch('Back');
		const pushes = mockPush.callCount;
		button.simulate('click');
		expect(mockPush.callCount).toBe(pushes + 1);
		expect(mockPush.calledWith('/')).toBeTruthy();
	});
});
