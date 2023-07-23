import React from 'react'
import {CustomStar} from "./CustomStar";

export const CustomStarList = ({rate}) => {
    const starList = new Array(5).fill('')

    return (
        <div className='custom-starList'>
            {
                starList.map((_, ind) => (
                    <CustomStar key={ind} id={ind+1} rateId={rate} />
                ))
            }
        </div>
    )
}