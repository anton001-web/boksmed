import React from 'react'
import {bfmList} from "./bfmData";
import {BfmItem} from "./BfmItem";

export const BfmSec = () => {
    return (
        <section className='bfm-section'>
            <div className="container">
                <div className="bfm-body">
                    <h1 className='bfm-body__title title-default'>Бренды и заводы производители</h1>
                    <div className='bfm-body__pg'>
                        {
                            bfmList.map((item, ind) => (
                                <BfmItem id={ind+1} key={ind} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}