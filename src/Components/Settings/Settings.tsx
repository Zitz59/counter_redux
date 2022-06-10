import React, {
    ChangeEvent,
    SetStateAction,
} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button";

export type SettingsType = {
    startValue: number
    setStartValue: (value: SetStateAction<number>) => void
    maxValue: number
    setMaxValue: (value: SetStateAction<number>) => void
}


// export type ValuePropsType = {
//     value:number
//     setValue:(value:number)=>void
// }

export function Settings(props: SettingsType) {

    const SetButtonHandler = () => {
        props.setStartValue(props.startValue)
    }


    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue
    }

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
                <Button buttonName={'set'} callBack={SetButtonHandler}/>
            </div>
        </div>)


}