import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import DartsPanelComponent, {
	Props
} from '../../../app/components/dartsPanel/DartsPanelComponent';
import GameManager from '../../../app/utils/GameManager';

Enzyme.configure({ adapter: new Adapter() });

const initialProps: Props = {
	totals: [0],
	rounds: [[['1', '']]],
	currentPlayer: 0,
	currentRound: 0,
	currentDart: 0,
	gameManager: {} as GameManager
};

const setup = (props: Props = initialProps) => {
	const wrapper = shallow(<DartsPanelComponent {...props} />);
	return { wrapper };
};

describe('DartsPanel component', () => {
	it('should match snapshot', () => {
		const { wrapper } = setup();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
