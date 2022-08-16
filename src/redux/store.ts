import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counterReducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';


const rootReducer = combineReducers({
counter:counterReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export type GetStateType = typeof store.getState
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AnyAction>
// @ts-ignore
window.store = store;