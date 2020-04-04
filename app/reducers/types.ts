import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type playerType = {
	id: string;
	name: string;
};

export type stateType = {
	serialPort: string;
	players: playerType;
	rounds: string[][][];
	currentPlayer: number;
	currentRound: number;
	currentThrow: number;
	totals: number[];
};

export type GetState = () => stateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<stateType, Action<string>>;
