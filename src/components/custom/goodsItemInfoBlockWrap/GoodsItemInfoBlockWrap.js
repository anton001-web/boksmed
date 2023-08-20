import React from 'react'

export const GoodsItemInfoBlockWrap = ({children, title}) => {
    return (
        <div className='goods-item__info-block__wrap'>
            <h2 className='goods-item__info-block__title'>{title}</h2>
            {children}
        </div>
    )
}