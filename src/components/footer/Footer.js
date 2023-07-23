import React from 'react'
import {footerList} from "./footerData";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-body">
                    <div className="footer-content__wrap">
                        <div className='footer-leftSide'>
                            <div className='footer-logoM__block'>
                                <img src="../assets/images/headerIcons/Hlogo.svg" alt=""/>
                                <div className='footer-mediaList'>
                                    <img src="../assets/images/headerIcons/viberIco.svg" alt=""/>
                                    <img src="../assets/images/headerIcons/tgIco.svg" alt=""/>
                                    <img src="../assets/images/headerIcons/waIco.svg" alt=""/>
                                </div>
                            </div>
                            <div className='footer-links__list'>
                                {
                                    footerList.map((item, ind) => (
                                        <a key={ind} className='footer-links__list-item' href={item.link}>{item.title}</a>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="footer-rightSide">
                            <div className="footer-compInfo">
                                <div className='footer-compInfo__loc'>
                                    <button className='footer-callback__btn'>
                                        <img src="../assets/images/footerIcons/cbPico.svg" alt=""/>
                                        Заказать обратный звонок
                                    </button>
                                    <p className='footer-address'>
                                        <span>Россия, Удмуртская Республика</span>
                                        <span>426011, г. Ижевск, ул. Пушкинская 290</span>
                                        <span>тел. 8 (3412) 65-08-77</span>
                                    </p>
                                </div>
                                <div className='footer-compInfo__othIn'>
                                    <span className='footer-compInfo__title'>Политика конфиденциальности</span>
                                    <p className='footer-compInfo__text'>
                                        <span className='footer-compInfo__text-item'>ООО «Boksmed» © 2015 - 2022.</span>
                                        <span className='footer-compInfo__text-item'>Сайт носит информационный характер и не является публичной офертой.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-btns__block">
                        <button className='footer-callback__downBtn'>
                            <img src="../assets/images/footerIcons/cbPico.svg" alt=""/>
                        </button>
                        <button className="footer-goTop__btn">
                            <img src="../assets/images/footerIcons/upArrIco.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}