import React from 'react'

export const MedEqpItem = ({item}) => {
    return (
        <div className='med-eqp__body-me__list-item' data-id={item.id} >
            <div className='med-eqp__body-me__list-item__title-block'>
                <span className='med-eqp__body-me__list-item__title'>{item.title}</span>
                <a href="" className='med-eqp__body-me__list-item__nextLink'>
                    перейти в каталог
                    <img src="../assets/images/medEqpImages/medeqpNico.svg" alt="next ico"/>
                </a>
            </div>
            <img className='med-eqp__body-me__list-item__img' src={item.img} alt="equipment image"/>
        </div>
    )
}