import React from 'react'
import {HeroSection} from "../../heroSection/HeroSection";
import {MedeqpSec} from "../../medeqpSec/MedeqpSec";
import {NvsSection} from "../../nvsSection/NvsSection";
import {BfmSec} from "../../bfmSec/BfmSec";
import {LtnsSec} from "../../ltnsSec/LtnsSec";
import {CWrap} from "../../CWrap";

export const HomeP = () => {
    return (
        <CWrap>
            <HeroSection />
            <MedeqpSec />
            <NvsSection />
            <BfmSec />
            <LtnsSec />
        </CWrap>
    )
}