import React from 'react';
import s from './App.module.css';

export type CounterType = {
    startValue: number
    setStartValue: (number: number) => void
    maxValue: number
    setMaxValue: (number: number) => void
    counterValue: number
    setCounterValue: (number: number) => void
}

export function Counter(props: CounterType) {

    const incButtonHandler = () => {
        props.setCounterValue(props.counterValue + 1)//counter increments value
    }
    const resetButtonHandler = () => {
        props.setCounterValue(props.startValue)//reset counter to 0

    }
    const fullOrEmptyOutput = `${props.counterValue === props.maxValue ? s.output_title_full : s.output_title_empty}`//check for color of count
    const incButtonClass = `${props.counterValue === props.maxValue ? s.button_disabled : ''}`//Check for opacity increment button
    const resetButtonClass = `${props.counterValue === 0 ? s.button_disabled : ''}`//Check for opacity reset button

    return (
        <div className={s.counter_body}>
            <div className={s.output}>
                <span className={fullOrEmptyOutput}>{props.counterValue}</span>
            </div>
            <div className={s.button_block}>
                <button disabled={props.counterValue === props.maxValue} className={incButtonClass}
                        onClick={incButtonHandler}>incr
                </button>
                <button disabled={props.counterValue === 0} className={resetButtonClass}
                        onClick={resetButtonHandler}>reset
                </button>
            </div>
        </div>)
}






