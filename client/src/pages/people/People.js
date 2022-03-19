import React from 'react'
import { UIProvider } from './context/UIContext'
import HomePageCard from './component/HomePageCard'

const People = () => {
    return (
        <UIProvider>
            <HomePageCard />
        </UIProvider>

    )
}

export default People