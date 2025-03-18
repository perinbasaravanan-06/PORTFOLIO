import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link className="destopMenuListItem">HOME</Link>
            <Link className="destopMenuListItem">ABOUT</Link>
            <Link className="destopMenuListItem">PORTFOLIO</Link>
            <Link className="destopMenuListItem">RESUME</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" />
            CONTACT ME
        </button>
    </nav>
  )
}

export default Navbar