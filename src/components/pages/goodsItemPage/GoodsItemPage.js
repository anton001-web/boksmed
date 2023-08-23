import React from 'react'
import {useLocation, useParams} from "react-router-dom";
import {catalogItems} from "../../../data/goods";
import {Breadcrumb} from "../../custom/breadcrumb/Breadcrumb";
import {goodsInfo__items} from "../../../data/goods-info__items";
import {GoodsItemInfoBlockWrap} from "../../custom/goodsItemInfoBlockWrap/GoodsItemInfoBlockWrap";
import {CustomGoodsItem} from "../../custom/customGoodsItem/CustomGoodsItem";
import {Swiper, SwiperSlide} from "swiper/react";


export const GoodsItemPage = () => {
    const params = useParams()
    const loc = useLocation()

    const smt = loc.pathname.replaceAll('%20', ' ')


    const itemContent = catalogItems
        .filter(item => item.id === params.catalogItem)[0].goods
        .filter(item => item.vCode === params.katalogItem.slice(-5))[0]

    return (
        <section className='goods-item__page'>
            <div className="container">
                <div className="goods-item__page-body">
                    <Breadcrumb location={smt} />
                    <div className='goods-item__wrap'>
                        <div className='goods-item__leftBorder'></div>
                        <div className='goods-item'>
                            <div className='goods-item__img-preview__wrap'>
                                <img className='goods-item__img-preview' src={itemContent.info.img} alt="goods-item__preview"/>
                            </div>
                            <div className='goods-item__info-block'>
                                <div className='goods-item__info-wrap'>
                                    <div className='goods-item__info'>
                                        <span className='goods-item__info-vCode'>арт. {itemContent.vCode}</span>
                                        <h2 className='goods-item__info-title'>{itemContent.title}</h2>
                                        <p className='goods-item__info-dsrpn'>{itemContent.info.description}</p>
                                        <span className='goods-item__info-price'>
                                            {itemContent.price}
                                            <span className='goods-item__info-currencyIco'>₽</span>
                                        </span>
                                        <div className='goods-item__info-purchase__btns'>
                                            <div className='goods-item__info-purchase__btns-wrap'>
                                                <button className='goods-item__info-inBasket__btn'>в корзину</button>
                                                <button className='goods-item__info-buy__btn'>купить в 1 клик</button>
                                            </div>
                                            <div className='goods-item__info-btns__block goods-item__info-btns__block-clone'>
                                                <button className='goods-item__info-btns__item'>
                                                    <img src="../assets/images/baseIcons/compareIco.svg" alt=""/>
                                                    Сравнить
                                                </button>
                                                <button className='goods-item__info-btns__item'>
                                                    <img src="../assets/images/baseIcons/printerIco.svg" alt=""/>
                                                    Распечатать
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='goods-item__info-btns__block goods-item__info-btns__block-mobileHidden'>
                                        <button className='goods-item__info-btns__item'>
                                            <img src="../assets/images/baseIcons/compareIco.svg" alt=""/>
                                            Сравнить
                                        </button>
                                        <button className='goods-item__info-btns__item'>
                                            <img src="../assets/images/baseIcons/printerIco.svg" alt=""/>
                                            Распечатать
                                        </button>
                                    </div>
                                </div>
                                <div className='goods-item_anchors-list__wrap'>
                                    <div className="goods-item_anchors-list">
                                        {
                                            goodsInfo__items.map((item, ind) => (
                                                <a href="" className='goods-item_anchors-list__item'>
                                                    <span className='goods-item_anchors-list__item-title'>{item.title}</span>
                                                    <img src="../assets/images/baseIcons/downRedArrow.svg" alt="down-arrow"/>
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <GoodsItemInfoBlockWrap title='Технические характеристики'>
                        <div className='goods-item__tech-info__block'>
                            <ul className='goods-item__tech-info__list'>
                                {
                                    itemContent.info.techCharacts.map((item, ind) => (
                                        <li className='goods-item__tech-info__list-item' key={ind}>
                                            {item.map((item, ind) => <span key={ind}>{item}</span>)}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </GoodsItemInfoBlockWrap>
                    <GoodsItemInfoBlockWrap title='Документы (сертификаты)'>
                        <div className='goods-item__documents-list__wrap'>
                            <ul className='goods-item__documents-list'>
                                {
                                    itemContent.info.docs.map((item, ind) => (
                                        <li key={ind} className='goods-item__documents-list__item'>
                                            <img src="../assets/images/baseIcons/folderIco.svg" alt="folder-icon"/>
                                            <span className='goods-item__documents-list__item-title'>{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </GoodsItemInfoBlockWrap>
                    <GoodsItemInfoBlockWrap title='Отзывы'>
                        <div className='goods-item__reviews-block'>
                            <ul className='goods-item__reviews-list'>
                                {
                                    itemContent.info.reviews.map((item, ind) => {
                                        const rateList = new Array(item.reviewRate).fill(0)

                                        return (
                                            <div key={ind} className='goods-item__reviews-list__item'>
                                                <div className='goods-item__reviews-list__item-header'>
                                                    <h2 className='goods-item__reviews-list__item-title'>{item.reviewAuthor}</h2>
                                                    <div className='goods-item__reviews-list__item-rate__list'>
                                                        {
                                                            rateList.map((_, ind) => (
                                                                <img className='goods-item__reviews-list__item-rate__list-item' src="../assets/images/baseIcons/starIco.svg" alt='rate-star ico'/>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <p className='goods-item__reviews-list__item-text'>
                                                    {item.reviewText}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </GoodsItemInfoBlockWrap>
                    <GoodsItemInfoBlockWrap title='Видеобзор'>
                        <div className='goods-item__video-review__block'>
                            <img src="../assets/images/goodsItemPImages/videoReviewImg.png" alt="goods-item__video-review-img"/>
                        </div>
                    </GoodsItemInfoBlockWrap>
                    <div className='goods-item__concomitant-items__wrap'>
                        <h1 className='goods-item__concomitant-items__title'>Сопутствующие товары</h1>
                        <Swiper
                            className='goods-item__concomitant-items__swiper'
                            slidesPerView={1}
                            loop={false}
                            spaceBetween={25}
                            breakpoints={{
                                520: {
                                    slidesPerView: 2,
                                },
                                767: {
                                    slidesPerView: 3,
                                },
                                996: {
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            {
                                itemContent.info.concomitantGoods.map((cItem, ind) => (
                                    <SwiperSlide key={ind}>
                                        <CustomGoodsItem

                                            item={cItem}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className="goods-item__recommended-items__wrap">
                        <h1 className='goods-item__recommended-items_title'>Рекомендованные товары</h1>
                        <Swiper
                            className='goods-item__recommended-items__swiper'
                            slidesPerView={1}
                            loop={false}
                            spaceBetween={25}
                            breakpoints={{
                                520: {
                                    slidesPerView: 2,
                                },
                                767: {
                                    slidesPerView: 3,
                                },
                                996: {
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            {
                                itemContent.info.recommendedGoods.map((rItem, ind) => (
                                    <SwiperSlide key={ind}>
                                        <CustomGoodsItem
                                            item={rItem}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}