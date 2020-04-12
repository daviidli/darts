import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import SettingsPage from './containers/SettingsPage';
import OOneGame from './gameModes/oOneGame/components/OOneGame';

export default function Routes() {
	return (
		<App>
			<Switch>
				<Route exact path={routes.HOME} component={HomePage} />
				<Route path={routes.OONE} component={OOneGame} />
				<Route path={routes.SETTINGS} component={SettingsPage} />
			</Switch>
		</App>
	);
}
