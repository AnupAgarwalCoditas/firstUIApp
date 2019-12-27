import React from 'react'
import { menuItems } from "../Data/data";

export default function menuItems() {
    return (
        <div className='menuItems firstMenuItem'>
            <div>
                {menuItems.map(item=>item['selected'])?<div className='menuItem selected circle'>{item.name}</div>:<div className='menuItem'>{item.name}</div>}
            </div>
            <div>
                <div className='mediumFocused'>B</div>
            </div>
        </div>
    )
}
