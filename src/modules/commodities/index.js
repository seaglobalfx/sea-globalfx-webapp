import React from 'react'
import AvailableInstruments from '../forexMarket/availableInstruments'
import TradeAccount from '../forexMarket/tradeAccount'
import Faq from '../home/faq'
import CommoditiesBanner from './commoditiesBanner'
import CommoditiesTrade from './commoditiesTrade'
import CommoditiesTextContent from './commoditiesTextContent'

export default function Commodities() {
    const fullwidth = "400px"
    return (
        <div>
            <CommoditiesBanner />
            <div className='tagline-remove'>
                <tv-ticker-tape
                    symbols="FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD"
                    theme="dark"
                />
            </div>
            <CommoditiesTrade />
            <AvailableInstruments title='commodities' details='Trade a carefully selected range of instruments within this market, offering liquidity, transparency, and global
exposure. Sea Global provides access to popular and actively traded instruments designed to support diverse
trading strategies.' />
            <CommoditiesTextContent />
            <TradeAccount title='Commodities' sizexl={fullwidth} />
            <Faq />
        </div>
    )
}
