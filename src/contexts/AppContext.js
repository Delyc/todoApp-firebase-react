import React, { useContext, createContext, useState, useEffect } from "react";
import { db, auth, provider } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { blankNewTask, blankNewTaskIsValid } from "../libraries/objects";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();
  const [newTask, setNewTask] = useState(blankNewTask);
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [newTaskIsValid, setNewTaskIsValid] = useState(blankNewTaskIsValid);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSubmitClick = async () => {
    const tasksRef = collection(db, "tasks-ryan");
    await addDoc(tasksRef, newTask);
    setNewTask(blankNewTask);
    setNewTaskIsValid(blankNewTaskIsValid);
    setSubmitTrigger(() => {
      return !submitTrigger;
    });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result.user);
      setLoggedInUser(result.user);
      setIsLoggedIn(true);
    });
  };

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      setIsLoggedIn(true);
      setLoggedInUser(user);
    } else {
      setIsLoggedIn(false);
    }
    setLoading(false);
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
    return auth.signOut();
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    newTask,
    setNewTask,
    newTaskIsValid,
    setNewTaskIsValid,
    handleSubmitClick,
    signInWithGoogle,
    loggedInUser,
    loading,
    handleLogout
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
