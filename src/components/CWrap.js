// wrap all components except header and footer to have correct styles behaviour and push footer down
import React from 'react'

export const CWrap = ({children}) => {
    return (
        <div className='content'>
            {children}
        </div>
    )
}