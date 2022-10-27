import React from 'react'


export default function ToDoBox(props) {


  return (
    <div className='todo-items'>

        <ul>
            <li onClick={props.handleClick} key={props.index}>
                {props.item}
            </li>
        </ul>
    </div>
  )
}
