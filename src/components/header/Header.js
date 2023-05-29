import React, {useState} from 'react'
import {HeaderLink} from "./HeaderLink";
import {HeaderAdtlItem} from "./HeaderAdtlItem";
import Select from "react-select";
import {adtlItemsList, links, selectItems} from "./headerData";

export const Header = () => {
    const [selectedOpt, setSelectedOpt] = useState(null)

    const handleChange = (option) => {
        setSelectedOpt(option)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-body">
                    <div className='header-upperBlock'>
                        <img className='header-upBlock__logo header-upperBlock__item' src="../assets/images/headerIcons/Hlogo.svg" alt=""/>
                        <div className='header-upBlock__ctlg-btn header-upperBlock__item'>
                            <div className='header-ctlg__btn-ico'>
                                <div className='header-ctlg__btn-ico__line'></div>
                                <div className='header-ctlg__btn-ico__line'></div>
                                <div className='header-ctlg__btn-ico__line'></div>
                            </div> каталог
                        </div>
                        <div className='header-upBlock__fnd-eqp-inp__wrap header-upperBlock__item'>
                            <img className='header-upBlock__fnd-eqp-inp__wrap-ico' src="../assets/images/headerIcons/mgnrIco.svg" alt="mgnr-ico"/>
                            <input type='text' className='header-upBlock__fnd-eqp-inp__wrap-inp header-upperBlock__item' placeholder='Поиск медицинского оборудования' />
                        </div>
                        <div className='header-upBlock__clBack-btn__wrap'>
                            <a className='header-upBlock__clBack-btn header-upperBlock__item'>
                                <img className='header-upBlock__clBack-btn__ico' src="../assets/images/headerIcons/phoneIco.svg" alt=""/>
                                Заказать обратный звонок
                            </a>
                        </div>
                        <span className='header-upBlock__phone header-upperBlock__item'>8 (3412) 65-08-77</span>
                        <div className='header-upBlock__icons-list'>
                            <img className='header-upBlock__icons-list__item' src="../assets/images/headerIcons/viberIco.svg" alt="viber-ico__link"/>
                            <img className='header-upBlock__icons-list__item' src="../assets/images/headerIcons/tgIco.svg" alt="tg-ico__link"/>
                            <img className='header-upBlock__icons-list__item' src="../assets/images/headerIcons/waIco.svg" alt="wa-ico__link"/>
                        </div>
                    </div>
                    <div className="header-bottomBlock">
                        <div className='header-bottomBlock__links-list'>
                            {
                                links.map((item, ind) => (
                                    <HeaderLink link={item} key={ind} />
                                ))
                            }
                        </div>
                        <Select
                            onChange={handleChange}
                            value={selectedOpt}
                            options={selectItems}
                            classNamePrefix='header-bottomBlock__desk-hidden__select'
                            id='header-bottomBlock__desk-hidden__select'
                            placeholder='Выберите раздел'
                        />
                        <div className='header-bottomBlock__adtl-pgs__list'>
                            {
                                adtlItemsList.map((item, ind) => (
                                    <HeaderAdtlItem key={ind} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}