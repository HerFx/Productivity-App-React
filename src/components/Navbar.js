import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'><i class="fa-solid fa-house"></i></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/todo' className='nav-links'><i class="fa-solid fa-list"></i></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/notes' className='nav-links'><i class="fa-solid fa-copy"></i></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/train' className='nav-links'><i class="fa-solid fa-dumbbell"></i></Link>
                    </li>
                </ul>
                <Link to='/profile' className="navbar-profile">
                    <div className='profile-img'></div>
                </Link>
            </div>
        </nav>
    </>
  )
}
