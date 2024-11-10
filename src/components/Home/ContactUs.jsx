import React, { useEffect } from 'react';
import './contact.css';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  useEffect(() => {
    const inputs = document.querySelectorAll('.input');

    function focusFunc(event) {
      const parent = event.target.parentNode;
      parent.classList.add('focus');
    }

    function blurFunc(event) {
      const parent = event.target.parentNode;
      if (event.target.value === '') {
        parent.classList.remove('focus');
      }
    }
    inputs.forEach((input) => {
      input.addEventListener('focus', focusFunc);
      input.addEventListener('blur', blurFunc);
    });

    // Cleanup: Remove event listeners when component unmounts
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('focus', focusFunc);
        input.removeEventListener('blur', blurFunc);
      });
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
        <div className="heading text-center py-4 heading_fontFamily">Contact us</div>
      <div className="_container">

        <span className="big-circle" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text-secondary">Thanks for reaching out! We’ll get back to you soon. In the meantime, feel free to explore our latest articles or connect with us on social media. Happy reading!</p>
            <div className="info">
              <div className="information">
                <i className="fas fa-map-marker-alt" /> &nbsp; &nbsp;
                <p className='m-0'>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <i className="fas fa-envelope" /> &nbsp; &nbsp;
                <p className='m-0'>infosyedalimoiz99@gmail.com</p>
              </div>
              <div className="information">
                <i className="fas fa-phone" />&nbsp;&nbsp;
                <p className='m-0'>+92-3112084701</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <Link to={'/'}>
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to={'/'}>
                  <i className="fab fa-twitter" />
                </Link>
                <Link to={'/'}>
                  <i className="fab fa-instagram" />
                </Link>
                <Link to={'/'}>
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" id="name" className="input" />
                <label htmlFor={'username'}>Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" id="email" className="input" />
                <label htmlFor={'email'}>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" id="phone" className="input" />
                <label htmlFor={'phone'}>Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea id="message" className="input" defaultValue={''} />
                <label htmlFor={'message'}>Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="_btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
