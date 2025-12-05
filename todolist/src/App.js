import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editing, setEditing] = useState(null); // ID of the todo being edited
  const [editText, setEditText] = useState(''); // Text of the todo being edited

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false, id: Date.now() }]);
      setInput('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const submitEdit = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditing(null);
  };
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {editing === todo.id ? (
              <input
                type="text"
                className="edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => submitEdit(todo.id)}
                onKeyPress={(e) => e.key === 'Enter' && submitEdit(todo.id)}
                autoFocus
              />
            ) : (
              <>
                <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
                <div>
                  <button className="edit-button" onClick={() => {
                    setEditing(todo.id);
                    setEditText(todo.text);
                  }}>✏️</button>
                  <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
                    &times;
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;