import * as React from 'react';

type Props = {
    text: string,
    // type: string,
    type: "button" | "submit" | "reset" | undefined,
    disabled: boolean
};

// export const Button = ({text, type, disabled, ...other}: Props) => {
export const Button = ({text, type, disabled, ...other}: Props & any) => {
    return (
        <button className="ui-button"
                type={type}
                disabled={disabled}
                {...other}
        >
            {text}
        </button>
    );
};

/*export const Button = (props: Props) => {
    return (
        <button className=".ui-button"
                type={props.type}
                disabled={props.disabled}
        >
            {props.text}
        </button>
    );
};*/

