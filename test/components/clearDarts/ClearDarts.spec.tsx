import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Button } from '@material-ui/core';
import ClearDarts, {
	Props
} from '../../../app/components/clearDarts/ClearDarts';
import GameManager from '../../../app/utils/GameManager';

Enzyme.configure({ adapter: new Adapter() });

const initialProps: Props = {
	waiting: false,
	gameManager: {} as GameManager
};

const setup = (props: Props = initialProps) => {
	const wrapper = shallow(<ClearDarts {...props} />);
	return {
		wrapper,
		button: wrapper.find(Button)
	};
};

describe('ClearDarts component', () => {
	it('should match snapshot', () => {
		const { wrapper } = setup();
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should match snapshot when waiting = true', () => {
		const props = { ...initialProps };
		props.waiting = true;
		const { wrapper } = setup(props);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should trigger clearDarts when button is clicked', () => {
		const clearedDartsMock = spy();
		const props: Props = {
			waiting: true,
			gameManager: { clearedDarts: clearedDartsMock } as any
		};
		const { button } = setup(props);
		expect(button.text()).toMatch('Darts Cleared');
		expect(clearedDartsMock.notCalled).toBeTruthy();
		button.simulate('click');
		expect(clearedDartsMock.calledOnce).toBeTruthy();
	});
});
