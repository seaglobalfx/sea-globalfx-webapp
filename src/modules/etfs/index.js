import React from 'react'
import EtfsBanner from './etfsBanner'
import EtfsTrade from './etfsTrade'
import AvailableInstruments from '../forexMarket/availableInstruments'
import TradeAccount from '../forexMarket/tradeAccount'
import Faq from '../home/faq'
import EtfsTextContent from './etfsTextContent'

export default function Etfs() {
    return (
        <div>
            <EtfsBanner />
            <div className='tagline-remove'>
                <tv-ticker-tape
                    symbols="FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD"
                    theme="dark"
                />
            </div>
            <EtfsTrade />
            <AvailableInstruments title='etfs' details='Trade a carefully selected range of instruments within this market, offering liquidity, transparency, and global
exposure. Sea Global provides access to popular and actively traded instruments designed to support diverse
trading strategies.' />
            <EtfsTextContent />
            <TradeAccount title='Forex' />
            <Faq />
        </div>
    )
}
