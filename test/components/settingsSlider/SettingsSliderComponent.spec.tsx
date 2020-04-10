// import { spy } from 'sinon';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
// import { Slider } from '@material-ui/core';
import SettingsSliderComponent, {
	Props
} from '../../../app/components/settingsSlider/SettingsSliderComponent';

Enzyme.configure({ adapter: new Adapter() });

const initialProps: Props = {
	clearDartsWaitTime: 0,
	setWaitTime: () => ({})
};

// const setup = (props: Props = initialProps) => {
// 	const wrapper = shallow(<SettingsSliderComponent {...props} />);
// 	return {
// 		wrapper,
// 		slider: wrapper.find(Slider)
// 	};
// };

describe('Options component', () => {
	it('should match snapshot', () => {
		const tree = renderer
			.create(<SettingsSliderComponent {...initialProps} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	// todo: continue
});
