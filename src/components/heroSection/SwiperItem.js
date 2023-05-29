import React from 'react'
import {SwiperSlide} from "swiper/react";

export const SwiperItem = ({slide}) => {
    return (
        <SwiperSlide className='hero-section__swiper-slide' >
            <div className="hero-section__swiper-slide__body">
                <div className='hero-section__swiper-slide__body-leftSide'>
                    <img src={slide.logo} alt="product logotype"/>
                    <h2 className='hero-section__swiper-slide__body-leftSide__title'>{slide.title}</h2>
                    <span className='hero-section__swiper-slide__body-leftSide__text'>{slide.text}</span>
                    <div className='hero-section__swiper-slide__nav'>
                        <button className='hero-section__swiper-slide__navigation-btn'>перейти в каталог</button>
                        <div className='hero-section__swiper-slide__navigation'>
                            <button className='hero-section__swiper-slide__navigation-slider-btn'>&#60;</button>
                            <button className='hero-section__swiper-slide__navigation-slider-btn'>&#62;</button>
                        </div>
                    </div>
                </div>
                <div className='hero-section__swiper-slide__body-rightSide'>
                    <img src={slide.image} alt="product image"/>
                </div>
            </div>
        </SwiperSlide>
    )
}