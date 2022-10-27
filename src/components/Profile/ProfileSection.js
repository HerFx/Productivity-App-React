import React from 'react'
import Card from './Card'
import Header from '../Header'

export default function ProfileSection() {
  return (
    <div className='box'>
      <div className='profile-img-section'></div>
      <Header title='About'/>
      <div className='profile-info-section'>
        <Card title='Days in a row' description='48' />
        <Card title='Raiting' description='99+' />
        <Card title='Level' description='36' />
      </div>
    </div>
  )
}
