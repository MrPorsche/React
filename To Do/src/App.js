import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

const App = () => {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("TASKS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(toDos))
  }, [toDos])

  const addToDo = (title) => {
    setToDos(currentToDos => {
      return [
        ...currentToDos,
          { id: crypto.randomUUID(),
            title,
            completed: false},
      ]
    })
  }

  const toggleToDo = (id, completed) => {
    setToDos(currentToDos => {
      return currentToDos.map(toDo => {
        if (toDo.id === id) {
          return { ...toDo, completed}
        }
        return toDo
      })
    })
  }

  const deleteToDo = (id) => {
    setToDos(currentToDos => {
      return currentToDos.filter(toDo => toDo.id !==id)
    })
  }

  return (
    <>
      <Form onSubmit={addToDo} />
      <h1 className='header'>ToDo List</h1>
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
    </>
  );
}

export default App;