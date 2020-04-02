import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Store } from '../reducers/types';
import Routes from '../Routes';

const theme = createMuiTheme({
	palette: {
		type: 'dark'
	}
});

type Props = {
	store: Store;
	history: History;
};

const Root = ({ store, history }: Props) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</ConnectedRouter>
	</Provider>
);

export default hot(Root);
