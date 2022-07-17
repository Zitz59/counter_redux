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

    let counterError = props.counterValue < 0
        || props.startValue < 0
        || props.maxValue <= 0
        || props.startValue >= props.maxValue
        || props.counterValue > props.maxValue

    const incButtonHandler = () => {
        if (props.counterValue === props.maxValue || props.counterValue < props.maxValue) {
            return props.setCounterValue(props.counterValue + 1)
        } else {
            return s.button_disabled
        }
    }
    const resetButtonHandler = () => {
        props.setCounterValue(props.maxValue)//reset counter to startValue
        props.setCounterValue(props.startValue)
    }

    const fullOrEmptyOutputClass = `${props.counterValue === props.maxValue ? s.output_title_full : s.output_title_empty} `
    const incButtonClass = `${props.counterValue === props.maxValue || props.message ? s.button_disabled : ''}`// добавить условие для enterValue
    const resetButtonClass = `${props.message ? s.button_disabled : ''}`

    const errorText = 'Please enter correct value!'
    const enterValueText = 'Enter the value and press Set'
    const counterOutput = <div>{props.counterValue}</div>
    const errorOutput = <div className={s.spanError}>{errorText}</div>
    const enterTextOutput = <div className={s.enterValue}>{enterValueText}</div>
    const finalOutput = props.message === enterValueText ? enterTextOutput
        : props.message === errorText ? errorOutput
            : counterOutput


    return (
        <div className={s.counter_body}>
            <div className={s.counter_output}>
                {/*<span className={fullOrEmptyOutputClass}>{finalOutput}</span>*/}
                <span className={fullOrEmptyOutputClass}>{finalOutput}</span>
            </div>
            <div className={s.button_block}>
                <button disabled={props.counterValue === props.maxValue || !!props.message} className={incButtonClass}
                        onClick={incButtonHandler}>incr
                </button>
                <button disabled={counterError || props.startValue < 0 || !!props.message} className={resetButtonClass}
                        onClick={resetButtonHandler}>reset
                </button>
            </div>
        </div>)
}






