import React, {useEffect, useRef} from 'react'
import {Link} from "react-router-dom";

export const HeaderCatalogItem = ({item, setActive, active}) => {
    const catalogItemRef = useRef()

    useEffect(() => {
        catalogItemRef.current.addEventListener('mouseover', () => {
            setActive(item.type)
        })
    }, [catalogItemRef.current])

    return (
        <div data-active={active === item.type && 'active'} className='header-catalog__list-item' ref={catalogItemRef} >
            {item.title}
        </div>
    )
}