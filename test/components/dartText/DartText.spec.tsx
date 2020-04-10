import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import DartText, { Props } from '../../../app/components/dartText/DartText';

Enzyme.configure({ adapter: new Adapter() });

describe('Options component', () => {
	it('should match snapshot', () => {
		const props: Props = {
			value: {
				value: '20',
				modifier: 't'
			}
		};
		const tree = renderer.create(<DartText {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot without a modifier', () => {
		const props: Props = {
			value: {
				value: '20',
				modifier: ''
			}
		};
		const tree = renderer.create(<DartText {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
