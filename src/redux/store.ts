import { createStore, combineReducers, applyMiddleware } from "redux";
import {weatherReducer} from "./weatherReducer";
import {configureStore} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    weather: weatherReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store


