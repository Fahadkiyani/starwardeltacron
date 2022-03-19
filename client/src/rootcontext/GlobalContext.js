import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import axios from 'axios'
import { url } from "../api";
const UIContext = createContext();

export function useGlobalContext() {
  return useContext(UIContext);
}

export function GlobalProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState()
  const [isValidUser, setIsValidUser] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [])


  const value = {
    isAuthorized, setIsAuthorized,
    isValidUser, setIsValidUser,
    isLoading, setIsLoading,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

