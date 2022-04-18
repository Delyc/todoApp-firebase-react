import React from "react"
import AppContainer from "./components/AppContainer";
import {AppContextProvider} from "./contexts/AppContext";

function App() {

  return (
    <AppContextProvider>
      <AppContainer />
    </AppContextProvider>
    
  );
}

export default App;