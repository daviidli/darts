import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Button, TextField, IconButton } from '@material-ui/core';
import PlayersComponent, {
	Props
} from '../../../app/components/players/PlayersComponent';

Enzyme.configure({ adapter: new Adapter() });

const initialProps: Props = {
	players: [{ id: '1', name: 'player1' }],
	addPlayer: () => ({}),
	removePlayer: () => ({}),
	changePlayer: () => ({})
};

const setup = (props: Props = initialProps) => {
	const wrapper = shallow(<PlayersComponent {...props} />);
	return {
		wrapper,
		button: wrapper.find(Button),
		iconButton: wrapper.find(IconButton),
		input: wrapper.find(TextField)
	};
};

describe('Players component', () => {
	it('should match snapshot', () => {
		const { wrapper } = setup();
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should match snapshot for 2 players', () => {
		const props: Props = { ...initialProps };
		props.players = [
			{
				id: '1',
				name: 'player1'
			},
			{
				id: '2',
				name: 'player2'
			}
		];
		const { wrapper } = setup(props);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should add new player', () => {
		const addPlayerMock = spy();
		const props = { ...initialProps };
		props.addPlayer = addPlayerMock;
		const { button } = setup(props);
		expect(button.text()).toMatch('Add Player');
		button.simulate('click');
		expect(addPlayerMock.calledOnce).toBeTruthy();
		expect(addPlayerMock.calledWith('player 2')).toBeTruthy();
	});

	it('should delete a player', () => {
		const removePlayerMock = spy();
		const props = { ...initialProps };
		props.removePlayer = removePlayerMock;
		const { iconButton } = setup(props);
		iconButton.simulate('click');
		expect(removePlayerMock.calledOnce).toBeTruthy();
		expect(removePlayerMock.calledWith(0)).toBeTruthy();
	});

	it("should edit a player's name", () => {
		const changePlayerMock = spy();
		const props = { ...initialProps };
		props.changePlayer = changePlayerMock;
		const { input } = setup(props);
		input.simulate('change', { target: { value: 'player12' } });
		expect(changePlayerMock.calledOnce).toBeTruthy();
		expect(
			changePlayerMock.firstCall.calledWith('player12', 0)
		).toBeTruthy();
	});
});
