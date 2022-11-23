import React, {useState} from 'react'
import {Avatar, Grid, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';
import {login} from "../actions/auth";
import {useDispatch} from "react-redux";


const LoginPage=()=>{

    const dispatch = useDispatch()

    const [logIn, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const paperStyle={padding :20,width:280, margin:"20px auto"}
    const btnStyle={margin:'8px 0'}
    const textFieldStyle={margin: '8px 0'}
    async function loginFunction(){
        await dispatch(login(logIn, password))
    }

    return(
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar><LoginIcon/></Avatar>
                    <h2>Авторизация</h2>
                </Grid>
                <TextField label='Логин' style={textFieldStyle} fullWidth required onChange={event => setLogin(event.target.value)} value={logIn}/>
                <TextField label='Пароль' style={textFieldStyle} type='password' onChange={event => setPassword(event.target.value)} value={password} fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnStyle} onClick={loginFunction} fullWidth>Войти</Button>
            </Paper>
    )
}

export default LoginPage