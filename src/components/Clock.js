import React from 'react'
import {useState, useEffect} from 'react'

export default function Clock() {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
   
    useEffect(() => {
        setInterval(() => {
            const time = new Date().toLocaleTimeString();
            setCurrentTime(time);
        }, 1000);
    },[])

  return (
    <div className='clock'>
    <h1>{currentTime}</h1>
    </div>
  )
}
