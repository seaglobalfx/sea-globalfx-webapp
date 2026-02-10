import Partners from '@/modules/partners'
import { SITE_URL } from '@/utils/config';
import React from 'react'

export const metadata = {
    title: "Seaglobal FX Partners Program | Become an IB & Earn Forex Rebates",
    description:
        "Join the Seaglobal FX Partners Program. Become an Introducing Broker or Affiliate and earn competitive commissions by referring forex traders worldwide.",
    alternates: {
        canonical: `${SITE_URL}/partners`,
    },
};

export default function page() {
    return (
        <div>
            <Partners />
        </div>
    )
}
