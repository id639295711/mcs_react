import * as React from 'react';

interface ButtonProps {
    text: string,
    type: "button" | "submit" | "reset" | undefined,
    disabled: boolean,
    onClick?: () => void
}

export const Button = ({text, type, disabled, onClick}: ButtonProps) => {
    return (
        <button className="ui-button"
                type={type}
                disabled={disabled}
                onClick={onClick}
        >
            {text}
        </button>
    );
};
