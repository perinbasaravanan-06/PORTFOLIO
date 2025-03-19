import React, { useState } from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset ={-60} duration ={500} className="destopMenuListItem">HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset ={-60} duration ={500}  className="destopMenuListItem">ABOUT</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset ={-60} duration ={500} className="destopMenuListItem">PORTFOLIO</Link>
            <a href ='/7376221EC256-PERINBA SARAVANAN K.pdf' download  className="destopMenuListItem">RESUME</a>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />
            CONTACT ME
        </button>
        
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style = {{display :showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset ={-60} duration ={500} className="listItem" onClick={()=>setShowMenu(false)}>HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset ={-60} duration ={500}  className="listItem" onClick={()=>setShowMenu(false)}>ABOUT</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset ={-60} duration ={500} className="listItem" onClick={()=>setShowMenu(false)}>PORTFOLIO</Link>
            <a href ='/7376221EC256-PERINBA SARAVANAN K.pdf' download  className="listItem" onClick={()=>setShowMenu(false)}>RESUME</a>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset ={-60} duration ={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
        
    </nav>
  )
}

export default Navbar