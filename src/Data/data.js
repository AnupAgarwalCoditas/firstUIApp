const decks = [
    {
        heading: 'No Stage',
        headingClass: 'mediumFocused greyBackground title',
        cards: [
            {
                image: true,
                heading: "Marketing materials review", 
                details:[
                    { left:'+ Tag', right:'A 2' }
                ]
            },
            {
                heading: "Product page structure", 
                details:[
                    { left:'+ Tag', right:'A 2' },
                    { name:'Edward Floyd'}
                ],
            }
        ]
    },
    {
        heading: 'In Progress',
        headingClass: 'baseBlue horizontalPadding',
        cards: [
            {
                heading: "Calendar view", 
                details:[
                    {
                        list: [
                            { name: "Design", class: "baseBlue horizontalPadding roundedBorders"},
                            { name: "Client", class: "baseGreen greyBackground horizontalPadding roundedBorders"},
                            { name: "+", class: "inheritBackground circle"}
                        ]
                    }
                ]
            },
            {
                heading: "Invision Comments", 
                details:[
                    {
                        list: [
                            { name: "Design", class: "baseBlue horizontalPadding roundedBorders"},
                        ]
                    }
                ],
            },
            {
                heading: "Valuation for responsive design", 
                details:[
                    {
                        list: [
                            { name: "Design", class: "baseBlue horizontalPadding roundedBorders"},
                            { name: "Valuation", class: "baseYellow horizontalPadding roundedBorders"}
                        ]
                    }
                ],
            },
            {
                heading: "Settings scope", 
                details:[
                    {
                        list: [
                            { name: "Valuation", class: "baseYellow horizontalPadding roundedBorders"}
                        ]
                    },
                    {name: "Estella Webb"}
                ],
            },
            {
                heading: "Profile page structure", 
                details:[
                    {
                        list: [
                            { name: "Wireframes", class: "basePurple horizontalPadding roundedBorders"}
                        ]
                    },
                    {name: "Estella Webb"}
                ],
            },
        ]
    },
    {
        heading: 'Review',
        headingClass: 'baseRed horizontalPadding',
        cards: [
            {
                heading: "Hi-fi wireframes", 
                details:[
                    {
                        list: [
                            { name: "Design", class: "baseBlue horizontalPadding roundedBorders"},
                        ]
                    },
                    {name: "Craig Schmidt"}
                ],
            },
            {
                heading: "Settings scope", 
                details:[
                    {
                        list: [
                            { name: "Valuation", class: "baseYellow horizontalPadding roundedBorders"}
                        ]
                    },
                    {name: "Estella Webb"}
                ],
            },
        ]
    },
    {
        heading: 'No Stage',
        headingClass: 'mediumFocused greyBackground title',
        cards: [
            {
                image: true,
                heading: "Marketing materials review", 
                details:[
                    { left:'+ Tag', right:'A 2' }
                ]
            },
            {
                heading: "Product page structure", 
                details:[
                    { left:'+ Tag', right:'A 2' },
                    { name:'Edward Floyd'}
                ],
            }
        ]
    }
]
const filterOptions = ['Quick Search...','Filters','People','More']

const menuItems = [
    {name:'A'},
    {name:'A', selected: true},
    {name:'A'},
    {name:'A'},
    {name:'A'},
    {name:'A'},
]

export { decks, filterOptions, menuItems};