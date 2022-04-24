import React, {useState} from 'react';
import {Counter} from './Counter';

function App() {

    const [startValue, setStartValue] = useState<number>(0)//start value for counter
    const [maxValue, setMaxValue] = useState<number>(7)//max value for counter
    const [counterValue, setCounterValue] = useState<number>(0)//counter state


    return (
        <div className="App">
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
