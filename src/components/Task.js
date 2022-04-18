import React, { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Task({ task }) {
    const [complete, setComplete] = useState(task.complete)

  const handleStatusChange = async() => {
    const docRef = doc(db, "tasks-ryan", task.id);
    updateDoc(docRef, {
        complete: !task.complete
    })
    setComplete(()=>{
        return !complete
    })
  };

  return (
     <div className={complete ? "complete task-card" : "task-card"}>
      <div className="task-status">
        <button onClick={handleStatusChange}>
          {complete ? "Mark Incomplete" : "Mark Complete"}
        </button>
      </div>
      <div className="task-name-description">
        <div className="task-name">{task.name}</div>
        <div className="task-description">{task.description}</div>
      </div>
      <div className="task-author">
        <b>Owner:</b> {task.author}
      </div>
      <div className="task-priority">
        <b>Priority:</b> {task.priority}
      </div>
      <div className="task-dueDate">
        <b>Due:</b> {task.dueDate}
      </div>
    </div>
  );
}
