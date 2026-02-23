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
      <AchieveRewardsTrade />
      <HowItWorks />
      <TradeAndAchieveList />
      <StartTrade />
      <Faq />

    </div>
  )
}
