import React, { useState, useEffect } from "react";
import Textfield from "./Textfield";
import SubmitButton from "./SubmitButton";
import { isNewTaskFormValid } from "../libraries/functions";
import { useAppContext } from "../contexts/AppContext";

const NewTask = () => {
  const [formValid, setFormValid] = useState(false);
  const { newTask, setNewTask, newTaskIsValid, setNewTaskIsValid, handleSubmitClick } =
    useAppContext();

  const setValue = (value, field) => {
    setNewTask({ ...newTask, [field]: value });
  };

  const setValid = (value, field) => {
    setNewTaskIsValid(() => {
      return { ...newTaskIsValid, [field]: value };
    });
  };

  useEffect(() => {
    const valid = isNewTaskFormValid(newTaskIsValid);
    setFormValid(valid);
  }, [newTaskIsValid, setFormValid]);

  return (
    <div className="new-task-box">
      <h2>Create New Task</h2>
      <div className="flex-container">
        <div className="flex-item">
          <Textfield
            type="text"
            label="User Name"
            field="author"
            setValue={setValue}
            valid={newTaskIsValid.author}
            setValid={setValid}
            value={newTask.author}
          />
        </div>
        <div className="flex-item">
          <Textfield
            type="text"
            label="Task Name"
            field="name"
            setValue={setValue}
            valid={newTaskIsValid.name}
            setValid={setValid}
            value={newTask.name}
          />
        </div>
        <div className="flex-break"></div>
        <div className="flex-item">
          <Textfield
            type="text"
            label="Task Description"
            field="description"
            setValue={setValue}
            valid={newTaskIsValid.description}
            setValid={setValid}
            value={newTask.description}
          />
        </div>
        <div className="flex-break"></div>
        <div className="flex-item">
          <Textfield
            type="date"
            label="Due Date"
            field="dueDate"
            setValue={setValue}
            valid={newTaskIsValid.dueDate}
            setValid={setValid}
            value={newTask.dueDate}
          />
        </div>
        <div className="flex-item">
          <Textfield
            type="text"
            label="Priority"
            field="priority"
            setValue={setValue}
            valid={newTaskIsValid.priority}
            setValid={setValid}
            value={newTask.priority}
          />
        </div>
      </div>
      <SubmitButton isValid={formValid} handleClick={handleSubmitClick} label={"Submit New Task"} />
    </div>
  );
};

export default NewTask;
