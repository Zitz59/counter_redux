import {
    counterReducer,
    incCounterAC,
    initialStateType,
    resetCounterAC,
    setLocalStorageMinValueAC
} from './counterReducer';

let startState: initialStateType

test('value must increment when button clicked', () => {

    startState = {
        minValue: 0,
        counterValue: 0,
        maxValue: 1,
    }

    const action = incCounterAC()
    const endState = counterReducer(startState, action)
    expect(endState.counterValue).toBe(1)

})

test('value must reset when button clicked', () => {

    startState = {
        minValue: 0,
        counterValue: 9,
        maxValue: 10,
    }

    const action = resetCounterAC()
    const endState = counterReducer(startState, action)
    expect(endState.counterValue).toBe(0)

})

test('value must set to localStorage when button clicked', () => {

    startState = {
        minValue: 0,
        counterValue: 9,
        maxValue: 10,
    }
    const action = setLocalStorageMinValueAC(23)
    const endState = counterReducer(startState, action)
    expect(endState.minValue).toBe(23)
})