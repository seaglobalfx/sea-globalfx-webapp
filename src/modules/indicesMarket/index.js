import React from 'react'
import IndicesMarketBanner from './indicesMarketBanner'
import TradeIndicesMarket from './tradeIndicesMarket'
import AvailableInstruments from '../forexMarket/availableInstruments'
import TextContent from '../forexMarket/textContent'
import TradeAccount from '../forexMarket/tradeAccount'
import Faq from '../home/faq'
import IndicesTextContent from './IndicesTextContent'

export default function IndicesMarket() {
  const fullwidth = "400px"
  return (
    <div>
      <IndicesMarketBanner />
      <TradeIndicesMarket />
      <AvailableInstruments
        title='indices-market'
        details='Trade a carefully selected range of global stock indices, offering strong liquidity, transparency, and exposure to
major economies. Sea Global provides access to popular and actively traded indices designed to support a
wide range of trading strategies.' />
      <IndicesTextContent />
      <TradeAccount size={fullwidth} title='Indices Market' />

      <Faq />
    </div>
  )
}
