import {Dispatch} from 'redux';
import {AppDispatch, GetStateType} from './store';
import {ThunkDispatch} from 'redux-thunk';

const initialState =
    {
        minValue: 0,
        counterValue: 0,
        maxValue: 1,
    }

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'INCREMENT-VALUE': {
            return {...state, counterValue: state.counterValue + 1}
        }
        case 'RESET-VALUE': {
            return {...state, counterValue: state.minValue}
        }
        case 'SET-LOCALSTORAGE-MIN-VALUE': {
            return {...state, minValue: action.minValue,}
        }
        case 'SET-LOCALSTORAGE-MAX-VALUE': {
            return {...state, maxValue: action.maxValue}
        }
        case 'SET-LOCALSTORAGE-COUNTER-VALUE': {
            return {...state, counterValue: action.counterValue}
        }
        default:
            return state

    }
}
//-----------ACTIONS--------------
export const incCounterAC = () => ({type: 'INCREMENT-VALUE'} as const)
export const resetCounterAC = () => ({type: 'RESET-VALUE'} as const)
export const setLocalStorageMinValueAC = (minValue: number) =>
    ({type: 'SET-LOCALSTORAGE-MIN-VALUE', minValue,} as const)
export const setLocalStorageMaxValueAC = (maxValue: number) =>
    ({type: 'SET-LOCALSTORAGE-MAX-VALUE', maxValue} as const)
export const setLocalStorageCounterValueAC = (counterValue: number) =>
    ({type: 'SET-LOCALSTORAGE-COUNTER-VALUE', counterValue} as const)

// -----------THUNKS---------------
export const incValuesTC = () => (dispatch: AppDispatch, getState: GetStateType) => {
    const min = getState().counter.minValue
    const max = getState().counter.maxValue
    localStorage.setItem('minValue', JSON.stringify(min))
    localStorage.setItem('maxValue', JSON.stringify(max))
    localStorage.setItem('counterValue', JSON.stringify(min))
    dispatch(setLocalStorageCounterValueAC(min))
}

export const setValuesTC = () => (dispatch: Dispatch<ActionsType>) => {
    let minValueAsString = localStorage.getItem('minValue')
    let maxValueAsString = localStorage.getItem('maxValue')
    let counterValueAsString = localStorage.getItem('counterValue')
    minValueAsString && dispatch(setLocalStorageMinValueAC(JSON.parse(minValueAsString)))
    maxValueAsString && dispatch(setLocalStorageMaxValueAC(JSON.parse(maxValueAsString)))
    counterValueAsString && dispatch(setLocalStorageCounterValueAC(JSON.parse(counterValueAsString)))
}

export type initialStateType = typeof initialState

type incrementACType = ReturnType<typeof incCounterAC>
type resetCounterACType = ReturnType<typeof resetCounterAC>
type setLocalStorageMinValueACType = ReturnType<typeof setLocalStorageMinValueAC>
type setLocalStorageMaxValueACType = ReturnType<typeof setLocalStorageMaxValueAC>
type setLocalStorageCounterValueACType = ReturnType<typeof setLocalStorageCounterValueAC>

type ActionsType =
    | incrementACType
    | resetCounterACType
    | setLocalStorageMinValueACType
    | setLocalStorageMaxValueACType
    | setLocalStorageCounterValueACType