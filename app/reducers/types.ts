import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type stateType = {
	serialPort: string;
	players: string[];
	currentPlayer: string; // todo: do I need this?
	maxRounds: number;
	rounds: string[][];
	maxThrows: number;
	currentThrows: string[];
};

export type GetState = () => stateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<stateType, Action<string>>;
