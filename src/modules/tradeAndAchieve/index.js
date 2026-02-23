import React from 'react'
import TradeAndAchieveHerobanner from './tradeAndAchieveHerobanner'
import AchieveRewardsTrade from './achieveRewardsTrade'
import HowItWorks from './howItWorks'
import Faq from '../home/faq'
import TradeAndAchieveList from './tradeAndAchieveList'
import StartTrade from './startTrade'

export default function TradeAndAchieve() {
  return (
    <div>
      <TradeAndAchieveHerobanner />
      <div className='tagline-remove'>
        <tv-ticker-tape
          symbols="FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD"
          theme="dark"
        />
      </div>
      <AchieveRewardsTrade />
      <HowItWorks />
      <TradeAndAchieveList />
      <StartTrade />
      <Faq />

    </div>
  )
}
