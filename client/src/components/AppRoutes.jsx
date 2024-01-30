import React from 'react';
import MainPage from './MainPage';
import {Routes, Route, Outlet} from 'react-router';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import BaseAlgorithm from "./Algorithms/BaseAlgorithm";
import AddDoubleInput from "./Algorithms/Inputs/Calculators/AddDoubleInput";
import FastPowInput from "./Algorithms/Inputs/Calculators/FastPowInput";
import BinGcdInput from "./Algorithms/Inputs/Calculators/BinGcdInput";
import ExtBinGcdInput from "./Algorithms/Inputs/Calculators/ExtBinGcdInput";
import KaratsubaInput from "./Algorithms/Inputs/Calculators/KaratsubaInput";
import ToChineseCodeInput from "./Algorithms/Inputs/Calculators/ToChineseCodeInput";
import DixonInput from "./Algorithms/Inputs/Factorization/DixonInput";
import PollardInput from "./Algorithms/Inputs/Factorization/PollardInput";
import PollardFloydInput from "./Algorithms/Inputs/Factorization/PollardFloydInput";
import P1PollardInput from "./Algorithms/Inputs/Factorization/P1PollardInput";
import FermatInput from "./Algorithms/Inputs/Factorization/FermatInput";
import GelfondShanksInput from "./Algorithms/Inputs/DiscreteLogarithms/GelfondShanksInput";
import LinearComparisonInput from "./Algorithms/Inputs/Сomparisons/LinearComparisonInput";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard><Outlet/></Dashboard>}>
                <Route index element={<MainPage/>}/>

                {/* ======= Calculators ======= */}
                <Route path={'/add_double'} element={<BaseAlgorithm
                    title={'add_double'} type={'add_double'}
                    Input={AddDoubleInput}
                    Theory={null}
                    Example={null}
                />}/>
                <Route path={'/fast_pow'} element={<BaseAlgorithm
                    title={'fast_pow'} type={'fast_pow'}
                    Input={FastPowInput}
                    Theory={null}
                    Example={null}
                />}/>
                <Route path={'/bin_gcd'} element={<BaseAlgorithm
                    title={'bin_gcd'} type={'bin_gcd'}
                    Input={BinGcdInput}
                    Theory={null}
                    Example={null}
                />}/>
                <Route path={'/ext_bin_gcd'} element={<BaseAlgorithm
                    title={'ext_bin_gcd'} type={'ext_bin_gcd'}
                    Input={ExtBinGcdInput}
                    Theory={null}
                    Example={null}
                />}/>
                <Route path={'/karatsuba'} element={<BaseAlgorithm
                    title={'karatsuba'} type={'karatsuba'}
                    Input={KaratsubaInput}
                    Theory={null}
                    Example={null}
                />}/>
                <Route path={'/to_cc'} element={<BaseAlgorithm
                    title={'to_cc'} type={'to_cc'}
                    Input={ToChineseCodeInput}
                    Theory={null}
                    Example={null}
                />}/>

                {/* ======= Factorization ======= */}
                <Route path={'/dixon'} element={<BaseAlgorithm
                    title={'dixon'} type={'dixon'}
                    Input={DixonInput}
                    Theory={null}
                    Example={null}
                />}/>
                <Route path={'/rho_pollard_fact'} element={<BaseAlgorithm
                    title={'rho_pollard_fact'} type={'rho_pollard_fact'}
                    Input={PollardInput}
                    Theory={null}
                    Example={null}
                />}/>
                <Route path={'/rho_pollard_floyd_fact'} element={<BaseAlgorithm
                    title={'rho_pollard_floyd_fact'} type={'rho_pollard_floyd_fact'}
                    Input={PollardFloydInput}
                    Theory={null}
                    Example={null}
                />}/>
                <Route path={'/p_1_pollard'} element={<BaseAlgorithm
                    title={'p_1_pollard'} type={'p_1_pollard'}
                    Input={P1PollardInput}
                    Theory={null}
                    Example={null}
                />}/>
                <Route path={'/fermat'} element={<BaseAlgorithm
                    title={'fermat'} type={'fermat'}
                    Input={FermatInput}
                    Theory={null}
                    Example={null}
                />}/>

                {/* ======= Discrete Logarithms ======= */}
                <Route path={'/gelfond_shanks'} element={<BaseAlgorithm
                    title={'gelfond_shanks'} type={'gelfond_shanks'}
                    Input={GelfondShanksInput}
                    Theory={null}
                    Example={null}
                />}/>

                {/* ======= Comparisons ======= */}
                <Route path={'/solve_lin_comparison'} element={<BaseAlgorithm
                    title={'solve_lin_comparison'} type={'solve_lin_comparison'}
                    Input={LinearComparisonInput}
                    Theory={null}
                    Example={null}
                />}/>

            </Route>
            {/* ======= 404 Route =======*/}
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRoutes;
