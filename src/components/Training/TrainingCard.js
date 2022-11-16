import React from 'react'
import { useState } from 'react';
import trainingData from '../../data/trainingData'; //Import danych z pliku trainingData.js

export default function TrainingCard() {

    const [showMore, setShowMore] = useState(false);

    const handleShowMore = (index) => {
      if(showMore === index) {
        return setShowMore(false);
      }
      setShowMore(index);
    } //Pokazanie więcej informacji o treningu

  return (
    <div className='card-container'>
      {trainingData.map(({name, description, rep}, index) => (
        <div className='card-item'>
            <div className='card-title' onClick={() => handleShowMore(index)}> 
              <div className='card-content'>
                <h4>{rep}x</h4>
                <h4>{name}</h4>
              </div>
              <div className='showMore'>{showMore === index ? '-' : '+'}</div>
            </div>
       {showMore === index && <div className="card-description">{description}</div> 
       //Wyświetlenie dodatkowych informacji o treningu
       } 
        </div>
      ))} 
      </div>
    
  )
}

