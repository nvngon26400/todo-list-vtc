import React, { useState } from 'react'; 
import TodoItem from './TodoItem'; 
import AddTodo from './AddTodo'; 
  
function TodoList() { 
  const [todos, setTodos] = useState([ 
    { text: 'Learn React', isCompleted: false }, 
    { text: 'Meet friend for lunch', isCompleted: false }, 
    { text: 'Build todo app', isCompleted: false } 
  ]); 
  
  const addTodo = text => { 
    const newTodos = [...todos, { text }]; 
    setTodos(newTodos); 
  }; 
  
  const completeTodo = index => { 
    const newTodos = [...todos]; 
    newTodos[index].isCompleted = true; 
    setTodos(newTodos); 
  }; 
  
  return ( 
    <div class="item"> 
      {todos.map((todo, index) => ( 
        <TodoItem key={index} index={index} todo={todo} 
completeTodo={completeTodo} /> 
      ))} 
      <AddTodo addTodo={addTodo} /> 
    </div> 
  ); 
} 
  
export default TodoList;