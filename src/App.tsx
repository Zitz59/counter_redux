import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import {Counter} from './Components/Counter/Counter';
import {Settings} from './Components/Settings/Settings';

function App() {

    const [startValue, setStartValue] = useState<number>(0)//start value for counter
    const [maxValue, setMaxValue] = useState<number>(0)//max value for counter
    const [counterValue, setCounterValue] = useState<number>(0)//counter state


//создать callback который передаёт startValue в counterValue


    useEffect(()=>{
        let startValueAsString = localStorage.getItem('startValue')
        let maxValueAsString = localStorage.getItem('maxValue')
        startValueAsString && setStartValue(JSON.parse(startValueAsString))
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))
    }, [])

    useEffect(() => {
            localStorage.setItem('startValue', JSON.stringify(startValue))
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
        }, [startValue,maxValue])

    return (
        <div className={s.app_wrapper}>
            <Settings
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}

            />

            <Counter startValue={startValue}
                     setStartValue={setStartValue}
                     maxValue={maxValue}
                     setMaxValue={setMaxValue}
                     counterValue={counterValue}
                     setCounterValue={setCounterValue}

            />


        </div>
    );
}

export default App;
