import React from 'react'
import {medeqpList} from "./medeqpData";
import {MedEqpItem} from "./MedEqpItem";
import {useLocation} from "react-router-dom";

export const MedeqpSec = () => {
    const loc = useLocation().pathname
    let list = []

    loc === '/glavnaya' ? list = medeqpList.slice(0, 5) : list = medeqpList

    return (
        <div className="med-eqp__sec">
            <div className="container">
                <div className="med-eqp__body">
                    <h1 className='med-eqp__body-title title-default'>Медицинское оборудование</h1>
                    <div className="med-eqp__body-me__list">
                        {
                            list.map((eqp, ind) => (
                                <MedEqpItem item={eqp} id={ind+1} key={ind} />
                            ))
                        }
                    </div>
                    {
                        loc === '/glavnaya' && (
                            <a href="/glavnaya/katalog" className='med-eqp__body-showM__link' >
                                показать все медицинское оборудование
                                <img src="../assets/images/medEqpImages/medeqpDico.svg" alt="down ico"/>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}