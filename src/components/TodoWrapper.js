import React,{useState} from "react";
import { TodoForm } from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from "./ToDo";
import { isEditable } from "@testing-library/user-event/dist/utils";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
    const [todos,setTodos] = useState([]);
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(),task: todo,completed:false,isEditing:false}])
        console.log(todos);
    }
    const deletetodo = id => {
        setTodos(todos.filter(todo => todo.id != id))
    }
    const edittodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing }: todo))
    }
    const edittask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
    }
    return (
        <div className="todo-wrapper">
            <h1>Get Things Done</h1>
          <TodoForm addTodo={addTodo}/>
          {todos.map((todo,index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={edittask} task={todo}/>
            ) : (
                <ToDo task={todo} key={index} deletetodo={deletetodo} edittodo={edittodo}/>
            )
             
          ))}  
  
        </div> 
    )
}