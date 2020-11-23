import React from 'react'
import {Alert} from 'react-bootstrap'

const Message = ({variant,children}) => {
    return (
        <Alert variant={variant} className="mx-auto md-w-50 md-text-center w-75">
            {children}
        </Alert>
    )
}
Message.defaultProps = {
    varaint: 'info'
}

export default Message
