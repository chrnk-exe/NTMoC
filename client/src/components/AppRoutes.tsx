import React from 'react';
import MainPage from './MainPage';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import FirstTest from './Tests/FirstTest';
import Dashboard from './Dashboard';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={'/app'} />} />
			<Route
				path="app"
				element={
					<Dashboard>
						<Outlet />
					</Dashboard>
				}>
				<Route index element={<MainPage />} />
				<Route path={'/app/test1'} element={<FirstTest />} />
				<Route path={'/app/test2'} element={<FirstTest />} />
				<Route path={'/app/test3'} element={<FirstTest />} />

			</Route>
		</Routes>
	);
};

export default AppRoutes;
