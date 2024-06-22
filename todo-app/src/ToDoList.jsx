import React, { useState } from "react";
function ToDoList(){
    const[tasks, setTasks] = useState(["Eat breakfast","Take a shower","walk the dog"]);
    const[newTask, setNewTask] = useState("");
    function handleInputChange(event){
        setNewTask(event.target.value)
    } 
    function addTask(){
        setTasks(t => [...t, newTask])
        setNewTask("");
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i!== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){
        
    }
return(
    <div className="to-do-list">

        <h1>ToDo list</h1>
        <div><input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter the text here" />
        <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((tasks,index) =>
            <li key={index}>
                <span className="text">
                    {tasks}
                </span>
                <button className="delete-button" onClick={ () => deleteTask(index)}>Delete</button>
                <button className="up-button" onClick={ () => moveTaskUp(index)}>Up</button>
                <button className="down-button" onClick={ () => moveTaskDown(index)}>Down</button>
            </li>
            )}
        </ol>

    </div>
)
}
export default ToDoList;