import Company from '@/modules/company'
import { SITE_URL } from '@/utils/config';
import React from 'react'

export const metadata = {
  title: "All You Need to Know About Sea Global FX | Global Forex & CFD Broker",
  description:
    "ExplorWhat is Sea Global FX? Sea Global FX is a global forex and CFD broker providing traders worldwide with secure market access, advanced trading platforms, and professional support.",
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
};


export default function page() {
    return (
        <div>
            <Company />
        </div>
    )
}
