import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function TaskContainer(props) {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const getTasks = async () => {
      const tempArray = [];
      const tasksRef = collection(db, "tasks-Delyce");
      const snapshot = await getDocs(tasksRef);
      snapshot.forEach((task) => {
        tempArray.push({ id: task.id, ...task.data() });
      });
      setTasks(tempArray);
    };
    getTasks();
  }, []);

  return (
    <>
      <Navbar setIsLoggedIn={props.setIsLoggedIn} />
      <div className="tasks-container">
        <NewTask />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}
