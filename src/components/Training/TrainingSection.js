import React from 'react'
import Header from '../Header'
import TrainingCard from './TrainingCard'


export default function TrainingSection() {
  return (
    <div className='box'>
        <Header title='YOUR DAILY TRAINING' subtitle='Move around a bit'/>       
        <TrainingCard />      
    </div>
  )
}

