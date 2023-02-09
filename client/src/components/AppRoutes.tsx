import React from 'react';
import MainPage from './MainPage';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import FirstTest from './Tests/FirstTest';
import Dashboard from './Dashboard';
import ExtBinGcd from './Calculators/ExtBinGcd';
import Karatsuba from './Calculators/Karatsuba';
import LinearComparasion from './Calculators/LinearComparasion';
import BinGcd from './Calculators/BinGcd';

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
				{/*<Route path={'/app/test1'} element={<FirstTest />} />*/}
				{/*<Route path={'/app/test2'} element={<FirstTest />} />*/}
				{/*<Route path={'/app/test3'} element={<FirstTest />} />*/}
				<Route path={'/app/ext_bin_gcd'} element={<ExtBinGcd/>} />
				<Route path={'/app/karatsuba'} element={<Karatsuba/>} />
				<Route path={'/app/solve_lin_comparasion'} element={<LinearComparasion/>}/>
				<Route path={'/app/bin_gcd'} element={<BinGcd/>}/>
			</Route>
		</Routes>
	);
};

export default AppRoutes;
