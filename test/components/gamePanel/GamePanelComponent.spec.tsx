import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import GamePanelComponent, {
	Props
} from '../../../app/components/gamePanel/GamePanelComponent';
import GameManager from '../../../app/utils/GameManager';

Enzyme.configure({ adapter: new Adapter() });

const initialProps: Props = {
	winner: -1,
	waiting: false,
	gameManager: { getRunning: () => true } as GameManager
};

const setup = (props: Props = initialProps) => {
	const wrapper = shallow(<GamePanelComponent {...props} />);
	return { wrapper };
};

const setupMount = (props: Props = initialProps) => {
	const wrapper = mount(<GamePanelComponent {...props} />);
	return { wrapper };
};

describe('GamePanel component', () => {
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

	it('should match snapshot when winner != -1', () => {
		const props = { ...initialProps };
		props.winner = 0;
		const { wrapper } = setup(props);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should match snapshot when gameManager is not running', () => {
		const props = { ...initialProps };
		props.gameManager = { getRunning: () => false } as GameManager;
		const { wrapper } = setup(props);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should call gameManager.start() on load', () => {
		const startMock = spy();
		const props = { ...initialProps };
		props.gameManager = {
			getRunning: () => false,
			start: startMock
		} as any;
		expect(startMock.notCalled).toBeTruthy();
		setupMount(props);
		expect(startMock.calledOnce).toBeTruthy();
	});
});
