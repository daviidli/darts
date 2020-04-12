# Darts

This is Electron app that communicates with an Arduino attached to a dart board to play different dart games.

I got the inspiration from this tutorial on OpenDarts ([OpenDarts - Homemade Dartboard Machine](https://www.hackster.io/ricardo-alves/opendarts-homemade-dartboard-machine-2a2914)), but unfortunately OpenDarts is for Windows only.

This project is built using the [Electron-React-Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) and is still under development. It is written in Typescript and uses React for the frontend and Redux for state management. Communication with the Arduino is done using the [SerialPort](https://serialport.io/) node module.

## Current Game Modes

-   X01
-   [Possible others](https://www.8dartfinish.com/21-popular-darts-games-play-dartboard/)

## Setup and Usage

To set up your own board, just follow the OpenDarts tutorial listed above. The code used in the Arduino is also pulled from the tutorial (the exact code I used is [here](arduino/darts.ino)).

Upon launching the Darts app, it should automatically pick the first serial port found. This can be changed in the settings. Configuration of the delimiter and baud rate has not been implemented yet.

To generate a mapping for your dartboard configuration, run `yarn && yarn generate` in the [generateMappings](generateMappings/) folder.

## Development

#### `yarn`

Install dependencies

#### `yarn dev`

Runs the app in development mode

#### `yarn test`

Runs unit tests. Can call `yarn test-watch` for Jest to watch tests.

#### `yarn package`

Package app for local platform

More info can be found in [Electron-React-Boilerplate](https://electron-react-boilerplate.js.org/)'s docs.

### GameManager API

[GameManager.ts](app/utils/GameManager.ts)

Game mode specific files are in [app/gameModes/](app/gameModes/). To write a new game mode, create the necessary components for the game and extend the `GameManager` class.

Example for X01 game mode: [OOneGameManager.ts](app/gameModes/oOneGame/OOneGameManager.ts)

#### Methods to implement

```typescript
	/**
	 * Perform any necessary initializations for the game mode
	 */
	protected abstract initialize(): void;

	/**
	 * This function will be called each turn
	 */
	protected abstract async turn(): Promise<void>;
```

#### Helper methods

```typescript
	/**
	 * To be called by start()
	 * Increments the Redux store to correspond with the current player and round
	 */
	protected async run(): void;

	/**
	 * On resolve, will return the dart value
	 * If miss() was called while waiting for dart, "miss" will be returned
	 */
	protected async getDart(): Promise<string>;

	/**
	 * Starts the game.
	 * Calls initialize and run
	 */
	public start(): void;

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

### Redux Store

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
