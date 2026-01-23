import React from 'react'
import AdvancedTradingSolutionsBanner from './advancedTradingSolutionsBanner'
import PammTrading from './pammTrading'
import HowPammTrading from './howPammTrading'
import MamTrading from './mamTrading'
import HowMamTrading from './howMamTrading'
import CopyTrading from './copyTrading'
import HowCopyTrading from './howCopyTrading'
import CompareTrading from './compareTrading'
import WhyChoose from './whyChoose'
import Faq from '../home/faq'
import SmarterToday from './smarterToday'

export default function AdvancedTradingSolutions() {
    return (
        <div>
            <AdvancedTradingSolutionsBanner />
            <PammTrading />
            <HowPammTrading />
            <MamTrading />
            <HowMamTrading />
            <CopyTrading />
            <HowCopyTrading />
            <CompareTrading />
            <WhyChoose />
            <SmarterToday />
            <Faq />
        </div>
    )
}
