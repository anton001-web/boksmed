import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import 'swiper/scss'
import {hssList} from "./heroSectionData";

export const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="hero-section__body">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        className='hero-section__swiper'
                        modules={[Navigation]}
                        spaceBetween={70}
                        navigation={{
                            nextEl: '.hero-section__swiper-slide__nav-navigation-slider-btn__next',
                            prevEl: '.hero-section__swiper-slide__nav-navigation-slider-btn__prev'
                        }}
                    >
                        {
                            hssList.map((slide, ind) => (
                                <SwiperSlide key={ind} className='hero-section__swiper-slide' >
                                    <div className="hero-section__swiper-slide__body">
                                        <div className='hero-section__swiper-slide__body-leftSide'>
                                            <img className='hero-section__swiper-slide__body-leftSide__img' src={slide.logo} alt="product logotype"/>
                                            <h2 className='hero-section__swiper-slide__body-leftSide__title'>{slide.title}</h2>
                                            <span className='hero-section__swiper-slide__body-leftSide__text'>{slide.text}</span>
                                            <div className='hero-section__swiper-slide__nav'>
                                                <button className='hero-section__swiper-slide__navigation-btn'>перейти в каталог</button>
                                                <div className='hero-section__swiper-slide__nav-navigation'>
                                                    <button className='hero-section__swiper-slide__nav-navigation-slider-btn hero-section__swiper-slide__nav-navigation-slider-btn__prev'>
                                                        <img src="../assets/images/heroSecImages/lessIco.svg" alt="less"/>
                                                    </button>
                                                    <button className='hero-section__swiper-slide__nav-navigation-slider-btn hero-section__swiper-slide__nav-navigation-slider-btn__next'>
                                                        <img src="../assets/images/heroSecImages/moreIco.svg" alt="more"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='hero-section__swiper-slide__body-rightSide'>
                                            <img src={slide.image} alt="product image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}