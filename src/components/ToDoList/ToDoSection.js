import React from 'react'
import Header from '../Header'
import {useState} from 'react'
import ToDoBox from './ToDoBox'
import useLocalStorage from './useLocalStorage'
import ToDoForm from './ToDoForm'

export default function ToDoSection() {


    const [input, setInput] = useState('')
    const [toDoList, setToDoList] = useLocalStorage("todo-items", []) 


    const handleInput = (e) => {
        setInput(e.target.value)
    } //Ustawienie wartości inputa


    const handleSubmit = (e) => {
      e.preventDefault()
      if(input !== ''){
      setToDoList([...toDoList, input])
      }
      setInput('')
    
    } //Dodanie notatki do tablicy

    const handleFinishItem = (e) => {
      e.preventDefault()
      setToDoList(toDoList.filter((item, index) => index !== e.target.value))

    } //Usuwanie elementu z tablicy

    const handleClear = (e) => {
      e.preventDefault()
      setToDoList([])
    } //Usuwanie wszystkich elementów z tablicy

  return (
    <div className='box'>
          <Header title='TO DO LIST' subtitle='Make a list and stick to it'/>
          <ToDoForm value={input} onChange={handleInput} onSubmit={handleSubmit} onClick={handleClear}/>
          <div className='todo-box'>
            {toDoList.map((item, index) => (
              <ToDoBox item={item} index={index}  handleClick={handleFinishItem} /> //Wyświetlenie elementów tablicy
            ))} 
          </div>
          <div>
            <h2>You have <span>{toDoList.length}</span> tasks to do</h2>
          </div>
      

    </div>
  )
}
