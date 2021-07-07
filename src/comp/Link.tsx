import * as React from 'react';

type Props = {
    text: string,
    url: string
};
export const Link = (props: Props) => {
    return (
        <a className="ui-link" href={props.url}>{props.text}</a>
    );
};