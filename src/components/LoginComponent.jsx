import React, {useState} from 'react';
import Button from "@mui/material/Button";
import ModalPage from "./ModalPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

const LoginComponent = () => {
    const [loginModalActive, setLoginModalActive] = useState(false)
    const [registerModalActive, setRegisterModalActive] = useState(false)
    return (
        <div>
            <Button color="inherit" onClick={() => setLoginModalActive(true)}>Войти</Button>
            <ModalPage active={loginModalActive} setActive={setLoginModalActive}>
                <LoginPage/>
            </ModalPage>
            <Button color="inherit" onClick={() => setRegisterModalActive(true)}>Зарегистрироваться</Button>
            <ModalPage active={registerModalActive} setActive={setRegisterModalActive}>
                <RegisterPage/>
            </ModalPage>
        </div>
    );
};

export default LoginComponent;