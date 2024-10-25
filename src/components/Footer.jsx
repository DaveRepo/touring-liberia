import React from 'react'
import { pageLinks, socialLinks } from '../data'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {socialLinks.map((link) => {
          const {id, href, icon} = link;
          return(
            <li key={id}>
                 <a href={href} 
                  target="_blank" 
                  className='footer-icon'
                  rel="noreferrer">
                  <i className={icon}></i>
                 </a>
           </li>

          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Rhotel travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer