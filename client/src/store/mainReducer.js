import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";

export const mainReducer = combineReducers({
    login: loginReducer
})