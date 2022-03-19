import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen } from "./utils/LayoutSplashScreen"
import { Home as HomePage } from "./pages/home/Home";
import Navbar from "./modules/navbar/Navbar"

const peoplePage = lazy(() => import("./pages/people/People"));
const starshipsPage = lazy(() => import("./pages/starships/Starships"));
const planetsPage = lazy(() => import("./pages/planets/Planets"));


export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Navbar />
      <Switch>
        {
          <Redirect exact from="/" to="/home" />
        }
        <Route path="/home" component={HomePage} />
        <Route path="/people" component={peoplePage} />
        <Route path="/starships" component={starshipsPage} />
        <Route path="/planets" component={planetsPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
}
