import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import RoundsPanelComponent, {
	Props
} from '../../../app/components/roundsPanel/RoundsPanelComponent';

Enzyme.configure({ adapter: new Adapter() });

const initialProps: Props = {
	rounds: [[['1']]],
	currentPlayer: 0,
	currentRound: 0,
	maxRounds: 1
};

const setup = (props: Props = initialProps) => {
	const wrapper = shallow(<RoundsPanelComponent {...props} />);
	return { wrapper };
};

describe('RoundsPanel component', () => {
	it('should match snapshot', () => {
		const { wrapper } = setup();
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should match snapshot with 2 rounds', () => {
		const props: Props = {
			rounds: [
				[
					['1', '2', '3'],
					['1-d', '2-t', 'b']
				]
			],
			currentPlayer: 0,
			currentRound: 0,
			maxRounds: 2
		};
		const { wrapper } = setup(props);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should match snapshot with many rounds', () => {
		const props: Props = {
			rounds: [
				[
					['1', '2', '3'],
					['1-d', '2-t', 'b'],
					['1', '2', '3'],
					['1-d', '2-t', 'b'],
					['1', '2', '3'],
					['1-d', '2-t', 'b'],
					['1', '2', '3'],
					['1-d', '2-t', 'b'],
					['1', '2', '3'],
					['1-d', '2-t', 'b']
				]
			],
			currentPlayer: 0,
			currentRound: 7,
			maxRounds: 9
		};
		const { wrapper } = setup(props);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
