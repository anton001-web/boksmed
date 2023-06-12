import React from 'react'
import {CustomStarList} from "../custom/customStList/CustomStarList";

export const NvsItem = ({slide}) => {

    return (
        <div className='nvs-body__swiper-slide__body'>
            <div className='nvs-body__swiper-slide__body-img__block'>
                 <img src={slide.img} alt="item image"/>
                <div className='nvs-body__swiper-slide__body-rateArr'>
                    <CustomStarList rate={slide.rate} />
                </div>
            </div>
            <div className="nvs-body__swiper-slide__body-downBlock">
                <div className="nvs-body__swiper-slide__body-info__block">
                    <span className='nvs-body__swiper-slide__body-info__block-pNumber'>арт. {slide.pNum}</span>
                    <h1 className='nvs-body__swiper-slide__body-info__block-title'>{slide.title}</h1>
                    <span className='nvs-body__swiper-slide__body-info__block-price'>{slide.price}</span>
                </div>
                <div className='nvs-body__swiper-slide__body-btns__block'>
                    <button className='nvs-body__swiper-slide__body-basket__btn'>в корзину</button>
                    <button className='nvs-body__swiper-slide__body-buy__btn'>купить</button>
                </div>
            </div>
        </div>
    )
}