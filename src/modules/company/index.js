import React from 'react'
import CompanyBanner from './companyBanner'
import WhyChoose from './whyChoose'
import ClientFundProtection from './clientFundProtection'
import ReliableFunding from './reliableFunding'
import ProfessionalTrading from './professionalTrading'
import GetinTouch from './getinTouch'
import Faq from '../home/faq'
import AboutSeaGlobalFx from './aboutSeaGlobalFx'
import MissionVision from './missionVision'

export default function Company() {
    return (
        <div>
            <CompanyBanner />
            <AboutSeaGlobalFx />
            <MissionVision />
            <WhyChoose />
            <ClientFundProtection />
            <ReliableFunding />
            <ProfessionalTrading />
            {/* <GetinTouch /> */}
            <Faq />
        </div>
    )
}
