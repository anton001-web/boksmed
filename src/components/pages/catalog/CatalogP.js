import React from 'react'
import {Breadcrumb} from "../../custom/breadcrumb/Breadcrumb";
import {useLocation} from "react-router-dom";
import {MedeqpSec} from "../../medeqpSec/MedeqpSec";

export const CatalogP = () => {
    const loc = useLocation()

    return (
        <section className="catalog-page">
            <div className="container">
                <div className="catalog-page__body">
                    <Breadcrumb location={loc.pathname} />
                    <MedeqpSec />
                </div>
            </div>
        </section>
    )
}