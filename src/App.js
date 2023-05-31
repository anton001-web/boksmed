import React from 'react'
import {CWrap} from "./components/CWrap";
import {Header} from "./components/header/Header";
import {HeroSection} from "./components/heroSection/HeroSection";
import {MedeqpSec} from "./components/medeqpSec/MedeqpSec";

export const App = () => {
    return (
        <>
            <Header />
            <CWrap>
                <HeroSection />
                <MedeqpSec />
            </CWrap>
        </>
    )
}
