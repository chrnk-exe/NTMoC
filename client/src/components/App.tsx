import React from 'react';
import classes from '../styles/App.module.sass';
import Dashboard from './Dashboard';
import { Outlet } from 'react-router';

function App() {
	return (
		<div className={classes.App}>
			<Dashboard >
				<Outlet />
			</Dashboard>
		</div>
	);
}

export default App;
