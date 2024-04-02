import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {todoReducer} from './reducers/todoReducer'
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducer";

let rootReducer = combineReducers({
    todos: todoReducer,
    users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

//@ts-ignore
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))