import React, {useState} from 'react'
import {Avatar, Grid, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AppRegistration from '@mui/icons-material/AppRegistration';
import {useDispatch} from "react-redux";
import {register} from "../actions/auth";

const RegisterPage=()=>{
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const paperStyle={padding :20,width:280, margin:"20px auto"}
    const btnStyle={margin:'8px 0'}
    const textFieldStyle={margin: '8px 0'}
    async function Register(){
        await dispatch(register(login, email, password))
    }
    return(
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar><AppRegistration/></Avatar>
                    <h2>Регистрация</h2>
                </Grid>
                <TextField label='Логин' style={textFieldStyle} fullWidth required onChange={event => setLogin(event.target.value)} value={login}/>
                <TextField label='Почта' style={textFieldStyle} type='email' onChange={event => setEmail(event.target.value)} value={email} fullWidth required/>
                <TextField label='Пароль' style={textFieldStyle} type='password' onChange={event => setPassword(event.target.value)} value={password} fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnStyle} onClick={Register} fullWidth>Зарегистрироваться</Button>
            </Paper>
    )
}

export default RegisterPage