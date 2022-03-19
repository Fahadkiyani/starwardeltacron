/* eslint-disable react-hooks/exhaustive-deps */
/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useEffect } from "react";
import { Redirect, Switch, Route, } from "react-router-dom";
// import { shallowEqual, useSelector } from "react-redux";
import BasePage from "./BasePage";
import Login from "./modules/Login";
// import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { useGlobalContext } from "./rootcontext/GlobalContext";

export function Routes() {
  const { isAuthorized, setIsAuthorized, } = useGlobalContext()
  // const { isAuthorized } = useSelector(
  //   ({ auth }) => ({
  //     isAuthorized: auth.user != null,
  //   }),
  //   shallowEqual
  // );
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthorized(true)
    } else {
      setIsAuthorized(false)
    }
  }, [])
  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <Login />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/login" to="/" />
      )}

      {/* <Route path="/error" component={ErrorsPage} /> */}
      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/login" />
      ) : (
        <BasePage />
      )}
      <Route exect path="/login" component={Login} />
    </Switch>
  );
}
 