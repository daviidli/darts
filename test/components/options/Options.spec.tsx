import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Options, { optionsItems } from '../../../app/components/options/Options';

Enzyme.configure({ adapter: new Adapter() });

const setup = (items: optionsItems[] = []) => {
	const wrapper = shallow(<Options items={items} />);
	return {
		wrapper,
		button: wrapper.find('.button')
	};
};

describe('Options component', () => {
	it('should match snapshot', () => {
		const items: optionsItems[] = [
			{
				label: 'op1',
				onClick: () => {}
			},
			{
				label: 'op2',
				onClick: () => {}
			}
		];
		const tree = renderer.create(<Options items={items} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should have 1 button', () => {
		const onClick = spy();
		const items: optionsItems[] = [
			{
				label: 'firstButton',
				onClick
			}
		];

		const { button } = setup(items);
		expect(button.at(0).text()).toMatch('firstButton');
		button.at(0).simulate('click');
		expect(onClick.calledOnce).toBeTruthy();
	});

	it('should have 2 buttons', () => {
		const onClick1 = spy();
		const onClick2 = spy();

		const items: optionsItems[] = [
			{
				label: 'firstButton',
				onClick: onClick1
			},
			{
				label: 'secondButton',
				onClick: onClick2
			}
		];

		const { button } = setup(items);
		expect(button.at(0).text()).toMatch('firstButton');
		expect(button.at(1).text()).toMatch('secondButton');
		button.at(1).simulate('click');
		expect(onClick1.notCalled).toBeTruthy();
		expect(onClick2.calledOnce).toBeTruthy();
	});
});
