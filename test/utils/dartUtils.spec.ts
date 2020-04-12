import * as utils from '../../app/utils/dartUtils';

describe('getValue tests', () => {
	it('should get value for empty string', () => {
		expect(utils.getValue('')).toBe(0);
	});

	it('should get miss value', () => {
		expect(utils.getValue('miss')).toBe(0);
	});

	it('should get value for bullseye', () => {
		expect(utils.getValue('b')).toBe(25);
	});

	it('should get value for double bullseye', () => {
		expect(utils.getValue('b-d')).toBe(50);
	});

	it('should get value for regular value', () => {
		expect(utils.getValue('20')).toBe(20);
	});

	it('should get value for double value', () => {
		expect(utils.getValue('20-d')).toBe(40);
	});

	it('should get value for triple value', () => {
		expect(utils.getValue('20-t')).toBe(60);
	});
});

describe('getPreviousRounds tests', () => {
	it('should get previous rounds', () => {
		const rounds = [['1', '2', '3']];
		expect(utils.getPreviousRounds(rounds, 6, 1)).toStrictEqual(rounds);
	});

	it('should get previous rounds for a bigger example', () => {
		const rounds = [
			['1'],
			['2'],
			['3'],
			['4'],
			['5'],
			['6'],
			['7'],
			['8'],
			['9']
		];
		expect(utils.getPreviousRounds(rounds, 6, 8)).toMatchSnapshot();
	});
});

describe('mappingToString tests', () => {
	it('should get mapping for empty string', () => {
		expect(utils.mappingToString('')).toStrictEqual({
			value: 'Miss',
			modifier: ''
		});
	});

	it('should get mapping for miss', () => {
		expect(utils.mappingToString('miss')).toStrictEqual({
			value: 'Miss',
			modifier: ''
		});
	});

	it('should get mapping for bullseye', () => {
		expect(utils.mappingToString('b')).toStrictEqual({
			value: 'Bull',
			modifier: ''
		});
	});

	it('should get mapping for double bullseye', () => {
		expect(utils.mappingToString('b-d')).toStrictEqual({
			value: 'Bull',
			modifier: 'd'
		});
	});

	it('should get mapping for regular value', () => {
		expect(utils.mappingToString('20')).toStrictEqual({
			value: '20',
			modifier: ''
		});
	});

	it('should get mapping for double value', () => {
		expect(utils.mappingToString('20-d')).toStrictEqual({
			value: '20',
			modifier: 'd'
		});
	});

	it('should get mapping for triple value', () => {
		expect(utils.mappingToString('20-t')).toStrictEqual({
			value: '20',
			modifier: 't'
		});
	});
});
