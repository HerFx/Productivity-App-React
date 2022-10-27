import React from 'react'
import Header from '../Header'
import {useState} from 'react'
import ToDoBox from './ToDoBox'
import useLocalStorage from './useLocalStorage'

export default function ToDoSection() {


    const [input, setInput] = useState('')
    const [toDoList, setToDoList] = useLocalStorage("todo-items", [])


    const handleInput = (e) => {
        setInput(e.target.value)
    }


    const handleSubmit = (e) => {
      e.preventDefault()
      if(input !== ''){
      setToDoList([...toDoList, input])
      }
      setInput('')
    
    }

    const handleFinishItem = (e) => {
      e.preventDefault()
      setToDoList(toDoList.filter((item, index) => index !== e.target.value))

    }

    const handleClear = (e) => {
      e.preventDefault()
      setToDoList([])
    }

  return (
    <div className='box'>
          <Header title='TO DO LIST' subtitle='Make a list and stick to it'/>
          <form onSubmit={handleSubmit}>
            <input value={input} type='text' placeholder='Add a new task' onChange={handleInput}/>
            <button type='submit'>Add</button>
            <button onClick={handleClear}>Clear</button>
          </form>
          <div className='todo-box'>
            {toDoList.map((item, index) => (
              <ToDoBox item={item} index={index}  handleClick={handleFinishItem} />
            ))}
          </div>
          <div>
            <h2>You have <span>{toDoList.length}</span> tasks to do</h2>
          </div>
      

    </div>
  )
}