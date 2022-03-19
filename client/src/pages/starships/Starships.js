import React from 'react'
import { UIProvider } from './context/UIContext'
import HomePageCard from './component/HomePageCard'

const Starships = () => {
    return (
        <UIProvider>
            <HomePageCard />
        </UIProvider>

    )
}

export default Starships