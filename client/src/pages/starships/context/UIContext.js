import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import axios from 'axios'
import { url } from "../../../api";


const UIContext = createContext();

export function useUIContext() {
    return useContext(UIContext);
}

export function UIProvider({ children }) {
    // States
    const [isAuthorized, setIsAuthorized] = useState()
    const [isValidUser, setIsValidUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [tempData, setTempData] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    const [tempDetailsData, setTempDetailsData] = useState({})
    // Effects
    useEffect(() => {
        fetchPeoplesListHandler()
    }, [])

    // Handlers
    let token = localStorage.getItem('token');
    const fetchPeoplesListHandler = () => {
        setIsLoading(true)
        axios.post(`${url}/starships`, { authorization: `Bearer ${token}` },)
            .then(res => {
                setTempData(res.data.results);
                setIsLoading(false)
            })
            .catch(err => alert(err));
    }

    const fetchDetailsHandler = (route) => {
        setIsLoading(true)
        axios.post(`${url}/starships/details`, { route, authorization: `Bearer ${token}` },)
            .then(res => {
                setTempDetailsData(res.data);
                setIsLoading(false)
            })
            .catch(err => alert(err));
    }

    // Values
    const value = {
        isAuthorized, setIsAuthorized,
        isValidUser, setIsValidUser,
        isLoading, setIsLoading,
        showDetails, setShowDetails,
        tempData, setTempData,
        tempDetailsData, setTempDetailsData,
        fetchPeoplesListHandler,
        fetchDetailsHandler,
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

