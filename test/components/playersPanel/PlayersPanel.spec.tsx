import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import PlayersPanelComponent, {
	Props
} from '../../../app/components/playersPanel/PlayersPanelComponent';

Enzyme.configure({ adapter: new Adapter() });

const initialProps: Props = {
	totals: [0],
	players: [{ id: '1', name: 'player1' }],
	currentPlayer: 0
};

const setup = (props: Props = initialProps) => {
	const wrapper = shallow(<PlayersPanelComponent {...props} />);
	return { wrapper };
};

describe('PlayersPanel component', () => {
	it('should match snapshot', () => {
		const { wrapper } = setup();
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should match snapshot with 2 players', () => {
		const props = {
			totals: [100, 200],
			players: [
				{ id: '1', name: 'player1' },
				{ id: '2', name: 'player2' }
			],
			currentPlayer: 1
		};
		const { wrapper } = setup(props);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
