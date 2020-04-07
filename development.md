# Development

## GameManager API

[GameManager.ts](app/utils/GameManager.ts)

Game mode specific files are in [app/gameModes/](app/gameModes/). To write a new game mode, create the necessary components for the game and extend the `GameManager` class.

Example for X01 game mode: [OOneGameManager.ts](app/gameModes/oOneGame/OOneGameManager.ts)

### Methods to implement

```typescript
	/**
	 * Perform any necessary initializations for the game mode
	 * Then call this.superStart()
	 */
	public abstract start(): void;

	/**
	 * This function will be called each turn
	 */
	public abstract async turn(): Promise<void>;
```

### Helper methods

```typescript
	/**
	 * To be called by start()
	 * Increments the Redux store to correspond with the current player and round
	 */
	protected async superStart(): void;

	/**
	 * On resolve, will return the dart value
	 * If miss() was called while waiting for dart, "miss" will be returned
	 */
	protected async getDart(): Promise<string>;

	/**
	 * Stops the game and resets Redux store to default values
	 */
	public stop(): void;

	/**
	 * Sets the winner of the game and resets Redux store to default values
	 *
	 * @param index - index of player in store.players list
	 */
	public setWinner(index: number): void;

	/**
	 * Triggers a missed dart
	 */
	public miss(): void;

	/**
	 * Returns the running state of the manager
	 */
	public getRunning(): boolean;

	/**
	 * Triggers dartsCleared flag
	 */
	public clearedDarts(): void;
```

## Redux Store

[types.ts](app/reducers/types.ts)

```typescript
export type stateType = {
	serialPort: string; // serial port of the Arduino
	clearDartsWaitTime: number; // how long the clear darts screen is shown for
	players: playerType[]; // list of players
	maxDarts: number; // max number of throws for each player per round
	maxRounds: number; // max number of rounds per player
	currentPlayer: number; // index of current player
	currentDart: number; // index of current throw
	currentRound: number; // index of current round
	rounds: string[][][]; // store of all throws in game
	totals: any[]; // used as additional store for game modes
	winner: number; // index of winning player
	waiting: boolean; // flag whether to show clear darts screen
};
```
