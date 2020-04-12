import * as gameActions from '../../app/actions/gameActions';

describe('actions', () => {
	it('should create setPlayers action', () => {
		const players = [
			{ id: '1', name: 'player1' },
			{ id: '2', name: 'player2' }
		];
		expect(gameActions.setPlayers(players)).toMatchSnapshot();
	});

	it('should create addPlayer action', () => {
		expect(gameActions.addPlayer('player1')).toMatchSnapshot();
	});

	it('should create removePlayer action', () => {
		expect(gameActions.removePlayer(0)).toMatchSnapshot();
	});

	it('should create changePlayer action', () => {
		expect(gameActions.changePlayer('unicorn', 0)).toMatchSnapshot();
	});

	it('should create setMaxDarts action', () => {
		expect(gameActions.setMaxDarts(3)).toMatchSnapshot();
	});

	it('should create setMaxRounds action', () => {
		expect(gameActions.setMaxRounds(12)).toMatchSnapshot();
	});

	it('should create setCurrentPlayer action', () => {
		expect(gameActions.setCurrentPlayer(1)).toMatchSnapshot();
	});

	it('should create setCurrentDart action', () => {
		expect(gameActions.setCurrentDart(1)).toMatchSnapshot();
	});

	it('should create setCurrentRound action', () => {
		expect(gameActions.setCurrentRound(0)).toMatchSnapshot();
	});

	it('should create initializedRound action', () => {
		expect(gameActions.initializedRound([[['']]])).toMatchSnapshot();
	});

	it('should create setRound action', () => {
		expect(gameActions.setRound(0, 0, 0, '20-t')).toMatchSnapshot();
	});

	it('should create setTotals action', () => {
		expect(gameActions.setTotals([301])).toMatchSnapshot();
	});

	it('should create setWinner action', () => {
		expect(gameActions.setWinner(0)).toMatchSnapshot();
	});

	it('should create setWaiting action', () => {
		expect(gameActions.setWaiting(true)).toMatchSnapshot();
	});
});
