import React from 'react'
import Header from '../Header'
import Note from './Note'
import {useState} from 'react'
import useLocalStorage from '../useLocalStorage'
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
  } //Ustawienie tytułu notatki

  function changeContent(event) {
    const {value} = event.target
    setInput(prevInput => {
      return {
        title: prevInput.title,
        content: value
      }
    })
  } //Ustawienie treści notatki

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
  } //Dodanie notatki do tablicy

  function deleteNote (id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id
      })
    })
  }//Usuwanie notatki z tablicy
  




  return (
    <div className='box'>
        <Header title='NOTES' subtitle='Make some notes'/>
        <NotoForm valueinput={input.title} valuetext={input.content} onChangeTitle={changeTitle} onChangeContent={changeContent} onClick={handleClick}/>
          <div className='note'>
            {notes.map((noteItem, index) => {
              return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/> //Wyświetlenie notatek
            })}
            
          </div>
    </div>
  )
}

