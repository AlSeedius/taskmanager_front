import React from 'react';
import Button from "@mui/material/Button";
import {logout} from "../actions/auth";
import {useDispatch} from "react-redux";

const LogoutComponent = () => {
    const dispatch = useDispatch()
    function logoutFunction(){
        dispatch(logout())
    }
    return (
        <div>
            <Button color="inherit" onClick={logoutFunction}>Выйти</Button>
        </div>
    );
};

export default LogoutComponent;