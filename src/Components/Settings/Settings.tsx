import React, {
    ChangeEvent,
} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button";

export type SettingsType = {
     startValue:number
    setStartValue: (newStartValue:number) => void
     maxValue: number
    setMaxValue: (newMaxValue:number) => void
     setCounterValue: (number: number) => void
     setMaxCounterValue:(number:number)=>void
    // setMaxValue: (value: SetStateAction<number>) => void
    // setStartValue: (value: SetStateAction<number>) => void
}

export function Settings(props: SettingsType) {
    //сетаем кнопкой и значения отправляются в  localStorage
    const SetButtonHandler = () => {
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

    const setButtonClass = `${props.setStartValue === props.setMaxValue ? s.button_disabled : ''}`

    return (
        <div className={s.settings_body}>
            <div className={s.input_block_wrapper}>
                <div className={s.input_block}>
                    <label className={s.input_title}>max value :</label>
                    <input className={s.input_style} onChange={onChangeMaxValue} type="number"/>
                </div>
                <div className={s.input_block}>
                    <label className={s.input_title}>min value :</label>
                    <input onChange={onChangeMinValue} className={s.input_style} type="number"/>
                </div>
            </div>
            <div className={s.button_block}>
                {/*<button className={s.setButton}*/}
                {/*        onClick={SetButtonHandler}>set*/}
                {/*</button>*/}

                <Button className={setButtonClass} buttonName={'set'} callBack={SetButtonHandler} disabled ={props.startValue<=0}/>
            </div>
        </div>)


}