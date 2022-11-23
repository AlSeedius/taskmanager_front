import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function PrivateRoutes() {
    const isAuth =  useSelector(state => state.auth.isLoggedIn)
    return (
        isAuth ? <Outlet/> : <Navigate to=""/>
    );
};
