import React from 'react';
import './Works.css';
import Portfolio1 from '../../assets/html.png';
import Portfolio2 from '../../assets/css.png';
import Portfolio3 from '../../assets/javascript.png';
import Portfolio4 from '../../assets/react.png';
import Portfolio5 from '../../assets/node.png';
import Portfolio6 from '../../assets/java.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
        </span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
            
        </div>
        <bt className="worksBtn">See more</bt>
    </section>
  )
}

export default Works