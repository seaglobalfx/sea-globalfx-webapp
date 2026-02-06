import ContactBanner from '@/modules/contactUs/contactBanner'
import React from 'react'
import WaysToReach from './waysToReach'
import OfficeandRegistration from './officeandRegistration'
import GetinTouch from '../company/getinTouch'
import Faq from '../home/faq'

export default function ContactUs() {
    return (
        <div>
            <ContactBanner />
            <WaysToReach />
            <OfficeandRegistration />
            <GetinTouch />
            <Faq />
        </div>
    )
}
