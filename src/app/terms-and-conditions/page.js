import TermsAndConditions from '@/modules/termsAndConditions'
import { SITE_URL } from '@/utils/config';
import React from 'react'

export const metadata = {
  title: "Terms and Conditions | Sea Global FX Legal Agreement",
  description:
    "Read the Terms and Conditions governing the use of Sea Global FX services, including account obligations, risk disclosures, compliance, and legal policies.",
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
};

export default function page() {
  return (
    <div>
      <TermsAndConditions />
    </div>
  )
}
