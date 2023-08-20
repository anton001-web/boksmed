import React from 'react'
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {HomeP} from "./components/pages/home/HomeP";
import {CatalogP} from "./components/pages/catalog/CatalogP";
import {CatalogItemPage} from "./components/pages/catalogItemP/CatalogItemPage";
import {GoodsItemPage} from "./components/pages/goodsItemPage/GoodsItemPage";

export const App = () => {
    const loc = useLocation()

    return (
        <>
            {loc.pathname === '/' && <Navigate to='/glavnaya'/>}
            <Header/>
                <div className="content">
                    <Routes>
                        <Route path={'/glavnaya'} element={<HomeP/>}/>
                        <Route path={'/glavnaya/katalog'} element={<CatalogP/>}/>
                        <Route path={'/glavnaya/katalog/:catalogItem'} element={<CatalogItemPage/>}/>
                        <Route path={'/glavnaya/katalog/:catalogItem/:katalogItem'} element={<GoodsItemPage/>}/>
                    </Routes>
                </div>
            <Footer/>
        </>
    )
}
