import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import WinnerComponent, {
	Props
} from '../../../app/components/winner/WinnerComponent';

Enzyme.configure({ adapter: new Adapter() });

const mockPush = spy();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
		push: mockPush
	})
}));

const initialProps: Props = {
	winner: 0,
	players: [{ id: '1', name: 'player1' }],
	setWinner: () => ({})
};

const setup = (props: Props = initialProps) => {
	const wrapper = shallow(<WinnerComponent {...props} />);
	return {
		wrapper,
		player: wrapper.find('.name'),
		button: wrapper.find('.button')
	};
};

describe('Winner component', () => {
	it('should match the snapshot', () => {
		const tree = renderer
			.create(<WinnerComponent {...initialProps} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should show correct player name', () => {
		const setWinnerMock = spy();
		const props: Props = {
			winner: 1,
			players: [
				{
					id: '1',
					name: 'player1'
				},
				{
					id: '2',
					name: 'player2'
				}
			],
			setWinner: setWinnerMock
		};
		const { player } = setup(props);
		expect(player.at(0).text()).toMatch('player2');
		expect(setWinnerMock.notCalled).toBeTruthy();
	});

	it('should go to settings screen on click', () => {
		const setWinnerMock = spy();
		const props = { ...initialProps };
		props.setWinner = setWinnerMock;
		const { button } = setup(props);
		expect(button.at(0).text()).toMatch('Home');
		button.at(0).simulate('click');
		expect(mockPush.callCount).toBe(1);
		expect(mockPush.calledWith('/')).toBeTruthy();
		expect(setWinnerMock.calledOnce).toBeTruthy();
		expect(setWinnerMock.calledWith(-1)).toBeTruthy();
	});
});
