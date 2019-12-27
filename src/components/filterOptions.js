import React from 'react'

export default function filterOptions(props) {
    return (
        props.options.map((option,index)=>{
            return (index===props.options.length-1)?<div className='lastFilterOption'>{option}</div>:<div className='filterOption'>{option}</div>
        })
    )
}
