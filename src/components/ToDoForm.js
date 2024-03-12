import React, {useState}  from 'react';

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }
    return(
        <form className="todoform" onSubmit={handleSubmit}>
        <input type="text" className="todoinput" placeholder="What is the Task today" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className="todo-btn">Add Task</button>
    </form>
    )
}