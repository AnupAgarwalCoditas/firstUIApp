import React from 'react'
import Cards from './cards';

export default function deck(props) {
    return (
        <div className='deck'>
            <div className='heading'>
                <div className={props.headingClass}>{props.heading}</div>
                <div className='more'>... +</div>
            </div>
            <Cards cards={props.cards}/>
        </div>
    )
}