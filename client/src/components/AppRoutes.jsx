import React from 'react';
import MainPage from './MainPage';
import {Routes, Route, Outlet} from 'react-router';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import BaseAlgorithm from "./Algorithms/BaseAlgorithm";
import {AlgRoutes} from "../Calculators";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard><Outlet/></Dashboard>}>
                <Route index element={<MainPage/>}/>
                {
                    AlgRoutes.map(alg => (
                        <Route path={`/${alg.type}`} element={
                            <BaseAlgorithm
                                title={alg.title}
                                type={alg.type}
                                Input={alg.Input}
                                Theory={alg.Theory}
                                Example={alg.Example}
                            />
                        }/>
                    ))
                }
            </Route>
            {/* ======= 404 Route =======*/}
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRoutes;
