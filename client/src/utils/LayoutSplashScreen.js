import React from 'react'
import { Loader } from "./Loader"
export const LayoutSplashScreen = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ width: "100vw", height: "100vh" }}>
            <Loader />
        </div>
    )
}
