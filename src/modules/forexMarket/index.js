import React from 'react'
import ForexMarketBanner from './forexMarketBanner'
import WhyTradeForex from './whyTradeForex'
import AvailableInstruments from './availableInstruments'
import TextContent from './textContent'
import Faq from '../home/faq'
import TradeAccount from './tradeAccount'

export default function ForexMarket() {
  return (
    <div>
      <ForexMarketBanner />
      <div className='tagline-remove'>
        <tv-ticker-tape
          symbols="FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD"
          theme="dark"
        />
      </div>
      <WhyTradeForex />
      <AvailableInstruments
        title="forex-market"
        details='Trade a carefully selected range of instruments within this market, offering liquidity, transparency, and global
exposure. Sea Global provides access to popular and actively traded instruments designed to support diverse
trading strategies.'
      />
      <TextContent />
      <TradeAccount title='Forex' />
      <Faq />
    </div>
  )
}
