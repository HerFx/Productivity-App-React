import React from 'react'
import Header from '../Header'
import Note from './Note'
import {useState} from 'react'

export default function NotesSection() {


  const [input, setInput] = useState({
    title: "",
    content: ""
  })
 
  const [notes, setNotes] = useState([])

  function changeTitle(event) {
    const {value} = event.target
    setInput(prevInput => {
      return {
        title: value,
        content: prevInput.content
      }
    })
  }

  function changeContent(event) {
    const {value} = event.target
    setInput(prevInput => {
      return {
        title: prevInput.title,
        content: value
      }
    })
  }

  function handleClick(event) {
    setNotes(prevNotes => {
      return [...prevNotes, input]
    })
    setInput({
      title: "",
      content: ""
    })
    event.preventDefault()
  }
  




  return (
    <div className='box'>
        <Header title='NOTES' subtitle='Make some notes'/>
          <form>
            <input value={notes.title}  type='text' placeholder='Add a new task' onChange={changeTitle}/>
            <textarea value={notes.content}  type='text' placeholder='Add a new task' onChange={changeContent}/>
            <button type='submit' onClick={handleClick}>Add</button>
          </form>
          <div className='note'>
            {notes.map((noteItem, index) => {
              return <Note key={index} title={noteItem.title} content={noteItem.content}/>
            })}
            
          </div>
    </div>
  )
}

