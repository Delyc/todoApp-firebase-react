import React, {useState, useEffect} from 'react';
import LoginContainer from "./components/LoginContainer";
import TaskContainer from "./components/TaskContainer"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const loggedIn = localStorage.getItem("isLoggedIn")
    if(loggedIn){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false)
    }
  },[])

  return (
    <>
    {isLoggedIn ? (<TaskContainer setIsLoggedIn={setIsLoggedIn} />) : (<LoginContainer setIsLoggedIn={setIsLoggedIn} />)}
    </>
    
  );
}

export default App;