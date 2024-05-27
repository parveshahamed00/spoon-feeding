import React from 'react'
import { FaBars, FaBookOpen,FaQuestionCircle,FaCalendarCheck } from "react-icons/fa";
const SideBar = () => {
  return (
    <>
        <div className='side-bar'>
            <ul>
                <a href='#'>
                   <li>
                    <span className='icon'><FaBars/></span> 
                     All Subjects
                   </li>
                </a>
                <hr/> 
                <a  href='#'>
                   <li>
                   <span className='icon'><FaBookOpen/></span>
                    Books
                   </li>
                </a>
                <hr/> 
                <a  href='#'>
                   <li>
                   <span className='icon'><FaQuestionCircle/></span>
                    PYQS
                   </li>
                </a>
                <hr/> 
                <a  href='#'>
                   <li>
                   <span className='icon'><FaCalendarCheck/></span>
                    Calendar
                   </li>
                </a>
            </ul>
           
        </div>
    </>
  )
}

export default SideBar