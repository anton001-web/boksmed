import React from 'react'
import {translit} from "../../../utils/translit";
import {Link} from "react-router-dom";

export const Breadcrumb = ({location}) => {

    let locItems = location.replace(/:/, '')
        .split('/')
        .filter(item => item !== '')

    let res = []
    let link = ''

    locItems.map((crumbItem, ind) => {
        let item = {}
        const translatedItem = translit(crumbItem)

        link += `/${crumbItem}`

        item['crumb'] = translatedItem
        item['crumbLink'] = link
        res.push(item)
    })

    return (
        <div className='breadcrumb-navigation'>
            {
                res.map((item, ind) => (
                    <Link to={item.crumbLink} key={ind} className='breadcrumb-navigation__item'>
                        {item.crumb}
                        <img src="../assets/images/baseIcons/nextIco.svg" alt="next"/>
                    </Link>
                ))
            }
        </div>
    )
}