import React from 'react';
import "./todo-list.css";
import TodoListItem from '../todo-list-item';


const TodoList = ( {todos, onDeleted, onToggleDone, onToggleImportant} ) =>{

    const element = todos.map((item) => {
        const {id, ...itemsProps} = item;

        return(
            <li key={id} className="list-group-item">
            <TodoListItem 
            { ...itemsProps}
            onDeleted={() => onDeleted(id)} 
            onToggleImportant={()=> onToggleImportant (id)}
            onToggleDone={()=> onToggleDone (id)}
            />
            </li>
        );
    });
   

     return (
         <ul className="list-group todo-list">
             {element}
        </ul>
     );
 };

 export default TodoList;