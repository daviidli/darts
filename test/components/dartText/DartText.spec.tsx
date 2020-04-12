import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import DartText, { Props } from '../../../app/components/dartText/DartText';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props: Props) => {
	const wrapper = shallow(<DartText {...props} />);
	return { wrapper };
};

describe('Options component', () => {
	it('should match snapshot', () => {
		const props: Props = {
			value: {
				value: '20',
				modifier: 't'
			}
		};
		const { wrapper } = setup(props);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should match snapshot without a modifier', () => {
		const props: Props = {
			value: {
				value: '20',
				modifier: ''
			}
		};
		const { wrapper } = setup(props);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
