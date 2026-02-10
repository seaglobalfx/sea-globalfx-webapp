import React from 'react'
import PartnersBanner from './partnersBanner'
import WhyPartner from './whyPartner'
import OurForexPartner from './ourForexPartner'
import ProgramWorks from './programWorks'
import PartnerTools from './partnerTools'
import Readypartners from './readypartners'
import Faq from '../home/faq'

export default function Partners() {
    return (
        <div>
            <PartnersBanner />
            <div className='tagline-remove'>
                <tv-ticker-tape
                    symbols="FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD"
                    theme="dark"
                />
            </div>
            <WhyPartner />
            <OurForexPartner />
            <ProgramWorks />
            <PartnerTools />
            <Readypartners />
            <Faq />
        </div>
    )
}
