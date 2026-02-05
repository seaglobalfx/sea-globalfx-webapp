import PrivacyPolicy from '@/modules/privacyPolicy'
import React from 'react'

export const metadata = {
  title: "Privacy Policy | Sea Global FX Data Protection & Privacy",
  description:
    "Learn how Sea Global FX collects, uses, protects, and processes personal data in compliance with data protection laws and regulatory requirements.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

export default function page() {
    return (
        <div>
            <PrivacyPolicy />
        </div>
    )
}
