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
import MarketPlatform from './marketPlatform'
import TypeAccount from './typeAccount'
import ClientSection from './clientSection'
import Herobanner from './herobanner'
import MobileViewSection from './mobileViewSection'

export default function HomePage() {

    return (
        <div>
            <InteractiveHero />
            {/* <WhySeaGlobal /> */}
            {/* <OverviewSection /> */}
            {/* <MarketOverview /> */}
            <Herobanner />
            <MobileViewSection />
            <MarketPlatform />
            <TypeAccount />
            <ClientSection />
            <OpenAccount />
            <AccountType />

            <Faq />
        </div>
    )
}

