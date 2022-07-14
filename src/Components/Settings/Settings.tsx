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
    setMessage: (value: string) => void

}

export function Settings(props: SettingsType) {
    //сетаем кнопкой и значения отправляются в  localStorage
    const setButtonHandler = () => {
        props.setCounterValue(props.startValue)
        localStorage.setItem('startValue', JSON.stringify(props.startValue))
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue))
        localStorage.setItem('counterValue', JSON.stringify(props.startValue))
        props.setMessage('')
    }
//  хапаем значения из MinValue и parse to integer => суём в UseState
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = e.currentTarget.value
        props.setStartValue(parseInt(newStartValue))
        props.setMessage('Enter the value and press Set')
    }
//  хапаем значения из  maxValue и parse to integer => суём в UseState
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.currentTarget.value
        props.setMaxValue(parseInt(newMaxValue))
        props.setMessage('Enter the value and press Set')
    }

    let settingsError = props.startValue >= props.maxValue
        || props.startValue < 0
        || props.maxValue <= 0

    const setButtonClass = settingsError ? s.button_disabled : s.button_enabled
    const inputValueError = settingsError ? s.input_alert : s.input_style

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
                        disabled={settingsError}/>
            </div>
        </div>)


}