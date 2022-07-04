import React from 'react';

type ButtonPropsType = {
    className: string
    buttonName: string
    callBack: () => void
    disabled: boolean
}


export const Button = (props: ButtonPropsType) => {
    const OnClickHAndler = props.callBack

    return (

        <button className={props.className} disabled={props.disabled} onClick={OnClickHAndler}>{props.buttonName}</button>
    )
}

// КАК НИБУДЬ ПОДКЛЮЧИТЬ СТИЛИ К ЭТОЙ ЕБУЧЕЙ КНОПКЕ, ОНИ НЕ РАБОТАЮТ
