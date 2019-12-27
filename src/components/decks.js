import React from 'react';
import Deck from './deck';

export default function decks(props) {
    return (
        <div className='deckContainer'>
            {props.decks.map(deck=><Deck heading={deck.heading} headingClass={deck.headingClass} cards={deck.cards} />)}
        </div>
    )
}