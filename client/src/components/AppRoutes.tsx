import React from 'react';
import MainPage from './MainPage';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import Dashboard from './Dashboard';
import ExtBinGcd from './Calculators/ExtBinGcd';
import Karatsuba from './Calculators/Karatsuba';
import LinearComparison from './Calculators/LinearComparison';
import BinGcd from './Calculators/BinGcd';
import AddDouble from "./Calculators/AddDouble";

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

				<Route path={'/app/ext_bin_gcd'} element={<ExtBinGcd/>} />
				<Route path={'/app/karatsuba'} element={<Karatsuba/>} />
				<Route path={'/app/solve_lin_comparison'} element={<LinearComparison/>}/>
				<Route path={'/app/bin_gcd'} element={<BinGcd/>}/>
				<Route path={'/app/add_double'} element={<AddDouble/>}/>
			</Route>
		</Routes>
	);
};

export default AppRoutes;
