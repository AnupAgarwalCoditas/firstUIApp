import React from 'react'

export default function contentTitle() {
    return (
        <div className='contentTitle'>
            <div className='contentTitleLeft'>
                <div className='icon'>A</div>
                <div className='title'>
                    <div className='heading'>
                        Product Roadmap
                    </div>
                    <div className='description'>
                        Last edited by Maciej Kataska
                    </div>
                </div>
            </div>
            <div className='contentTitleRight'>
                <span style={{fontSize: '12px', marginRight: '5px'}}>View</span>
                <span className='toggleIcon'>
                    <span className='toggleOptionSelected'>A</span>B
                </span>
            </div>
        </div>
    )
}
