import React, {ButtonHTMLAttributes} from 'react';

type ButtonPropsType = {
    buttonName: string
}

export const Button = ({buttonName, ...props}: ButtonPropsType & ButtonHTMLAttributes<any>) => {

    return (

        <button {...props}>{buttonName}</button>
    )
}