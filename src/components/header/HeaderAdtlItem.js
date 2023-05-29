import React from 'react'

export const HeaderAdtlItem = ({item}) => {
    return (
        <div className='header-bottomBlock__adtl-pgs__list-item' data-val={item.text}>
            <img src={item.ico} alt=""/>
            <span>{item.text}</span>
        </div>
    )
}