import React from 'react'
import { Spinner } from 'reactstrap'

export const Loader = ({ size, color }) => {
    return (
        <div className='d-flex'>
            <Spinner
                color={color || "primary"}
                size={size ? "sm" : ""}
            >
                Loading...
            </Spinner>
        </div>
    )
}
