import React from 'react';
import s from './Counter.module.css';
import {incCounterAC, resetCounterAC} from '../../redux/counterReducer';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';

export type CounterType = {
    message: string
    setMessage: (value: string) => void

}
export function Counter(props: CounterType) {
    const {message} = props
    const counterValue = useAppSelector<number>(state => state.counter.counterValue)
    const minValue = useAppSelector<number>(state => state.counter.minValue)
    const maxValue = useAppSelector<number>(state => state.counter.maxValue)
    const dispatch = useAppDispatch()

    let counterError = counterValue < 0
        || minValue < 0
        || maxValue <= 0
        || minValue >= maxValue
        || counterValue > maxValue

    const incButtonHandler = () => {
        if (counterValue === maxValue || counterValue < maxValue) {
            return dispatch(incCounterAC())
        } else {
            return s.button_disabled
        }
    }
    const resetButtonHandler = () => {
        dispatch(resetCounterAC())
    }

    const fullOrEmptyOutputClass = `${counterValue === maxValue ? s.output_title_full : s.output_title_empty} `
    const incButtonClass = `${counterValue === maxValue || message ? s.button_disabled : ''}`// добавить условие для enterValue
    const resetButtonClass = `${message ? s.button_disabled : ''}`
    const errorText = 'Please enter correct value!'
    const enterValueText = 'Enter the value and press Set'
    const counterOutput = <div>{counterValue}</div>
    const errorOutput = <div className={s.spanError}>{errorText}</div>
    const enterTextOutput = <div className={s.enterValue}>{enterValueText}</div>
    const finalOutput = message === enterValueText ? enterTextOutput
        : message === errorText ? errorOutput
            : counterOutput

    return (
        <div className={s.counter_body}>
            <div className={s.counter_output}>
                <span className={fullOrEmptyOutputClass}>{finalOutput}</span>
            </div>
            <div className={s.button_block}>
                <button disabled={counterValue === maxValue || !!message} className={incButtonClass}
                        onClick={incButtonHandler}>incr
                </button>
                <button disabled={counterError || minValue < 0 || !!message} className={resetButtonClass}
                        onClick={resetButtonHandler}>reset
                </button>
            </div>
        </div>)
}