import AdvancedTradingSolutions from '@/modules/advancedTradingSolutions'
import React from 'react'

export const metadata = {
  title: "Advanced Trading Solutions | PAMM, MAM & Copy Trading | Sea Global FX",
  description:
    "Explore advanced trading solutions at Sea Global FX including PAMM, MAM, and Copy Trading. Flexible, transparent options for investors and traders.",
  alternates: {
    canonical: `${SITE_URL}/advanced-trading-solutions`,
  },
};

export default function page() {
    return (
        <div>
            <AdvancedTradingSolutions />
        </div>
    )
}
