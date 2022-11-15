import React from 'react'

export default function ToDoForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
            <input value={props.value} type='text' placeholder='Add a new task' onChange={props.onChange}/>
            <button type='submit'>Add</button>
            <button onClick={props.onClick}>Clear</button>
    </form>
  )
}
