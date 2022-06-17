import React from 'react';
import s from './Counter.module.css';

export type CounterType = {
    startValue: number
    setStartValue: (number: number) => void
    maxValue: number
    setMaxValue: (number: number) => void
    counterValue: number
    setCounterValue: (number: number) => void
    maxCounterValue:number
    setMaxCounterValue:(number:number)=>void
}

export function Counter(props: CounterType) {

    const incButtonHandler = () => {
        props.startValue <= props.maxValue ?
        props.setCounterValue(props.counterValue + 1) : 's.button_disabled'//counter increments value
    }
    const resetButtonHandler = () => {
        props.setCounterValue(props.startValue)//reset counter to startValue
        props.setMaxCounterValue(props.maxValue)

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






