import React from 'react';
import s from './Settings.module.css'




export function Settings() {
    return(
        <div className={s.settings_body}>
            <div className={s.input_block_wrapper}>
                <div className={s.input_block}>
                    <label className={s.input_title}>max value :</label>
                    <input className={s.input_style} type="number"/>
                </div>
                <div className={s.input_block}>
                    <label className={s.input_title}>min value :</label>
                    <input className={s.input_style} type="number"/>
                </div>
            </div>
            <div className={s.button_block}>
                <button  className={s.setButton}
                        onClick={()=>{}}>set
                </button>
            </div>
        </div>)


    
    
}