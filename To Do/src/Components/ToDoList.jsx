import React from 'react'
import NewTask from './NewTask';

const ToDoList =({toDos, toggleToDo, deleteToDo}) => {
  return (
    <>
      <ul className="list">
        {toDos.length === 0 && "No pending tasks"}
        {toDos.map(toDo => {
          return (
            <NewTask
              {... toDo}
              key={toDo.id}
              toggleToDo={toggleToDo}
              deleteToDo={deleteToDo}
            />
          )
        })}
      </ul>
      </>
  )
}

export default ToDoList;