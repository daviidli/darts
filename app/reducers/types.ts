import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type playerType = {
	id: string;
	name: string;
};

export type stateType = {
	serialPort: string;
	clearDartsWaitTime: number;
	players: playerType;
	maxDarts: number;
	maxRounds: number;
	currentPlayer: number;
	currentDart: number;
	currentRound: number;
	rounds: string[][][];
	totals: any[];
	winner: number;
	waiting: boolean;
};

export type GetState = () => stateType;

export type Dispatch = ReduxDispatch<Action<any>>;

export type Store = ReduxStore<stateType, Action<any>>;
