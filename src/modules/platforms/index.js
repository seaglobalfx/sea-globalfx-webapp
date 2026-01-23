import React from 'react'
import PlatformsBanner from './platformsBanner'
import PlatformsVideo from './platformsVideo'
import PlatformsHighlights from './platformsHighlights'
import IndicesTextContent from '../indicesMarket/IndicesTextContent'
import TradeAccount from '../forexMarket/tradeAccount'
import TradeWithplatforms from './tradeWithplatforms'
import Faq from '../home/faq'

export default function Platforms() {
    return (
        <div>
            <PlatformsBanner />
            <tv-ticker-tape symbols='FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD' theme="dark"></tv-ticker-tape>
            <PlatformsVideo />
            <PlatformsHighlights />
            <TradeWithplatforms />
            <Faq />
        </div>
    )
}
