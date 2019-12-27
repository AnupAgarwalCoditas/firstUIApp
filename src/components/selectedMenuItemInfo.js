import React from 'react'

export default function selectedMenuItemInfo() {
    return (
        <div className='selectedMenuItems'>
            <div>
                <input type='text' className="mediumFocused firstItem bottomSpacing searchInput" placeholder='A search...'></input>
                <div className="title selectedMenuItemTitle">
                    <p className='title'>Teams</p>
                    <p className='inverseSelected circle internalSpacing'>+</p>
                </div>
                
                <div className="mediumFocused baseSmallFont bottomSpacing">Favourites 2</div>

                <div className="sidebarItem">
                    <div className='basePurple circle icon'>A</div>
                    <div className='details'>
                        <div className='subTitle'>Widelab</div>
                        <div className='subTitleSummary'>2 products</div>
                    </div>
                </div>
                <div className="sidebarItem">
                    <div className='icon'>&nbsp;&nbsp;</div>
                    <div className='details'>
                        <div className='subTitle'>Washmen</div>
                        <div className='subTitleSummary'>2 products</div>
                    </div>
                </div>
                <div className="sidebarItem">
                    <div className='icon'>&nbsp;&nbsp;</div>
                    <div className='details'>
                        <div className='subTitle'>Activity</div>
                    </div>
                </div>
                <div className="sidebarItem">
                    <div className='baseRed circle icon'>A</div>
                    <div className='details'>
                        <div className='subTitle'>Dribble</div>
                    </div>
                </div>

                <div className="mediumFocused baseSmallFont bottomSpacing">Teams 3</div>
                <div className="sidebarItem">
                    <div className='baseGreen circle icon'>A</div>
                    <div className='details'>
                        <div className='subTitle'>Spotify</div>
                        <div className='subTitleSummary'>2 products</div>
                    </div>
                </div>
                <div className="sidebarItem">
                    <div className='baseYellow circle icon'>A</div>
                    <div className='details'>
                        <div className='subTitle'>Google</div>
                        <div className='subTitleSummary'>3 products</div>
                    </div>
                </div>
            </div>
            <div className="selfCenter" style={{width:'100%'}}>
                <input type='button' value='Show archived' className='mediumFocused button'/>
            </div>
        </div>
    )
}