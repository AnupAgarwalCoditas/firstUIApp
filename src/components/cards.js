import React from 'react'
import Card from './card'

export default function cards(props) {
    console.log(props.cards);
    
    return (
        props.cards.map(card=><Card {...card}/>)
    )
}