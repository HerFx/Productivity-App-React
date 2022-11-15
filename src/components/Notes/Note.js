import React from 'react'

export default function Note(props) {

  return (
    <div className='note-box'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>  
        <button className='noteDelete' onClick={() => {
          props.onDelete(props.id)
        }
      }>Delete</button>
    </div>
  )
}
