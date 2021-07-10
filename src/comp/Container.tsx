import React, {FC} from 'react'

interface ContainerProps {
    children?: React.ReactNode
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className="ui-container">
            {children}
        </div>
    );
}

export default Container