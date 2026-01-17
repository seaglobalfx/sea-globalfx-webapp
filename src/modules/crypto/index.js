import React from 'react'
import CryptoBanner from './cryptoBanner'
import CryptoTrade from './cryptoTrade'
import AvailableInstruments from '../forexMarket/availableInstruments'
import TradeAccount from '../forexMarket/tradeAccount'
import Faq from '../home/faq'
import CryptoTextContent from './cryptoTextContent'

export default function Crypto() {
    return (
        <div>
            <CryptoBanner />
            <tv-ticker-tape symbols='FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD' theme="dark"></tv-ticker-tape>
            <CryptoTrade />
            <AvailableInstruments title='crypto' details='Trade a carefully selected range of cryptocurrencies, offering market accessibility, transparency, and global
participation. Sea Global provides access to widely traded digital assets designed to support a variety of trading
strategies.' />
            <CryptoTextContent />
            <TradeAccount title='Forex' />
            <Faq />
        </div>
    )
}
