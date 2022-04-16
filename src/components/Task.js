import React,{useState} from "react"
import {db} from "../firebase"
import { updateDoc, doc } from "firebase/firestore"

export default function Task({task}){
    const [complete, setComplete]= useState(task.complete);
    const handleStatusChange = ()=>{
        const docRef = doc(db, "tasks-Delyce", task.id)
        updateDoc(docRef, {
            complete: !task.complete
        })
        setComplete(!complete)

    }

    return(
        <div className={complete ? "complete task-card":"task-card"}>{task.name}
         <button onClick={handleStatusChange}>
             {complete ? "mark incomplete" : "mark complete"}</button></div>
    )
}