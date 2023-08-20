import React from 'react'
import {CustomStarList} from "../customStList/CustomStarList";
import {Link} from "react-router-dom";

export const CustomGoodsItem = ({item}) => {
    return (
        <Link to={`/glavnaya/katalog/:defibrilyatory/${item.goodsLink + item.vCode}`}>
            <div className='custom-goods__item'>
                <div className='custom-goods__item-img__block'>
                    <img src={item.img} alt="item image"/>
                    <div className='custom-goods__item-rateArr'>
                        <CustomStarList rate={item.rate} />
                    </div>
                </div>
                <div className="custom-goods__item-downBlock">
                    <div className="custom-goods__item-info__block">
                        <span className='custom-goods__item-info__block-pNumber'>арт. {item.vCode}</span>
                        <p className='custom-goods__item-info__block-title'>{item.title}</p>
                        <span className='custom-goods__item-info__block-price'>{item.price}</span>
                    </div>
                    <div className='custom-goods__item-btns__block'>
                        <button className='custom-goods__item-basket__btn'>в корзину</button>
                        <button className='custom-goods__item-buy__btn'>купить</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}