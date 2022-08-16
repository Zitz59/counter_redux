import {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {Button} from '../Button/Button';
import {
    incValuesTC,
    setLocalStorageMaxValueAC,
    setLocalStorageMinValueAC,
} from '../../redux/counterReducer';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';

export type SettingsType = { setMessage: (value: string) => void }

export function Settings(props: SettingsType) {

    const {setMessage} = props
    const maxValue = useAppSelector<number>(state => state.counter.maxValue)
    const minValue = useAppSelector<number>(state => state.counter.minValue)
    const dispatch = useAppDispatch()

    //---SET-TO-LOCAL-STORAGE----
    const setButtonHandler = () => {
        dispatch(incValuesTC())
        setMessage('')
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let minValue = parseInt(e.currentTarget.value)
        dispatch(setLocalStorageMinValueAC(minValue))
        if (minValue < 0) {
            return setMessage('Please enter correct value!')
        }if (minValue >= maxValue) {
            return setMessage('Please enter correct value!')
        } else  setMessage('Enter the value and press Set')
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = parseInt(e.currentTarget.value)
        dispatch(setLocalStorageMaxValueAC(maxValue))
        if (maxValue <= 0) {
            return setMessage('Please enter correct value!')
        }if (minValue >= maxValue) {
            return setMessage('Please enter correct value!')
        }if (minValue < 0 && maxValue > 0) {
            return setMessage('Please enter correct value!')
        } else setMessage('Enter the value and press Set')
    }

    let settingsError =
        minValue >= maxValue
        || minValue < 0
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
                    <input value={minValue} onChange={onChangeMinValue} className={inputValueError}
                           type="number"/>
                </div>
            </div>
            <div className={s.button_block}>
                <Button className={setButtonClass} buttonName={'set'} onClick={setButtonHandler}
                        disabled={settingsError}/>
            </div>
        </div>)
}