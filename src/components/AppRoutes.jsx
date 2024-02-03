import React from 'react';
import MainPage from './MainPage';
import {Routes, Route, Outlet} from 'react-router';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import BaseAlgorithm from "./Algorithms/BaseAlgorithm";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index path="/" element={<Dashboard children={<MainPage/>}/>}/>
            <Route path={'/:type'} element={<Dashboard children={<BaseAlgorithm/>}/>}/>
            {/* ======= 404 Route =======*/}
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRoutes;
