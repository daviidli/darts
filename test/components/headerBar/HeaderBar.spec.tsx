import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Button } from '@material-ui/core';
import HeaderBar, { Props } from '../../../app/components/headerBar/HeaderBar';
import GameManager from '../../../app/utils/GameManager';

Enzyme.configure({ adapter: new Adapter() });

const mockPush = spy();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
		push: mockPush
	})
}));

const initialProps: Props = {
	gameManager: {} as GameManager
};

const setup = (props: Props = initialProps) => {
	const wrapper = shallow(<HeaderBar {...props} />);
	return {
		wrapper,
		button: wrapper.find(Button)
	};
};

describe('HeaderBar component', () => {
	it('should match snapshot', () => {
		const { wrapper } = setup();
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should have end game button', () => {
		const stopMock = spy();
		const props = { ...initialProps };
		props.gameManager = { stop: stopMock } as any;
		const { button } = setup(props);
		const mockPushCalls = mockPush.callCount;
		expect(button.first().text()).toMatch('End Game');
		button.first().simulate('click');
		expect(mockPush.calledWith('/')).toBeTruthy();
		expect(mockPush.callCount).toBe(mockPushCalls + 1);
		expect(stopMock.calledOnce).toBeTruthy();
	});

	it('should have miss button', () => {
		const missMock = spy();
		const props = { ...initialProps };
		props.gameManager = { miss: missMock } as any;
		const { button } = setup(props);
		expect(button.last().text()).toMatch('Miss');
		button.last().simulate('click');
		expect(missMock.calledOnce).toBeTruthy();
	});
});
