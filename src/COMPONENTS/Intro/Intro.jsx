import React from 'react';
import {Link} from 'react-scroll';
import './Intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Perinba Saravanan</span><br />Website designer</span>
            <p className="introPara">I am a skilled designer with experience in creating visually appealing and user friendly websites.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" />Hire ME</button></Link>
        </div>
        <img src={bg} alt="" className='bg'/>
    </section>
  )
}

export default Intro;