import React, {useState} from 'react';
import {Counter} from './Counter';


function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(7)
    const [counterValue, setCounterValue] = useState<number>(0)
    const [isDisabledButton, setIsDisabledButton] = useState(false)



    return (
        <div className="App">
            <Counter startValue={startValue}
                     setStartValue={setStartValue}
                     maxValue={maxValue}
                     setMaxValue={setMaxValue}
                     counterValue={counterValue}
                     setCounterValue={setCounterValue}
                     isDisabledButton={isDisabledButton}
                     setIsDisabledButton={setIsDisabledButton}


            />

        </div>
    );
}

export default App;
