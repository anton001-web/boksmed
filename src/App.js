import React from 'react'
import {CWrap} from "./components/CWrap";
import {Header} from "./components/header/Header";
import {HeroSection} from "./components/heroSection/HeroSection";
import {MedeqpSec} from "./components/medeqpSec/MedeqpSec";
import {NvsSection} from "./components/nvsSection/NvsSection";
import {BfmSec} from "./components/bfmSec/BfmSec";
import {LtnsSec} from "./components/ltnsSec/LtnsSec";

export const App = () => {
    return (
        <>
            <Header />
            <CWrap>
                <HeroSection />
                <MedeqpSec />
                <NvsSection />
                <BfmSec />
                <LtnsSec />
            </CWrap>
        </>
    )
}
