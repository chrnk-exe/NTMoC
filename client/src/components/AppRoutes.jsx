import React from 'react';
import MainPage from './MainPage';
import {Routes, Route, Navigate, Outlet} from 'react-router';
import Dashboard from './Dashboard';
import ExtBinGcd from './Algorithms/Calculators/ExtBinGcd';
import Karatsuba from './Algorithms/Calculators/Karatsuba';
import LinearComparison from './Algorithms/Сomparisons/LinearComparison';
import BinGcd from './Algorithms/Calculators/BinGcd';
import AddDouble from './Algorithms/Calculators/AddDouble';
import GelfondShanks from './Algorithms/DiscreteLogarithms/GelfondShanks';
import FastPow from './Algorithms/Calculators/FastPow';
import Dixon from './Algorithms/Factorization/Dixon';
import ToChineseCode from './Algorithms/Calculators/ToChineseCode';
import Pollard from './Algorithms/Factorization/Pollard';
import PollardFloyd from './Algorithms/Factorization/PollardFloyd';
import P1Pollard from './Algorithms/Factorization/P1Pollard';
import Fermat from './Algorithms/Factorization/Fermat';
import NotFound from './NotFound';

const AppRoutes = () => {
	return (
		<Routes>
			{/*<Route path="/" element={<Navigate to={'/app'}/>}/>*/}
			<Route
				path="/"
				element={
					<Dashboard>
						<Outlet/>
					</Dashboard>
				}>
				<Route index element={<MainPage/>}/>

				{/* ======= Calculators ======= */}
				<Route path={'/add_double'} element={<AddDouble/>}/>
				<Route path={'/fast_pow'} element={<FastPow/>}/>
				<Route path={'/bin_gcd'} element={<BinGcd/>}/>
				<Route path={'/ext_bin_gcd'} element={<ExtBinGcd/>}/>
				<Route path={'/karatsuba'} element={<Karatsuba/>}/>
				<Route path={'/to_cc'} element={<ToChineseCode/>}/>

				{/* ======= Factorization ======= */}
				<Route path={'/dixon'} element={<Dixon/>}/>
				<Route path={'/rho_pollard_fact'} element={<Pollard/>}/>
				<Route path={'/rho_pollard_floyd_fact'} element={<PollardFloyd/>}/>
				<Route path={'/p_1_pollard'} element={<P1Pollard/>}/>
				<Route path={'/fermat'} element={<Fermat/>}/>

				{/* ======= Discrete Logarithms ======= */}
				<Route path={'/gelfond_shanks'} element={<GelfondShanks/>}/>

				{/* ======= Comparisons ======= */}
				<Route path={'/solve_lin_comparison'} element={<LinearComparison/>}/>

			</Route>
			{/* ======= 404 Route =======*/}
			<Route path={'*'} element={<NotFound/>} />
		</Routes>
	);
};

export default AppRoutes;
