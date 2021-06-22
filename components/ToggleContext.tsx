import React from 'react';

export type componentState = {
    toggled: boolean,  
    toggled2: boolean, 
    toggled3: boolean,
    toggled4: boolean,
    toggled5: boolean,
    
    setToggled: (toggler: boolean) => void
    setToggled2: (toggler2: boolean) => void
    setToggled3: (toggler2: boolean) => void
    setToggled4: (toggler2: boolean) => void
    setToggled5: (toggler2: boolean) => void
}

export const ToggleContext = React.createContext<componentState>({
    toggled: true,
    toggled2: true,
    toggled3: true,
    toggled4: true,
    toggled5: true,
    setToggled: () => {},
    setToggled2: () => {},
    setToggled3: () => {},
    setToggled4: () => {},
    setToggled5: () => {},
})

const InitialState = {

    componentState: [

        { id: 1, text: 'Weather', toggle: true},
        { id: 2, text: 'Clock', toggle: true},
    ]
}

export const TogglerContext = React.createContext(InitialState)