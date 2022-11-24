import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import HelloPage from "../pages/HelloPage";
import {useSelector} from "react-redux";
import BoardPage from "../pages/BoardPage";

const AppRouter = () => {
    let isAuth = useSelector(state => state.auth.isLoggedIn)
    return (isAuth ? <Routes>
        <Route exact path="/taskList" element={<MainPage/>}/>
        <Route exact path="/123" element={<HelloPage/>}/>
        <Route exact path="/table" element={<BoardPage/>}/>
        <Route path="*" element={isAuth ? <Navigate to="/taskList"/> : <Navigate to="/"/>}/>
    </Routes> : <Routes>
        <Route element={<HelloPage/>} path="/"/>
        <Route exact path="/table" element={<BoardPage/>}/>
        <Route path="*" element={isAuth ? <Navigate to="/taskList"/> : <Navigate to="/"/>}/>
    </Routes>)
};

export default AppRouter;