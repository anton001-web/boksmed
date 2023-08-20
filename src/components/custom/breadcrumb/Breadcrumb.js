import React from 'react'
import {translit} from "../../../utils/translit";
import {Link} from "react-router-dom";
import {logPlugin} from "@babel/preset-env/lib/debug";

export const Breadcrumb = ({location}) => {

    let locItems = location.slice(0, -5)
        .split('/')
        .filter(item => item !== '')

    let res = []
    let link = ''
    let linksRes = []

    let linkItems = location
        .split('/')
        .filter(item => item !== '')


    linkItems.forEach(item => {
        link += `/${item}`
        linksRes.push(link)
    })

    locItems.map((crumbItem, ind) => {

        crumbItem = crumbItem.replace(":", '')

        let item = {}
        const words = crumbItem.split(' ');

        const translatedWords = words.map(word => {
            if (word.startsWith('&')) {
                return word.slice(1, word.length);
            } else {
                return translit(word);
            }
        });

        const translatedItem = translatedWords.join(' ');

        item['crumb'] = translatedItem;
        item['crumbLink'] = link
        res.push(item);

    })

    const result = res.map((val, ind) => {
        const val2 = linksRes[ind]
        return {crumb: val.crumb, crumbLink: val2}
    })


    return (
        <div className='breadcrumb-navigation__container'>
            <div className="breadcrumb-navigation__scroll-container">
                <div className='breadcrumb-navigation__content-body'>
                    <ul className='breadcrumb-navigation'>
                        {
                            result.map((item, ind) => (
                                <>
                                    <Link to={item.crumbLink} key={ind} className='breadcrumb-navigation__item'>
                                        {item.crumb}
                                        <svg  viewBox="0 0 24 24" fill="currentColor"
                                             className="icon-component Breadcrumbs-module__breadcrumbsItemIcon___1zgn1">
                                            <path
                                                d="M9.79461 17.2946C9.40534 16.9053 9.405 16.2743 9.79384 15.8846L13.67 12L9.79384 8.11538C9.405 7.72569 9.40534 7.09466 9.79461 6.70538C10.1842 6.31581 10.8158 6.31581 11.2054 6.70538L16.5 12L11.2054 17.2946C10.8158 17.6842 10.1842 17.6842 9.79461 17.2946Z"></path>
                                        </svg>
                                    </Link>
                                </>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}