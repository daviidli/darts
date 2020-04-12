import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Panel, { Props } from '../../../app/components/panel/Panel';
import GameManager from '../../../app/utils/GameManager';

Enzyme.configure({ adapter: new Adapter() });

const initialProps: Props = {
	gameManager: {} as GameManager
};

const setup = (props: Props = initialProps) => {
	const wrapper = shallow(<Panel {...props} />);
	return { wrapper };
};

describe('Panel component', () => {
	it('should match snapshot', () => {
		const { wrapper } = setup();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
