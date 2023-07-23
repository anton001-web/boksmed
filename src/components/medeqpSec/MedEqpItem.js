import React from 'react'
import {Link} from "react-router-dom";

export const MedEqpItem = ({item, id}) => {

    return (
        <Link className='med-eqp__body-me__list-item__wrap' to={item.link} data-id={id} >
            <div className='med-eqp__body-me__list-item'>
                <div className='med-eqp__body-me__list-item__title-block'>
                    <span className='med-eqp__body-me__list-item__title'>{item.title}</span>
                    <a href="" className='med-eqp__body-me__list-item__nextLink'>
                        перейти в каталог
                        <img src="../assets/images/medEqpImages/medeqpNico.svg" alt="next ico"/>
                    </a>
                </div>
                <img className='med-eqp__body-me__list-item__img' src={item.img} alt="equipment image"/>
            </div>
        </Link>
    )
}