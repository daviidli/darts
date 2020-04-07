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
		type: 'dark',
		primary: {
			main: '#F1AF2C',
			light: '#F9C660',
			dark: '#E49708'
		},
		secondary: {
			main: '#018FF7',
			light: '#33A9FF',
			dark: '#0371C4'
		},
		contrastThreshold: 3
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
