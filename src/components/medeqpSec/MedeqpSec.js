import React from 'react'
import {medeqpList} from "./medeqpData";
import {MedEqpItem} from "./MedEqpItem";

export const MedeqpSec = () => {
    return (
        <div className="med-eqp__sec">
            <div className="container">
                <div className="med-eqp__body">
                    <h1 className='med-eqp__body-title title-default'>Медицинское оборудование</h1>
                    <div className="med-eqp__body-me__list">
                        {
                            medeqpList.map((eqp, ind) => (
                                <MedEqpItem item={eqp} key={ind} />
                            ))
                        }
                    </div>
                    <a href="" className='med-eqp__body-showM__link' >
                        показать все медицинское оборудование
                        <img src="../assets/images/medEqpImages/medeqpDico.svg" alt="down ico"/>
                    </a>
                </div>
            </div>
        </div>
    )
}