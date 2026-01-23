import React from 'react'
import CompanyBanner from './companyBanner'
import WhyChoose from './whyChoose'
import ClientFundProtection from './clientFundProtection'
import ReliableFunding from './reliableFunding'
import ProfessionalTrading from './professionalTrading'
import GetinTouch from './getinTouch'
import Faq from '../home/faq'

export default function Company() {
    return (
        <div>
            <CompanyBanner />
            <WhyChoose />
            <ClientFundProtection />
            <ReliableFunding />
            <ProfessionalTrading />
            <GetinTouch />
            <Faq />
        </div>
    )
}
