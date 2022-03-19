import React from 'react'
import { Redirect, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../rootcontext/GlobalContext';
import { Loader } from "../../utils/Loader";
import { CustomCard } from './component/CustomCard';
import { Tiles } from './component/Tiles'
export const Home = () => {
    const location = useLocation()
    return (
        <>
            {location.pathname !== "/home" && <Redirect to="/home" />}
            <div className='p-5 m-5 mt-4 pt-4'>
                <div class="shadow-lg p-3 mb-5 bg-white rounded">
                    <CustomCard dontShowBorder={true} body={<div class="d-flex justify-content-center">
                        <h1>
                            {/* <i class="fa fa-th-large" aria-hidden="true"></i> */}
                            Categories
                        </h1>
                    </div>} />
                    <div>
                        <Tiles />
                    </div>
                </div>
            </div>
        </>
    )
}
