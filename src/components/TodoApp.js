import React, { useState } from 'react';

const TodoApp = () => {
  
  const [todos, setTodos] = useState([]);
  

  const [todoInput, setTodoInput] = useState('');


  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
   
      <input 
        type="text" 
        value={todoInput} 
        onChange={(e) => setTodoInput(e.target.value)} 
        placeholder="Add a new todo" 
      />

      <button onClick={addTodo}>Add Todo</button>
  
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
    
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
