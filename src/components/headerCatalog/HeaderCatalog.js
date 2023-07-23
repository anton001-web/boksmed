import React, {useRef, useState} from 'react'
import {HeaderCatalogItem} from "./HeaderCatalogItem";
import {hCatalogList, hCatalogVariants} from "./hCatalogList";

export const HeaderCatalog = () => {
    const [activeCatalogSec, setActiveCatalogSec] = useState(undefined)
    const activeVariants = hCatalogVariants.filter(item => item.type === activeCatalogSec)[0]

    return (
        <div className='header-catalog'>
            <div className='header-catalog__list-wrap'>
                <div className='header-catalog__list'>
                    {
                        hCatalogList.map((item, ind) => (
                            <HeaderCatalogItem
                                setActive={setActiveCatalogSec}
                                item={item}
                                key={ind}
                                active={activeCatalogSec}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='header-catalog__variants-wrap'>
                <div className='header-catalog__variants-list'>
                    {
                        activeVariants && activeVariants.list.map((item, ind) => (
                            <span className='header-catalog__variants-list__item' key={ind}>
                                {item}
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}