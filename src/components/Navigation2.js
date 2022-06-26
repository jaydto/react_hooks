import React from 'react'
import "./navigation2.css"
import { Link } from 'react-router-dom'

const Navigation2 = () => {
  return (
    <div className='Navigation'>
        <ul className="nav__items">
            <li className="items"><Link to="/home">Home</Link> </li>
            <li className="items"><Link to="/home">Messages</Link></li>
            <li className="items"><Link to="/work">Books</Link></li>
            <li className="items"><Link to="/home">recommended Books</Link></li>
            <li className="items"><Link to="/home">Currently Issued Books</Link></li>
            <li className="items"><Link to="/home">Logout</Link></li>

        </ul>
        
    </div>
  )
}

export default Navigation2