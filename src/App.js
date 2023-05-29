import React from 'react'
import {CWrap} from "./components/CWrap";
import {Header} from "./components/header/Header";
import {HeroSection} from "./components/heroSection/HeroSection";

export const App = () => {
    return (
        <>
            <Header />
            <CWrap>
                <HeroSection />
            </CWrap>
        </>
    )
}
