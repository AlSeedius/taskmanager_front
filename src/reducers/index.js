import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer =  combineReducers({
    auth,
    message,
});

const store = configureStore({reducer: rootReducer});

export default store;