import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import SettingsPage from './containers/SettingsPage';
import ZeroOneGame from './components/01\'s/ZeroOneGame';

export default function Routes() {
	return (
		<App>
			<Switch>
				<Route exact path={routes.HOME} component={HomePage} />
				<Route path={routes['01S']} component={ZeroOneGame} />
				<Route path={routes.SETTINGS} component={SettingsPage} />
			</Switch>
		</App>
	);
}
