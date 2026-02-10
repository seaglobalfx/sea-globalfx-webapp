import ContactUs from '@/modules/contactUs'
import { SITE_URL } from '@/utils/config';
import React from 'react'

export const metadata = {
    title: "Contact Sea Global FX | Support, Enquiries & Office Details",
    description:
        "Contact Sea Global FX for account support, platform assistance, IB partnerships, or general enquiries. Reach our team via email, phone, or contact form.",
    alternates: {
        canonical: `${SITE_URL}/contact-us`,
    },
};

export default function page() {
    return (
        <div>
            <ContactUs />
        </div>
    )
}
