import React from 'react'

export default function card(props) {
    console.log('called');
    
    return (
        <div>
            <div className='card'>
                {
                    props.image?
                    <div className='image'>
                        I am an image
                    </div> : null
                }
                <div>{props.heading}</div>
                {
                    props.details.map(detail=>{
                        if(detail['left'] && detail['right']){
                            return (
                                <div className='detail'>
                                    <div className='mediumFocused greyBackground horizontalPadding roundedBorders'>{detail['left']}</div>
                                    <div className='mediumFocused horizontalPadding '>{detail['right']}</div>
                                </div>
                            )
                        }

                        if(detail['list']){
                            return (
                                <div className='detail'>
                                    <div style={{marginTop:'5px'}}>
                                        {detail['list'].map(ele=>{return <span className={ele.class} style={{marginRight:'2px'}}>{ele.name}</span>})}                                    
                                    </div>
                                </div>
                            )
                        }

                        if(detail['name']){
                            return(
                                <div className='detail mediumFocused'>
                                    <div style={{marginTop:'5px'}}>
                                        <span className='selected horizontalPadding roundedBorders' style={{marginRight:'2px'}}>{detail['name'].charAt(0)}</span> {detail['name']}
                                    </div>
                                </div>
                            )
                        }

                        return null;
                    })
                }
            </div>
        </div>
    )
}
