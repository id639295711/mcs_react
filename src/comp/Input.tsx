import React, {FC} from 'react'
import clsx from "clsx";

interface InputProps {
    text?: string,
    placeholder: string,
    name: string,
    className?: string
    other?: any
}

const Input: FC<InputProps> = ({
                                   text,
                                   placeholder,
                                   name,
                                   className,
                                   ...other
                               }) => {
    // wrong, because leads to "ui-textfield className",
    // when i actually want `ui-textfield ${className}`
    let classes = clsx({
        "ui-textfield": true,
        className: true,
    });

    // that gives me what i wanted, but have another problem:
    // "ui-textfield undefined" when className is undefined
    classes = `ui-textfield ${className}`

    // OK, finally
    classes = `ui-textfield ${className ? className : ""}`

    return (
        <input className={classes}
               type={text ? text : "text"}
               placeholder={placeholder}
               name={name}
               {...other}
        >
        </input>
    )
}

export default Input
