/* eslint-disable prefer-destructuring */
export const getValue = (dart: string): number => {
	switch (dart) {
		case 'miss':
		case '':
			return 0;
		case 'b':
			return 25;
		case 'b-d':
			return 50;
		default: {
			const arr = dart.split('-');
			if (arr.length === 1) {
				return parseInt(arr[0], 10);
			}

			const value = parseInt(arr[0], 10);
			if (arr[1] === 'd') {
				return value * 2;
			}

			return value * 3;
		}
	}
};

export const getPreviousRounds = (
	rounds: string[][],
	numRounds: number,
	currentRound: number
) => {
	if (currentRound < numRounds) {
		return rounds.slice(0, currentRound);
	}

	return rounds.slice(currentRound - numRounds, currentRound);
};

export type dartValue = {
	value: string;
	modifier: string;
};

export const mappingToString = (value: string) => {
	const ret: dartValue = {
		value: '',
		modifier: ''
	};
	switch (value) {
		case 'b':
			ret.value = 'Bull';
			return ret;
		case 'b-d':
			ret.value = 'Bull';
			ret.modifier = 'd';
			return ret;
		case 'miss':
			ret.value = 'Miss';
			return ret;
		default: {
			const arr = value.split('-');
			ret.value = arr[0];
			if (arr.length === 1) {
				return ret;
			}

			ret.modifier = arr[1];
			return ret;
		}
	}
};
