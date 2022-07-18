import {ChangeEvent} from 'react';
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
    const {maxValue, startValue, setMessage, setMaxValue, setCounterValue, setStartValue} = props
    //сетаем кнопкой и значения отправляются в  localStorage
    const setButtonHandler = () => {
        setCounterValue(startValue)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterValue', JSON.stringify(startValue))
        setMessage('')
    }

//  хапаем значения из MinValue и parse to integer => суём в UseState
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = e.currentTarget.value
        setStartValue(parseInt(newStartValue))
        if ((parseInt(newStartValue)) < 0) {
            return setMessage('Please enter correct value!')
        }
        if ((parseInt(newStartValue)) >= maxValue) {
            return setMessage('Please enter correct value!')
        } else setMessage('Enter the value and press Set')
    }
//  хапаем значения из  maxValue и parse to integer => суём в UseState
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.currentTarget.value
        setMaxValue(parseInt(newMaxValue))
        if ((parseInt(newMaxValue)) <= 0) {
            return setMessage('Please enter correct value!')
        }
        if (startValue >= (parseInt(newMaxValue))) {
            return setMessage('Please enter correct value!')
        } else setMessage('Enter the value and press Set')
    }

    let settingsError = startValue >= maxValue
        || startValue < 0
        || maxValue <= 0

    const setButtonClass = settingsError ? s.button_disabled : s.button_enabled
    const inputValueError = settingsError ? s.input_alert : s.input_style

    return (
        <div className={s.settings_body}>
            <div className={s.input_block_wrapper}>
                <div className={s.input_block}>
                    <label className={s.input_title}>max value :</label>
                    <input value={maxValue} className={inputValueError} onChange={onChangeMaxValue}
                           type="number"/>
                </div>
                <div className={s.input_block}>
                    <label className={s.input_title}>min value :</label>
                    <input value={startValue} onChange={onChangeMinValue} className={inputValueError}
                           type="number"/>
                </div>
            </div>
            <div className={s.button_block}>
                <Button className={setButtonClass} buttonName={'set'} onClick={setButtonHandler}
                        disabled={settingsError}/>
            </div>
        </div>)
}