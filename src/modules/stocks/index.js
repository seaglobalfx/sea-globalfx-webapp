import React from 'react'
import AvailableInstruments from '../forexMarket/availableInstruments'
import TradeAccount from '../forexMarket/tradeAccount'
import Faq from '../home/faq'
import StocksBanner from './stocksBanner'
import StocksTrade from './stocksTrade'
import StocksTextContent from './stocksTextContent'

export default function Stocks() {
    const fullwidth = "400px"
    return (
        <div>
            <StocksBanner />
            <div className='tagline-remove'>
                <tv-ticker-tape
                    symbols="FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD"
                    theme="dark"
                />
            </div>
            <StocksTrade />
            <AvailableInstruments title='stocks' details='Trade a carefully selected range of global Stock CFDs, offering liquidity, transparency, and access to leading
publicly listed companies. Sea Global provides exposure to major equities across key global markets,
supporting a wide range of trading and investment strategies.' />
            <StocksTextContent />
            <TradeAccount title='Stock Market' size={fullwidth} />
            <Faq />
        </div>
    )
}
