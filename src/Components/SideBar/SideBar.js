import React from 'react'
import { FaBars, FaBookOpen,FaQuestionCircle,FaCalendarCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import cal from '../Books/PDF/academiccalendar_2023_2024.pdf'

const SideBar = () => {
  return (
    <>
        <div className='side-bar'>
            <ul>
                <a href='#'>
                  <Link to='/'>
                   <li>
                    <span className='icon'><FaBars/></span> 
                     All Subjects
                   </li>
                   </Link>
                </a>
                <hr/> 
                <a  href='#'>
                  <Link to='booksection'> <li>
                   <span className='icon'><FaBookOpen/></span>
                    Books
                   </li></Link>
                  
                </a>
                <hr/> 
                <a  href='#'>
                  <Link to='pyqssection'>
                   <li>
                   <span className='icon'><FaQuestionCircle/></span>
                    PYQS
                   </li>
                   </Link>
                </a>
                <hr/> 
                <a  href='#'>
                   <li >
                     <a href={cal} target="_blank">
                   <span className='icon'><FaCalendarCheck/></span>
                    Calendar
                    </a>
                   </li>
                </a>
            </ul>
           
        </div>
    </>
  )
}

export default SideBar