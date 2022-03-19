import React from 'react'
import { UIProvider } from './context/UIContext'
import HomePageCard from './component/HomePageCard'

const Planets = () => {
    return (
        <UIProvider>
            <HomePageCard />
        </UIProvider>

    )
}

export default Planets