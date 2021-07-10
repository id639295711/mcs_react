import React, {FC} from 'react'

interface InputProps {
    text?: string,
    placeholder: string,
    name: string
}

const Input: FC<InputProps> = ({
                                   text,
                                   placeholder,
                                   name
                               }) => {
    return (
        <input className="ui-textfield"
               type={text ? text : "text"}
               placeholder={placeholder}
               name={name}
        >
        </input>
    )
}

export default Input
