import React from 'react'
import {CustomStarList} from "../custom/customStList/CustomStarList";

export const LtnsItem = (props) => {
    const {
        img,
        date,
        text,
        author,
        rate
    } = props

    return (
        <div className='ltns-list__item'>
            <img src={img} alt="news-images" className='ltns-list__item-img' />
            <div className='ltns-list__item-ds__block'>
                <span className='ltns-list__item-date'>{date}</span>
                <CustomStarList rate={rate} />
            </div>
            <p className='ltns-list__item-text'>{text}</p>
            <div className='ltns-list__item-lower__block'>
                <button className='ltns-list__item-btn'>
                    читать дальше
                    <img src="../assets/images/medEqpImages/medeqpNico.svg" alt="left-arrow"/>
                </button>
                <span className='ltns-list__item-author'>{author}</span>
            </div>
        </div>
    )
}