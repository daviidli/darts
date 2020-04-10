import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Rounds from '../../../app/components/rounds/Rounds';

Enzyme.configure({ adapter: new Adapter() });

const initalProps: string[] = ['1', '20-t', 'b-d'];

describe('Rounds component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<Rounds round={initalProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
