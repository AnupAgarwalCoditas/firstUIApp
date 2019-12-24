import React from 'react'
import '../App.scss'
import 'typeface-roboto'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='sidebar'>
                <div className='menuItems'>
                    <div>
                        <div className='firstMenuItem'>A</div>
                        <div className='menuItem selected circle'>A</div>
                        <div className='menuItem'>A</div>
                        <div className='menuItem'>A</div>
                        <div className='menuItem'>A</div>
                        <div className='menuItem'>A</div>
                    </div>
                    <div>
                        <div className='mediumFocused'>B</div>
                    </div>
                </div>
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
            </div>
            <div className='content'>
                <div className='profileInfo'>
                    <div className='profileInfoLeft'>&larr; &nbsp; Back to product dashboard</div>
                    <div className='profileInfoRight'>
                        <div className='profileInfoButton inverseBaseGreen bold'>You have 12 new leads</div>
                        <div className='profileInfoButton'>You have 12 new leads</div>
                        <div className='profileInfoButton'>A</div>
                    </div>
                </div>
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
                <div className='contentFilter'>
                    <div className='left'>
                        <div className='filterOption'>Quick Search...</div>
                        <div className='filterOption'>Filters</div>
                        <div className='filterOption'>People</div>
                        <div className='lastFilterOption'>More</div>
                    </div>
                    <div className='right'>
                        New &darr;
                    </div>
                </div>
                <div className='deckContainer'>
                    <div className='deck'>
                        <div className='heading'>
                                <div className='mediumFocused greyBackground title'>No Stage</div>
                                <div className='more'>... +</div>
                        </div>
                        <div className='card'>
                            <div className='image'>
                                I am an image
                            </div>
                            <div>Marketing materials review</div>
                            <div className='detail'>
                                <div className='mediumFocused greyBackground horizontalPadding roundedBorders'>+ Tag</div>
                                <div className='mediumFocused horizontalPadding '>A 2</div>
                            </div>
                        </div>
                        <div className='card'>
                            <div>Product Paage structure</div>
                            <div className='detail'>
                                <div className='mediumFocused greyBackground horizontalPadding roundedBorders'>+ Tag</div>
                                <div className='mediumFocused horizontalPadding '>A 2</div>
                            </div>
                            <div className='detail mediumFocused'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='selected horizontalPadding roundedBorders' style={{marginRight:'2px'}}>E</span> Edward Floyd
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='deck'>
                        <div className='heading'>
                            <div className='baseBlue horizontalPadding'>In progress</div>
                            <div className='more'>... +</div>
                        </div>
                        <div className='card'>
                            <div>Calendar view</div>
                            <div className='detail'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='baseBlue horizontalPadding roundedBorders' style={{marginRight:'2px'}}>Design</span>
                                    <span className='baseGreen greyBackground horizontalPadding roundedBorders'>Client</span>
                                    <span className='inheritBackground circle'>+</span>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div>Invision Comments</div>
                            <div className='detail'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='baseBlue horizontalPadding roundedBorders' style={{marginRight:'2px'}}>Design</span>
                                </div>
                                <div className='mediumFocused'>A 2</div>
                            </div>
                        </div>
                        <div className='card'>
                            <div>Valuation for responsive design</div>
                            <div className='detail'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='baseBlue horizontalPadding roundedBorders' style={{marginRight:'2px'}}>Design</span>
                                    <span className='baseYellow greyBackground horizontalPadding roundedBorders'>Valuation</span>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div>Settings scope <span className='baseRed horizontalPadding roundedBorders' style={{fontSize:'8px'}}>A OVERDUE</span></div>
                            <div className='detail'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='baseYellow horizontalPadding roundedBorders' style={{marginRight:'2px'}}>Valuation</span>
                                </div>
                            </div>
                            <div className='detail mediumFocused'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='selected horizontalPadding roundedBorders' style={{marginRight:'2px'}}>E</span> Estella Webb
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div>Profile page structure</div>
                            <div className='detail'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='basePurple horizontalPadding roundedBorders' style={{marginRight:'2px'}}>Wireframes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='deck'>
                        <div className='heading'>
                                <div className='baseRed horizontalPadding'>Review</div>
                                <div className='more'>... +</div>
                        </div>
                        <div className='card'>
                            <div>Hi-fi wireframes</div>
                            <div className='detail'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='baseBlue horizontalPadding roundedBorders' style={{marginRight:'2px'}}>Design</span>
                                </div>
                            </div>
                            <div className='detail mediumFocused'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='selected horizontalPadding roundedBorders' style={{marginRight:'2px'}}>C</span> Craig Schmidt
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div>Settings scope</div>
                            <div className='detail'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='baseYellow horizontalPadding roundedBorders' style={{marginRight:'2px'}}>Valuation</span>
                                </div>
                            </div>
                            <div className='detail mediumFocused'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='selected horizontalPadding roundedBorders' style={{marginRight:'2px'}}>E</span> Estella Webb
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='deck'>
                        <div className='heading'>
                                <div className='basePurple horizontalPadding'>In progress</div>
                                <div className='more'>... +</div>
                        </div>
                        <div className='card'>
                            <div>Hi-fi wireframes</div>
                            <div className='detail'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='baseBlue horizontalPadding roundedBorders' style={{marginRight:'2px'}}>Design</span>
                                </div>
                            </div>
                            <div className='detail mediumFocused'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='selected horizontalPadding roundedBorders' style={{marginRight:'2px'}}>C</span> Craig Schmidt
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div>Settings scope</div>
                            <div className='detail'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='baseYellow horizontalPadding roundedBorders' style={{marginRight:'2px'}}>Valuation</span>
                                </div>
                            </div>
                            <div className='detail mediumFocused'>
                                <div style={{marginTop:'5px'}}>
                                    <span className='selected horizontalPadding roundedBorders' style={{marginRight:'2px'}}>E</span> Estella Webb
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}