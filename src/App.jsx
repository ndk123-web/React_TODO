import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Home from "./components/Home";

const App = () => {

  // declaring state vriables and useRef for the DOM manipulation
  const [completed, setCompleted] = useState([]);
  const [inCompleted, setInCompleted] = useState([]);
  const [input, setCurrInput] = useState("");
  const inputRef = useRef(null);

  // Logic after Click or Enter Add Task Button 
  const handleTasks = () => {
    if (input.trim() === "") {
      alert("Please enter a task");
      return;
    }
    setInCompleted((prev) => [...prev, input]);
    setCurrInput("");
    inputRef.current.focus();
  };

  // if click any user submit or enter the key InCompleted task then it will move to the Completed task 
  const completeTask = (taskIndex) => {
    const taskToComplete = inCompleted[taskIndex];
    setInCompleted((prev) => prev.filter((_, idx) => idx !== taskIndex));
    setCompleted((prev) => [...prev, taskToComplete]);
  };

  // if click any user submit or enter the key Completed task then it will move to the InCompleted task 
  const inCompletedTask = (taskIndex) => {
    const taskToIncomplete = completed[taskIndex];
    setCompleted((prev) => prev.filter((_, idx) => idx !== taskIndex));
    setInCompleted((prev) => [...prev, taskToIncomplete]);
  };

  // renderring Home Component and giving All states and functions to Home Component
  return (
    <Home
      completed={completed}
      setCompleted={setCompleted}
      inCompleted={inCompleted}
      setInCompleted={setInCompleted}
      input={input}
      setCurrInput={setCurrInput}
      inputRef={inputRef}
      handleTasks={handleTasks}
      completeTask={completeTask}
      inCompletedTask={inCompletedTask}
    />
  );
};

export default App;
