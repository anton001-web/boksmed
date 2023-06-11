import React from 'react'

export const BfmItem = ({item, id}) => {
    return (
        <div className="bfm-body__pg-item" data-id={id} >
            <div className='bfm-body__pg-item__innerImg-wrap'>
                <img src={item.img} alt=""/>
            </div>
        </div>
    )
}