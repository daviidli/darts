import { spy } from 'sinon';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import SettingsSliderComponent, {
	Props
} from '../../../app/components/settingsSlider/SettingsSliderComponent';

Enzyme.configure({ adapter: new Adapter() });

// Mock material-ui's slider component
// The functionality of the slider doesn't need to be tested, but the onChange
// and onChangeCommitted functions should be.
// These functions are wrapped in the mocked component because enzyme doesn't send
// multiple args to mounted components.
jest.mock('@material-ui/core/Slider', () => props => {
	const { value, min, max, step, marks, onChange, onChangeCommitted } = props;
	const handleChange = e => onChange(e, e.mockValue);
	const handleChangeCommitted = e => onChangeCommitted(e, e.mockValue);
	return (
		<>
			<div className="mockSlider" {...{ value, min, max, step, marks }}>
				{value}
			</div>
			<div className="mockSliderOnChange" onChange={handleChange} />
			<div
				className="mockSliderOnChangeCommitted"
				onChange={handleChangeCommitted}
			/>
		</>
	);
});

const initialProps: Props = {
	clearDartsWaitTime: 0,
	setWaitTime: () => ({})
};

const setup = (props: Props = initialProps) => {
	const wrapper = mount(<SettingsSliderComponent {...props} />);
	return {
		wrapper,
		slider: wrapper.find('.mockSlider'),
		sliderOnChange: wrapper.find('.mockSliderOnChange'),
		sliderOnChangeCommitted: wrapper.find('.mockSliderOnChangeCommitted')
	};
};

describe('Settings Slider component', () => {
	it('should match snapshot', () => {
		const { wrapper } = setup();
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should have correct initial value', () => {
		const props = { ...initialProps };
		props.clearDartsWaitTime = 30;
		const { slider } = setup(props);
		expect(slider.text()).toBe('30');
	});

	it('should update slider value on props update', () => {
		const { wrapper, slider } = setup();
		expect(slider.text()).toBe('0');
		wrapper.setProps({ clearDartsWaitTime: 5 });
		return new Promise(resolve => {
			setImmediate(() => {
				expect(slider.text()).toMatch('5');
				resolve();
			});
		});
	});

	it('should set slider value on change event', () => {
		const setWaitTimeMock = spy();
		const props = { ...initialProps };
		props.setWaitTime = setWaitTimeMock;
		const { slider, sliderOnChange } = setup(props);
		expect(slider.text()).toMatch('0');
		sliderOnChange.simulate('change', { mockValue: 5 });
		expect(slider.text()).toMatch('5');
		expect(setWaitTimeMock.notCalled).toBeTruthy();
	});

	it('should set wait time on change committed event', () => {
		const setWaitTimeMock = spy();
		const props = { ...initialProps };
		props.setWaitTime = setWaitTimeMock;
		const { sliderOnChangeCommitted } = setup(props);
		sliderOnChangeCommitted.simulate('change', { mockValue: 30 });
		expect(setWaitTimeMock.calledOnce).toBeTruthy();
		expect(setWaitTimeMock.calledWith(30)).toBeTruthy();
	});
});
