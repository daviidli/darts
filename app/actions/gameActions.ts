import actions from './actionTypes.json';

export const setPlayers = (players: string[]) => ({
	type: actions.SET_PLAYERS,
	players
});

export const setCurrentPlayer = (index: number) => ({
	type: actions.SET_CURRENT_PLAYER,
	index
});

export const setMaxRounds = (maxRounds: number) => ({
	type: actions.SET_MAX_ROUNDS,
	maxRounds
});

// todo: set rounds

export const addRound = (round: string[]) => ({
	type: actions.ADD_ROUND,
	round
});

export const setMaxThrows = (maxThrows: number) => ({
	type: actions.SET_MAX_THROWS,
	maxThrows
});

export const setCurrentThrows = (throws: string[]) => ({
	type: actions.SET_CURRENT_THROWS,
	throws
});
