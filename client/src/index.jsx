import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import {ThemeProvider} from '@mui/material';
import AppRoutes from './components/AppRoutes';
import './styles/index.css';
import theme from './styles/theme';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router>
					<AppRoutes />
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
