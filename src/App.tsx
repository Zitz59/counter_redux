import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import {Counter} from './Components/Counter/Counter';
import {Settings} from './Components/Settings/Settings';

function App() {

    const [startValue, setStartValue] = useState<number>(0)//start value for counter
    const [maxValue, setMaxValue] = useState<number>(1)//max value for counter
    const [counterValue, setCounterValue] = useState<number>(0)//counter state
    const [maxCounterValue, setMaxCounterValue] = useState<number>(0)//maxCounter value for resetBtn
    const [message, setMessage] = useState<string>('')

    //const error = startValue || maxValue < 0 || startValue === maxValue
    //console.log(error)

//создать callback который передаёт startValue в counterValue

    useEffect(() => {

        let startValueAsString = localStorage.getItem('startValue')
        let maxValueAsString = localStorage.getItem('maxValue')
        startValueAsString && setStartValue(JSON.parse(startValueAsString))
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))
    }, [])

    //синхронизация должна запускаться каждый раз когда мы жмём кнопку SET
    //либо когда меняем min\max values в SETTINGS => попадает в  localState

    return (
        <div className={s.app_wrapper}>
            <Settings
                setMessage={setMessage}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setCounterValue={setCounterValue}
                setMaxCounterValue={setMaxCounterValue}
            />

            <Counter startValue={startValue}
                     setStartValue={setStartValue}
                     maxValue={maxValue}
                     setMaxValue={setMaxValue}
                     counterValue={counterValue}
                     setCounterValue={setCounterValue}
                     maxCounterValue={maxCounterValue}
                     setMaxCounterValue={setMaxCounterValue}
                     message={message}
            />
        </div>
    );
}

export default App;
