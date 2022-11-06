import React from 'react';
import App from './App';
import AboutEtu from './AboutEtu';
import { Routes, Route, Navigate } from 'react-router';
import FirstTest from './Tests/FirstTest';

const AppRoutes = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={ <Navigate to={'/app'} />}
				/>
				<Route path="app" element={<App />}>
					<Route index element={<AboutEtu />}/>
					<Route path={'/app/test1'} element={<FirstTest />}/>
				</Route>
			</Routes>
		</div>
	);
};

export default AppRoutes;