import React from 'react'
import InteractiveHero from './interactiveHero'
import Faq from './faq'
import EasySteps from './easySteps'
import AccountType from './accountType'
import WhySeaGlobal from './whySeaGlobal'
import OneMarket from './oneMarket'
import MarketOverview from './marketOverview'
import OverviewSection from './overviewSection'
import OpenAccount from './openAccount'

export default function HomePage() {

    return (
        <div>
            <InteractiveHero />
            {/* <WhySeaGlobal /> */}
            {/* <OverviewSection /> */}
            {/* <MarketOverview /> */}
            <OpenAccount />
            <AccountType />

            <Faq />
        </div>
    )
}

