import TradeAndAchieve from '@/modules/tradeAndAchieve'
import { SITE_URL } from '@/utils/config';
import React from 'react'
export const metadata = {
    title: "Trade to Win | Volume-Based Trading Rewards | Sea Global FX",
    description:
        "Trade and win with Sea Global FX and participate in our volume-based rewards campaign designed to recognize performance and consistency.",
    alternates: {
        canonical: `${SITE_URL}/trade-to-win`,
    },
};

export default function page() {
    return (
        <div>
            <TradeAndAchieve />
        </div>
    )
}
