import React from 'react'

export const HeaderLink = ({link}) => {
    return (
        <a href="" className='header-bottomBlock__links-list__item'>
            {link.text}
        </a>
    )
}