import React, { useState } from 'react';

const TodoApp = () => {
  // State for storing todos
  const [todos, setTodos] = useState([]);
  
  // State for storing current todo input
  const [todoInput, setTodoInput] = useState('');

  // Function to handle adding a todo
  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  // Function to handle removing a todo
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {/* Input field for adding a new todo */}
      <input 
        type="text" 
        value={todoInput} 
        onChange={(e) => setTodoInput(e.target.value)} 
        placeholder="Add a new todo" 
      />
      {/* Button to add a new todo */}
      <button onClick={addTodo}>Add Todo</button>
      {/* List of todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* Button to remove a todo */}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
