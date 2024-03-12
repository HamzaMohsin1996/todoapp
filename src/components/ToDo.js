import React from "react";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ToDo = ({task, deletetodo,edittodo}) => {
    return(
        <div className="todo">
            <p>{task.task}</p>
            <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => edittodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deletetodo(task.id)}/>
            </div>
        </div>
    )
}