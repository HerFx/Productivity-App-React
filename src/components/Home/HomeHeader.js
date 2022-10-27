import React from 'react'
import TodayDate from '../TodayDate';



export default function HomeHeader() {
    const date = new Date()
    let hello_text = '';
    if(date.getHours() < 12) {
        hello_text='GOOD MORNING';
    }else if(date.getHours() < 18) {
        hello_text='GOOD AFTERNOON';
    }else {     
        hello_text='GOOD EVENING';
    }

  return (
    <div className='home-header'>
    <h1><i class="far fa-smile"></i>HI, {hello_text}</h1>
        <TodayDate /> 
    </div>
  )
}
