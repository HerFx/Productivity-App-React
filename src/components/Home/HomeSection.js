import React from 'react';
import './HomeSection.css';
import HomeHeader from './HomeHeader';
import Clock from '../Clock';
import Weather from '../Weather';

export default function Home() {
  return (
    <div className='home'>
    <HomeHeader />
    <Clock />
    <Weather />   
    </div>
  )
}
