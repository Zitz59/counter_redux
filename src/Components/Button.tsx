import React from "react";

type ButtonPropsType = {
    buttonName:string
    callBack:()=>void
}

export const Button =(props:ButtonPropsType)=>{
    const OnClickHAndler = props.callBack

    return (
        <button onClick={OnClickHAndler}>{props.buttonName}</button>
    )
}