import React, { useState } from 'react' // Update import

export default function ToDoList() {
  const [tasks, setTasks] = useState([])
  const [taskText, setTaskText] = useState('')
  const [count, setCount] = useState(0)

  const addTask = () => {
    if (taskText) {
      setTasks([...tasks, taskText])
      setTaskText('')
      setCount(count + 1)
    }
  }

  return (
    <div className="mt-4">
      <h4>User Goals (ToDo)</h4>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add goal"
        className="border p-1 text-black"
      />
      <button onClick={addTask} className="bg-green-500 text-white p-1 ml-2">Add</button>
      <ul>
        {tasks.map((task, i) => <li key={i}>{task}</li>)}
      </ul>
      <p>Tasks added: {count}</p>
    </div>
  )
}