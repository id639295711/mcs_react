import * as React from 'react';

type Props = {
    text?: string,
    placeholder: string,
    name: string
};

export const Input = (props: Props) => {
    return (
        <input className="ui-textfield"
               type={props.text ? props.text : "text"}
               placeholder={props.placeholder}
               name={props.name}
        >

        </input>
    );
};