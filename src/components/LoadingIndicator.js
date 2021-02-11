import React from 'react'
import { Spinner } from 'react-bootstrap'

export function LoadingIndicator () {
    return <Spinner animation="border" role="status">
        <span className="sr-only">Loading, Please wait ...</span>
    </Spinner>
}
