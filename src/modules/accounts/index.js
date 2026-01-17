import React from 'react'
import AccountsBanner from './accountsBanner'
import AccountTypes from './accountTypes'
import EasySteps from '../home/easySteps'
import Faq from '../home/faq'

export default function Accounts() {
    return (
        <div>
            <AccountsBanner />
            <AccountTypes />
            <EasySteps />
            <Faq />
        </div>
    )
}
