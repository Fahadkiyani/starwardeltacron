import React, { useEffect } from 'react'
import { Home } from './pages/home/Home';
import { Routes } from "./Routes"
import { GlobalProvider } from './rootcontext/GlobalContext';
function App() {

  return (
    <GlobalProvider>
      <div className="App">
        <Routes />
      </div>
    </GlobalProvider>

  );
}

export default App;
