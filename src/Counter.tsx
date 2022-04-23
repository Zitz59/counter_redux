import React from 'react';
import s from './App.module.css';

export type CounterType = {
    startValue: number
    setStartValue: (number: number) => void
    maxValue: number
    setMaxValue: (number: number) => void
    counterValue: number
    setCounterValue: (number: number) => void
    isDisabledButton: boolean
    setIsDisabledButton: (isDisabled: boolean) => void
}

export function Counter(props: CounterType) {

    const onclickButtonHandler = () => {
        props.setCounterValue(props.counterValue + 1)
        if (props.counterValue === props.maxValue) {
            props.setIsDisabledButton(true)
        }
        console.log(props.maxValue)

    }

    const resetButtonHandler = () => {
        props.setCounterValue(props.startValue)
        props.setIsDisabledButton(false)
    }
    const fullOrEmptyOutput = `${props.counterValue === props.maxValue ? s.output_title_full : s.output_title_empty}`
    const incButtonClass = `${props.counterValue === props.maxValue ? s.button_disabled : ''}`
    const resetButtonClass = `${props.counterValue < props.maxValue ? s.button_disabled : ''}`


    return (
        <div className={s.counter_body}>
            <div className={s.output}>
                <span className={fullOrEmptyOutput}>{props.counterValue}</span>
            </div>
            <div className={s.button_block}>
                <button disabled={props.isDisabledButton} className={incButtonClass}
                        onClick={onclickButtonHandler}>incr
                </button>
                <button disabled={!props.isDisabledButton} className={resetButtonClass}
                        onClick={resetButtonHandler}>reset
                </button>
            </div>

        </div>)
}






