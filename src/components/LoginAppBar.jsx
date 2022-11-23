import React from 'react';
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";

const LoginAppBar = ({isAuth}) => {
    return (
        isAuth
            ?
            <LogoutComponent/>
            :
            <LoginComponent/>
    )

};

export default LoginAppBar;