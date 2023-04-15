import React from 'react';
import Navbar from './components/Navbar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import ToDo from './components/pages/ToDo';
import Profile from './components/pages/Profile';
import Train from './components/pages/Training';
import Notes from './components/pages/Notes';


function App() {
  return (
   <div className='wrapper'>
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/todo' element={<ToDo/>}/>
      <Route path='/notes' element={<Notes/>}/>
      <Route path='/train' element={<Train/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
   </Router>
   
   </div>
  );
}

export default App;
