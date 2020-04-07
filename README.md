<div style="text-align: center"><img src="resources/imgs/darts.png" /></div>

## About

This is Electron app that communicates with an Arduino attached to a dart board to play different dart games.

I got the inspiration from this tutorial on OpenDarts ([OpenDarts - Homemade Dartboard Machine](https://www.hackster.io/ricardo-alves/opendarts-homemade-dartboard-machine-2a2914)), but unfortunately OpenDarts is for Windows only.

This project is built using the [Electron-React-Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) and still under development. It is written in Typescript and uses React for frontend and Redux for state management. Communication with the Arduino is done using the [SerialPort](https://serialport.io/) package.

## Current [Game Modes](https://www.8dartfinish.com/21-popular-darts-games-play-dartboard/)

-   X01

## Setup and Usage

To set up your own board, just follow the OpenDarts tutorial listed above. The code used in the Arduino is also pulled from the tutorial (the exact code I used is [here](arduino/darts.ino)).

Upon launching the Darts app, it should automatically pick the first serial port found. This can be changed in the settings. Configuration of the delimiter and baud rate has not been implemented yet.

To generate a mapping for your specific configuration of pins, run `yarn && yarn generate` in the [generateMappings](generateMappings/) folder.

## Development

Details can be found [here](development.md).

## Todos

-   Add setting to specifiy file for mappings
-   Implement more game modes
-   Show player stats side panel
-   Save/store player data to track progress over time
-   Light vs dark theme
-   Show total for each round
-   Have toggle for s-bull and d-bull to both be 50
-   Make font larger/touch friendly
-   Add control for xbox controller
