import * as React from 'react';

type Props = {
    children: React.ReactNode
};

export const Container = (props: Props) => {
    return (
        <div className="ui-container">
            {props.children}
        </div>
    );
};