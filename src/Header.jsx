import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export const Header = () => {
  const [menuOpen,setMenuOpen]=useState(false);


  return (
    <nav style={{zIndex:2}}>
        <Link to={"/"} className='title'><strong>VIKAS</strong></Link>
        <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""} style={{marginBottom:'0'}}>
            <li><HashLink to={"/#home"}>Home</HashLink></li>
            <li><HashLink to={"/#About"}>About</HashLink></li>
            <li><HashLink to={"/#Skills"}>Skills</HashLink></li>
            <li><HashLink to={"/#Projects"}>Projects</HashLink></li>
            <li><HashLink to={"/#Contact"}>Contact</HashLink></li>
        </ul>
    </nav>
  )
}

export default Header;
