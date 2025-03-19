import React, { useRef } from 'react';
import './Contact.css';
import gitHubIcon  from '../../assets/gitHub_icon.png';
import linkedInIcon from '../../assets/linkedIn_Icon.png';
import leetCodeIcon from '../../assets/leetcode_Icon.png';
import geeksForGeeksIcon from '../../assets/geeksforgeeks_Icon.png';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_aeknl8e', 'template_b6s79jm', form.current, 'nTqxjWbzNOY2LWrAu')
      .then(
        () => {
          e.target.reset();
          alert("Email sent successFully");
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactDesc'>Please fill out the forms below to discuss any work opportunites
            </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                     <a href="https://github.com/perinbasaravanan-06"><img src={gitHubIcon} alt="github Icon" className="link" /></a> 
                   <a href=""><img src={linkedInIcon} alt="linkedIn Icon" className="link" /></a> 
                    <a href=""><img src={leetCodeIcon} alt="leetCode Icon" className="link" /></a>
                    <a href=""><img src={geeksForGeeksIcon} alt="geeksForGeeks Icon" className="link" /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact