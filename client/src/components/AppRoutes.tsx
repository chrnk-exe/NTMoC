import React from 'react';
import App from './App';
import { Routes, Route, Navigate } from 'react-router';

const AppRoutes = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={ <Navigate to={'/app'} />}
				/>
				<Route path="app" element={<App />}>
					<Route index element={<div>Default route</div>}/>
				</Route>
			</Routes>
		</div>
	);
};

export default AppRoutes;