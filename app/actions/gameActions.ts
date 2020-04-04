import actions from './actionTypes.json';

export const setPlayers = (players: string[]) => ({
	type: actions.SET_PLAYERS,
	players
});

export const setPlayer = (player: string, index: number) => ({
	type: actions.SET_PLAYER,
	player,
	index
});

export const addPlayer = (player: string) => ({
	type: actions.ADD_PLAYER,
	player
});

export const removePlayer = (player: string) => ({
	type: actions.REMOVE_PLAYER,
	player
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

export const setCurrentRound = (currentRound: number) => ({
	type: actions.SET_CURRENT_ROUND,
	currentRound
});

export const setCurrentThrow = (currentThrow: string[]) => ({
	type: actions.SET_CURRENT_THROW,
	currentThrow
});

export const setTotals = (totals: number[]) => ({
	type: actions.SET_TOTALS,
	totals
});
