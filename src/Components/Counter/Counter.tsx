import React from 'react';
import s from './Counter.module.css';

export type CounterType = {
    startValue: number
    setStartValue: (number: number) => void
    maxValue: number
    setMaxValue: (number: number) => void
    counterValue: number
    setCounterValue: (number: number) => void
    message: string
    setMessage: (value: string) => void

}

export function Counter(props: CounterType) {
    const {setCounterValue, startValue, counterValue, message, maxValue} = props

    let counterError = counterValue < 0
        || startValue < 0
        || maxValue <= 0
        || startValue >= maxValue
        || counterValue > maxValue

    const incButtonHandler = () => {
        if (counterValue === maxValue || counterValue < maxValue) {
            return setCounterValue(counterValue + 1)
        } else {
            return s.button_disabled
        }
    }
    const resetButtonHandler = () => {
        setCounterValue(maxValue)//reset counter to startValue
        setCounterValue(startValue)
    }

    const fullOrEmptyOutputClass = `${counterValue === maxValue ? s.output_title_full : s.output_title_empty} `
    const incButtonClass = `${counterValue === maxValue || message ? s.button_disabled : ''}`// добавить условие для enterValue
    const resetButtonClass = `${message ? s.button_disabled : ''}`

    const errorText = 'Please enter correct value!'
    const enterValueText = 'Enter the value and press Set'
    const counterOutput = <div>{props.counterValue}</div>
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
                <button disabled={counterError || startValue < 0 || !!message} className={resetButtonClass}
                        onClick={resetButtonHandler}>reset
                </button>
            </div>
        </div>)
}