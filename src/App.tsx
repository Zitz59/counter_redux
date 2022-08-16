import {useEffect, useState} from 'react';
import s from './App.module.css'
import {Counter} from './Components/Counter/Counter';
import {Settings} from './Components/Settings/Settings';
import {useAppDispatch} from './redux/hooks';
import {setValuesTC} from './redux/counterReducer';

function App() {
    const [message, setMessage] = useState<string>('')
    const dispatch=useAppDispatch()

    //----SETFROMLOCALSTORAGE-----
    useEffect(() => {
        dispatch(setValuesTC())
    }, [])

    return (
        <div className={s.app_wrapper}>
            <Settings setMessage={setMessage}/>
            <Counter
                setMessage={setMessage}
                     message={message}/>
        </div>
    );
}

export default App;