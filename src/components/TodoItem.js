import React from 'react'; 
function TodoItem({ todo, index, completeTodo }) { 
  return ( 
    <div class="list" style={{ textDecoration: todo.isCompleted ? 'line-through' : 
'' }}> 
      {todo.text} 
      <button onClick={() => 
completeTodo(index)}>Complete</button> 
    </div> 
  ); 
} 
  
export default TodoItem; 