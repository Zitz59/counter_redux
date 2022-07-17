import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import {Counter} from './Components/Counter/Counter';
import {Settings} from './Components/Settings/Settings';

function App() {

    const [startValue, setStartValue] = useState<number>(0)//start value for counter
    const [maxValue, setMaxValue] = useState<number>(1)//max value for counter
    const [counterValue, setCounterValue] = useState<number>(0)//counter state
    const [message, setMessage] = useState<string>('')

    // let counterError = counterValue < 0 ? setError(!error): null
    //     || startValue < 0 ?  setError(!error) : null
    //     || maxValue <= 0 ? setError(!error) : null
    //     || startValue >= maxValue ? setError(!error)  : null
    //     || counterValue > maxValue ? setError(!error)  : null
    // localStorage.setItem('counterError',JSON.stringify(counterError))


    //const error = startValue || maxValue < 0 || startValue === maxValue
    //console.log(error)

//создать callback который передаёт startValue в counterValue

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        let maxValueAsString = localStorage.getItem('maxValue')
        // let counterValueAsString = localStorage.getItem('counterValue')
        // let counterErrorAsString = localStorage.getItem('counterError')
        startValueAsString && setStartValue(JSON.parse(startValueAsString))
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))
        // counterValueAsString && setCounterValue(JSON.parse(counterValueAsString))
        // counterErrorAsString && setError(JSON.parse(counterErrorAsString))
    }, [])


    useEffect(()=>{
        let counterValueAsString = localStorage.getItem('counterValue')
        counterValueAsString && setCounterValue(JSON.parse(counterValueAsString))
    },[])

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
            />

            <Counter startValue={startValue}
                     setStartValue={setStartValue}
                     maxValue={maxValue}
                     setMaxValue={setMaxValue}
                     counterValue={counterValue}
                     setCounterValue={setCounterValue}
                     setMessage={setMessage}
                     message={message}

            />
        </div>
    );
}

export default App;
