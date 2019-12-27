import React from 'react'
import {decks} from '../Data/data'
import Decks from './decks';
import ContentCockpit from './contentCockpit'

export default function content() {
    return (
        <div className='content'>
            <ContentCockpit />
            <Decks decks={decks}/>
        </div>
    )
}
