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
import FastPow from "./Algorithms/Calculators/FastPow";
import Dixon from "./Algorithms/Factorization/Dixon";
import ToCC from "./Algorithms/Calculators/ToCC";
import Pollard from "./Algorithms/Factorization/Pollard";
import PollardFloyd from "./Algorithms/Factorization/PollardFloyd";
import P1Pollard from "./Algorithms/Factorization/P1Pollard";
import Fermat from "./Algorithms/Factorization/Fermat";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={'/app'}/>}/>
            <Route
                path="app"
                element={
                    <Dashboard>
                        <Outlet/>
                    </Dashboard>
                }>
                <Route index element={<MainPage/>}/>

                {/* ======= Calculators ======= */}
                <Route path={'/app/add_double'} element={<AddDouble/>}/>
                <Route path={'/app/fast_pow'} element={<FastPow/>}/>
                <Route path={'/app/bin_gcd'} element={<BinGcd/>}/>
                <Route path={'/app/ext_bin_gcd'} element={<ExtBinGcd/>}/>
                <Route path={'/app/karatsuba'} element={<Karatsuba/>}/>
                <Route path={'/app/to_cc'} element={<ToCC/>}/>

                {/* ======= Factorization ======= */}
                <Route path={'/app/dixon'} element={<Dixon/>}/>
                <Route path={'/app/rho_pollard_fact'} element={<Pollard/>}/>
                <Route path={'/app/rho_pollard_floyd_fact'} element={<PollardFloyd/>}/>
                <Route path={'/app/p_1_pollard'} element={<P1Pollard/>}/>
                <Route path={'/app/fermat'} element={<Fermat/>}/>

                {/* ======= Discrete Logarithms ======= */}
                <Route path={'/app/gelfond_shanks'} element={<GelfondShanks/>}/>

                {/* ======= Comparisons ======= */}
                <Route path={'/app/solve_lin_comparison'} element={<LinearComparison/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
