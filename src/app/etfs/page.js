import Etfs from '@/modules/etfs'
import { SITE_URL } from '@/utils/config';
import React from 'react'

export const metadata = {
  title: "ETF Trading Market | Trade Global ETFs CFDs | Sea Global FX",
  description:
    "Trade the ETF trading market with Sea Global FX. Access global ETF CFDs with built-in diversification, tight spreads, fast execution, and MT4/MT5.",
  alternates: {
    canonical: `${SITE_URL}/etfs`,
  },
};

export default function page() {
    return (
        <div>
            <Etfs />
        </div>
    )
}
