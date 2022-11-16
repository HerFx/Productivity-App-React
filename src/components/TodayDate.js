import React from 'react'

export default function TodayDate() {
 
 const today = new Date();
 const date =  today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear(); //Ustawienie daty w formacie DD/MM/YYYY

    return (
    <h3>TODAY IS {date}</h3>
  )
}
