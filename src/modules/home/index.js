import React from 'react'
import Herobanner from './herobanner'
import Faq from './faq'
import EasySteps from './easySteps'
import AccountType from './accountType'
import WhySeaGlobal from './whySeaGlobal'
import OneMarket from './oneMarket'
import MarketOverview from './marketOverview'

export default function HomePage() {

    return (
        <div>
            <Herobanner />
            <div className='tagline-remove'>
                <tv-ticker-tape
                    symbols="FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD"
                    theme="dark"
                />
            </div>
            <WhySeaGlobal />
            <OneMarket />
            <MarketOverview />
            <AccountType />
            <EasySteps />
            <Faq />
        </div>
    )
}
