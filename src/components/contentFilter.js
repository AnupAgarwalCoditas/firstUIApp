import React from 'react'
import {filterOptions} from '../Data/data'
import FilterOptions from './filterOptions'

export default function contentFilter() {
    return (
        <div className='contentFilter'>
            <div className='left'>
                <FilterOptions options={filterOptions} />
            </div>
            <div className='right'>
                New &darr;
            </div>
        </div>
    )
}
