import actions from './actionTypes.json';
import { playerType } from '../reducers/types';

export const setPlayers = (players: playerType[]) => ({
	type: actions.SET_PLAYERS,
	players
});

export const addPlayer = (player: string) => ({
	type: actions.ADD_PLAYER,
	player
});

export const removePlayer = (index: number) => ({
	type: actions.REMOVE_PLAYER,
	index
});

export const changePlayer = (player: string, index: number) => ({
	type: actions.CHANGE_PLAYER,
	player,
	index
});

export const setMaxDarts = (max: number) => ({
	type: actions.SET_MAX_DARTS,
	max
});

export const setMaxRounds = (max: number) => ({
	type: actions.SET_MAX_ROUNDS,
	max
});

export const setCurrentPlayer = (index: number) => ({
	type: actions.SET_CURRENT_PLAYER,
	index
});

export const setCurrentDart = (index: number) => ({
	type: actions.SET_CURRENT_DART,
	index
});

export const setCurrentRound = (index: number) => ({
	type: actions.SET_CURRENT_ROUND,
	index
});

export const initializedRound = (rounds: string[][][]) => ({
	type: actions.INITIALIZE_ROUNDS,
	rounds
});

export const setRound = (
	player: number,
	round: number,
	dart: number,
	roundValue: string
) => ({
	type: actions.SET_ROUND,
	player,
	round,
	dart,
	roundValue
});

export const setTotals = (totals: any[]) => ({
	type: actions.SET_TOTALS,
	totals
});

export const setWinner = (winner: number) => ({
	type: actions.SET_WINNER,
	winner
});

export const setWaiting = (waiting: boolean) => ({
	type: actions.SET_WAITING,
	waiting
});
