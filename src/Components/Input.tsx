import React, {ChangeEvent} from 'react';

type InputPropsType ={
    className:string
    callBack:(e:ChangeEvent<HTMLInputElement>)=>void
    type:string
    value:number
}

export const Input = (props:InputPropsType)=>{
    const onChangeHandler = ()=>{
        props.callBack
    }


    return (<input type='text' onChange={onChangeHandler}/>)
}