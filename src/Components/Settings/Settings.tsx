import React, {
    ChangeEvent,
} from 'react';
import s from './Settings.module.css'
import {Button} from '../Button/Button';


export type SettingsType = {
    startValue: number
    setStartValue: (newStartValue: number) => void
    maxValue: number
    setMaxValue: (newMaxValue: number) => void
    setCounterValue: (number: number) => void
    setMaxCounterValue: (number: number) => void
}

export function Settings(props: SettingsType) {
    //сетаем кнопкой и значения отправляются в  localStorage
    const setButtonHandler = () => {
        props.setCounterValue(props.startValue)
        props.setMaxCounterValue(props.maxValue)
    }
//  хапаем значения из MinValue и parse to integer => суём в UseState
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = e.currentTarget.value
        props.setStartValue(parseInt(newStartValue))
    }
//  хапаем значения из  maxValue и parse to integer => суём в UseState
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.currentTarget.value
        props.setMaxValue(parseInt(newMaxValue))
    }
    //styles for SET button here HUINYA - PEREDELAT

    const error = props.startValue || props.maxValue < 0 || props.startValue === props.maxValue
    const setButtonClass = error ? s.button_disabled : s.button_enabled
    const inputValueError = error ? s.input_alert : s.input_style


    return (
        <div className={s.settings_body}>
            <div className={s.input_block_wrapper}>
                <div className={s.input_block}>
                    <label className={s.input_title}>max value :</label>
                    <input value={props.maxValue} className={inputValueError} onChange={onChangeMaxValue}
                           type="number"/>
                </div>
                <div className={s.input_block}>
                    <label className={s.input_title}>min value :</label>
                    <input value={props.startValue} onChange={onChangeMinValue} className={inputValueError}
                           type="number"/>
                </div>
            </div>
            <div className={s.button_block}>
                <Button className={setButtonClass} buttonName={'set'} callBack={setButtonHandler}
                        disabled={props.startValue < 0}/>
            </div>
        </div>)


}