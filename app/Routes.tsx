import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import SettingsPage from './containers/SettingsPage';

export default function Routes() {
	return (
		<App>
			<Switch>
				<Route exact path={routes.HOME} component={HomePage} />
				<Route path={routes.GAME} component={CounterPage} />
				<Route path={routes.SETTINGS} component={SettingsPage} />
			</Switch>
		</App>
	);
}
