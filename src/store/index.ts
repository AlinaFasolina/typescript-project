import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {todoReducer} from './reducers/todoReducer'
import { thunk } from "redux-thunk";

let rootReducer = combineReducers({
    todos: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

//@ts-ignore
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))