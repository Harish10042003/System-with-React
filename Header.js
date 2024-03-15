import React from "react";
import {BsPersonCircle, BsSearch, BsJustify} from "react-icons/bs"
import {MdEmail, MdNotifications} from "react-icons/md"
import './App.css';




function Header({OpenSidebar}){

    return(
      <header className="header">
       <div className="menu-icon">
         <BsJustify className="icon" onClick={OpenSidebar} />
       </div>
       <div className="header-left">
         <BsSearch className="icon"/> 
       </div>
       <div className="header-right">
         <MdNotifications className='icon' />
         <MdEmail className="icon" />
         <BsPersonCircle className="icon" />
       </div>
      </header>
    );
}

export default Header