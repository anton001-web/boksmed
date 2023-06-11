import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {NvsItem} from "./NvsItem";
import {nvsData} from "./nvsData";
import {Navigation} from "swiper";

export const NvsSection = () => {

    return (
        <section className="nvs-section">
            <div className="container">
                <div className="nvs-body">
                    <h1 className='nvs-body__title title-default'>Новинки</h1>
                    <div className='nvs-body__swiper-wrap'>
                        <button className='nvs-body__swiper-prev__btn'>
                            <img src="../assets/images/heroSecImages/lessIco.svg" alt=""/>
                        </button>
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            className='nvs-body__swiper'
                            spaceBetween={10}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: '.nvs-body__swiper-prev__btn',
                                nextEl: '.nvs-body__swiper-next__btn'
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2
                                },
                                767: {
                                    slidesPerView: 3
                                },
                                996: {
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            {
                                nvsData.map((item, ind) => (
                                    <SwiperSlide key={ind} className='nvs-body__swiper-slide' >
                                        <NvsItem slide={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <button className='nvs-body__swiper-next__btn'>
                            <img src="../assets/images/heroSecImages/moreIco.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}