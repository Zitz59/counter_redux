import React from 'react';
import s from './Counter.module.css';

export type CounterType = {
    startValue: number
    setStartValue: (number: number) => void
    maxValue: number
    setMaxValue: (number: number) => void
    counterValue: number
    setCounterValue: (number: number) => void
    maxCounterValue: number
    setMaxCounterValue: (number: number) => void
    message: string
}

export function Counter(props: CounterType) {
    console.log(props.counterValue)

    //создать переменную   error в которую нужно положить логику с ошибками (
    // props.counter=>number в error можно положить string с надписью ошибки и логикой её работы

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
        // props.counterValue === props.maxValue || props.counterValue < props.maxValue ?
        //     props.setCounterValue(props.counterValue + 1) : s.button_disabled//counter increments value
    }
    const resetButtonHandler = () => {
        props.setCounterValue(props.startValue)//reset counter to startValue
        props.setMaxCounterValue(props.maxValue)
    }

    const fullOrEmptyOutputClass = `${props.counterValue === props.maxValue ? s.output_title_full : s.output_title_empty} `// color for counter
    const incButtonClass = `${props.counterValue === props.maxValue || counterError || props.message ? s.button_disabled : ''}`// добавить условие для enterValue
    const resetButtonClass = `${props.startValue === props.counterValue || props.counterValue === 0 ? s.button_disabled : ''}`//Check for opacity reset button

    const errorText = 'Please enter correct value!'
    const enterValueText = 'Enter the value and press Set'
    const counterOutput = <div>{props.counterValue}</div>
    const errorOutput = <div className={s.spanError}>{errorText}</div>
    const enterTextOutput = <div className={s.enterValue}>{enterValueText}</div>
    const finalOutput = props.message === enterValueText ? enterTextOutput : counterOutput
    console.log(props.message)
    //!props.error ? props.counterValue : props.error то что было в span

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
                <button disabled={props.counterValue === 0 || counterError} className={resetButtonClass}
                        onClick={resetButtonHandler}>reset
                </button>
            </div>
        </div>)
}






