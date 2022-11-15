import React from 'react'


export default function NotoForm(props) {
  return (
    <form className='note-form'>
            <input className='note-form-input' value={props.valueinput}  type='text' placeholder='Note Title' onChange={props.onChangeTitle}/>
            <textarea className='note-form-text' value={props.valuetext}  type='text' placeholder='Note Content' onChange={props.onChangeContent}/>
            <button className="note-form-button" type='submit' onClick={props.onClick}>Add</button>
        </form>
  )
}
