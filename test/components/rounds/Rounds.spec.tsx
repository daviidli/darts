import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Rounds, { Props } from '../../../app/components/rounds/Rounds';

Enzyme.configure({ adapter: new Adapter() });

const initialProps: Props = {
	round: ['1', '20-t', 'b-d']
};

const setup = (props = initialProps) => {
	const wrapper = shallow(<Rounds {...props} />);
	return { wrapper };
};

describe('Rounds component', () => {
	it('should match snapshot', () => {
		const { wrapper } = setup();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
