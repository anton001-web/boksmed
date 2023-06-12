import React from 'react'
import {ltnsList} from "./ltnsData";
import {LtnsItem} from "./LtnsItem";

export const LtnsSec = () => {

    return (
        <section className="ltns-sec">
            <div className="container">
                <div className="ltns-body">
                    <h1 className="ltns-title title-default">Последние новости</h1>
                    <div className='ltns-list'>
                        {
                            ltnsList.map((item, ind) => (
                                <LtnsItem {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}