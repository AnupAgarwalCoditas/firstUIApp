import React from 'react'
import ContentFilter from './contentFilter'
import ContentTitle from './contentTitle'
import ProfileInfo from './profileInfo'

export default function contentCockpit() {
    return (
        <React.Fragment>
            <ProfileInfo />
            <ContentTitle />
            <ContentFilter />
        </React.Fragment>
    )
}