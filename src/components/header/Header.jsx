import { useState } from "react"
import "./header.css"

const Header = () => {

   // Show Menu 
   const [toggle, showMenu] = useState(false)
  return (
    <header className="header">
      <nav className="nav container">
         <a href="index.html" className="nav__logo">Adeleye.dev</a>

         <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
               <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                     <i className="uil uil-estate nav__icon"></i> Home
                  </a>
               </li>

               <li className="nav__item">
                  <a href="#about" className="nav__link">
                     <i className="uil uil-user nav__icon"></i> About
                  </a>
               </li>

               <li className="nav__item">
                  <a href="#stack" className="nav__link">
                     <i className="uil uil-file nav__icon"></i> Stack
                  </a>
               </li>

               <li className="nav__item">
                  <a href="#services" className="nav__link">
                     <i className="uil uil-briefcase nav__icon"></i> Services
                  </a>
               </li>

               <li className="nav__item">
                  <a href="#portfolio" className="nav__link">
                     <i className="uil uil-scenery nav__icon"></i> Portfolio
                  </a>
               </li>

               <li className="nav__item">
                  <a href="#contact" className="nav__link">
                     <i className="uil uil-message nav__icon"></i> Contact  
                  </a>
               </li>
            </ul>

            <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
         </div>

         <div className="nav-toggle">
            <i className="uil uil-apps" onClick={() => showMenu(!toggle)}></i>
         </div>
      </nav>
    </header>
  )
}

export default Header