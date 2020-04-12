import React, { useState, useEffect } from 'react';
import { Typography, Slider } from '@material-ui/core';

export type Props = {
	clearDartsWaitTime: number;
	setWaitTime: (wait: number) => {};
	className?: string;
};

const SettingsSliderComponent = (props: Props) => {
	const { clearDartsWaitTime, setWaitTime, className } = props;
	const [sliderValue, setSliderValue] = useState<number>(clearDartsWaitTime);

	useEffect(() => {
		setSliderValue(clearDartsWaitTime);
	}, [clearDartsWaitTime, setSliderValue]);

	const marks = [
		{
			value: 0,
			label: '∞'
		},
		{
			value: 30,
			label: '30s'
		},
		{
			value: 60,
			label: '60s'
		},
		{
			value: 90,
			label: '90s'
		},
		{
			value: 120,
			label: '120s'
		}
	];

	return (
		<div className={className}>
			<Typography gutterBottom>Clear Darts Timeout</Typography>
			<Slider
				value={sliderValue}
				min={0}
				max={120}
				step={5}
				valueLabelDisplay="auto"
				marks={marks}
				onChange={(_e, val) => setSliderValue(val as number)}
				onChangeCommitted={(_e, val) => {
					setWaitTime(val as number);
				}}
			/>
		</div>
	);
};

export default SettingsSliderComponent;
