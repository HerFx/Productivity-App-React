import React from 'react'
import Header from '../Header'
import Note from './Note'
import {useState} from 'react'
import useLocalStorage from './useLocalStorageNote'
import NotoForm from './NotoForm'

export default function NotesSection() {


  const [input, setInput] = useState({
    title: "",
    content: ""
  })
 
  const [notes, setNotes] = useLocalStorage("note-items", [])

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
    if(input.title !== '' && input.content !== ''){
    setNotes(prevNotes => {
      return [...prevNotes, input]
    })
    setInput({
      title:  "",
      content: ""
    })
  } 
  event.preventDefault()
  }

  function deleteNote (id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id
      })
    })
  }
  




  return (
    <div className='box'>
        <Header title='NOTES' subtitle='Make some notes'/>
        <NotoForm valueinput={input.title} valuetext={input.content} onChangeTitle={changeTitle} onChangeContent={changeContent} onClick={handleClick}/>
          <div className='note'>
            {notes.map((noteItem, index) => {
              return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
            })}
            
          </div>
    </div>
  )
}

