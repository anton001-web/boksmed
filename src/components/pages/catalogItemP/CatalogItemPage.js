import React, {useEffect, useRef, useState} from 'react'
import {useLocation, useParams} from "react-router-dom";
import {Breadcrumb} from "../../custom/breadcrumb/Breadcrumb";
import {translit} from "../../../utils/translit";
import {catalogItems} from "../../../data/goods";
import {CustomGoodsItem} from "../../custom/customGoodsItem/CustomGoodsItem";
import Select from "react-select";
import useMatchMedia from "use-match-media-hook";

const sortOptions = [
    {value: 'news', label: 'Новинки'},
    {value: 'popular', label: 'Популярные'},
    {value: 'priceInc', label: 'По увелечению цены'},
    {value: 'priceDec', label: 'По уменьшению цены'},
]

export const DropdownIndicator = () => {
    return (
        <img className='catalog-item__page-sort__dropdown-indicator' src="assets/images/baseIcons/dropdownIndicator.svg" alt="arrow-down"/>
    );
};

export const CatalogItemPage = () => {
    const params = useParams()
    const loc = useLocation()
    const [mobile] = useMatchMedia(['(max-width: 767px)'])
    const sidebar = useRef()
    const [cItemOptions, setCItemOptions] = useState([])

    const [sortType, setSortType] = useState(null)

    let pageTitle = params.catalogItem.
        replace(/:/, '')

    pageTitle = translit(pageTitle)

    const pageInfo = catalogItems.filter(item => item.id === params.catalogItem)[0]

    const w = ((window.innerWidth - 1400) / 2) - 5

    const handleSort = (option) => {
        setSortType(option)
    }

    const sidebarToggle = () => {
        sidebar.current.classList.contains('visible') ?
            sidebar.current.classList.remove('visible') :
            sidebar.current.classList.add('visible')
    }

    window.addEventListener('click', (e) => {
        if(!e.target.classList.contains('sidebarClosableFalse')) {
            sidebar.current.classList.remove('visible')
        }
    })

    const pageGoods = pageInfo.goods

    const [filteredPGoods, setFilteredPGoods] = useState(pageInfo.goods)

    const filterGoodsByOptions = () => {
        if(cItemOptions.length === 0) {
            setFilteredPGoods(pageGoods)
        } else {
            const filteredGoods = pageGoods.filter(item => cItemOptions.includes(item.type));
            setFilteredPGoods(filteredGoods);
        }
    }

    useEffect(() => {
        filterGoodsByOptions()
    }, [cItemOptions])

    const optionHandle = (e) => {
        e.target.checked ?
            setCItemOptions([...cItemOptions, e.target.dataset.value]) :
            setCItemOptions(cItemOptions.filter(item => item !== e.target.dataset.value))
    }

    return (
        <section className='catalog-item__page'>
            <div className="catalog-item__page-body">
                <div className="container">
                    <div className='catalog-item__page-header'>
                        <Breadcrumb location={loc.pathname}/>
                        <h1 className='catalog-item__page-title title-default'>{pageTitle}</h1>
                        <div className='catalog-item__page-filter__items'>
                            <span className='catalog-item__page-modelsQty'>Найдено {pageInfo.goods.length} моделей</span>
                            <div className='catalog-item__page-deskHidden__filter-btn sidebarClosableFalse' onClick={sidebarToggle} >Фильтры</div>
                            <Select
                                onChange={handleSort}
                                value={sortType}
                                className='catalog-item__page-sort'
                                options={sortOptions}
                                classNamePrefix='catalog-item__page-sort__select'
                                placeholder='Сортировать по'
                                components={{DropdownIndicator}}
                            />
                        </div>
                        <div className='catalog-item__page-header__border'></div>
                    </div>
                </div>
                <div className='catalog-item__page-content'>
                    <div className={`catalog-item__page-content__sidebar-wrap ${mobile && 'deskHidden'}`} ref={sidebar} >
                        <div className='catalog-item__page-content__sidebar sidebarClosableFalse' style={{paddingLeft: `${w}px`}} >
                            <div className='catalog-item__page-content__price-range__wrap sidebarClosableFalse'>
                                <div className='catalog-item__page-content__price-range__titles sidebarClosableFalse'>
                                    <span className='catalog-item__page-content__price-range__titles-item sidebarClosableFalse'>Цена от</span>
                                    <span className='catalog-item__page-content__price-range__titles-item sidebarClosableFalse'>Цена до</span>
                                </div>
                                <div className='catalog-item__page-content__price-range__input-wrap sidebarClosableFalse'>
                                    <div className='catalog-item__page-content__price-range__input-block sidebarClosableFalse'>
                                        <input placeholder='0' type="number" className='catalog-item__page-content__price-minRange__input sidebarClosableFalse' />
                                        <img className='catalog-item__page-content__price-range__input-ico sidebarClosableFalse' src="../assets/images/baseIcons/currencyRico.svg" alt="russian currency"/>
                                    </div>
                                    <div className='catalog-item__page-content__price-range__input-block sidebarClosableFalse'>
                                        <input placeholder='250 000' type="number" className='catalog-item__page-content__price-maxRange__input sidebarClosableFalse' />
                                        <img className='catalog-item__page-content__price-range__input-ico sidebarClosableFalse' src="../assets/images/baseIcons/currencyRico.svg" alt="russian currency"/>
                                    </div>
                                </div>
                            </div>
                            <div className='catalog-item__page-content__filter-options__list sidebarClosableFalse' >
                                {
                                    pageInfo.filterOptions.map((item, ind) => (
                                        <div className='catalog-item__page-content__filter-options__list-item sidebarClosableFalse'>
                                            <span className='catalog-item__page-content__filter-options__list-item__title sidebarClosableFalse'>{item.title}</span>
                                            <div className='catalog-item__page-content__filter-options__list-item__opt-list sidebarClosableFalse'>
                                                {
                                                    item.list.map((item, ind) => (
                                                        <div className='catalog-item__page-content__filter-options__option-wrap sidebarClosableFalse'>
                                                            <input type='checkbox' onClick={optionHandle} id={item.type} data-value={item.type} className='catalog-item__page-content__filter-options__list-option sidebarClosableFalse' />
                                                            <label className='catalog-item__page-content__filter-options__option sidebarClosableFalse' htmlFor={item.type}>{item.text}</label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='catalog-item__page-content__goods'>
                        {
                            filteredPGoods.map((goods, _) => (
                                <CustomGoodsItem key={goods.vCode} item={goods}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}