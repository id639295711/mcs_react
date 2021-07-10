import React, {FC} from 'react'

interface LinkProps {
    text: string,
    url: string
}

const Link: FC<LinkProps> = ({
                                 url,
                                 text
                             }) => {
    return (
        <a className="ui-link" href={url}>{text}</a>
    );
}

export default Link
