import "./footer.css"

const Footer = () => {
  return (
   <footer className="footer">
      <div className="footer__container container">
         <h1 className="footer__title">Adeleye</h1>

         <ul className="footer__list">
            <li>
               <a href="#about" className="footer__link">About</a>
            </li>

            <li>
               <a href="#portfolio" className="footer__link">Projects</a>
            </li>

            <li>
               <a href="#services" className="footer__link">Services</a>
            </li>
         </ul>

         <div className="footer__social">
         <a href="https://twitter.com" className="footer__social-link" target="_blank" rel="noreferrer">
       <i className="uil uil-twitter twitter"></i>      
       </a>
 
       <a href="https://linkedin.com/in/ade-ha17" className="footer__social-link" target="_blank" rel="noreferrer">
       <i className="uil uil-linkedin linkedin"></i>      
       </a>
 
       <a href="https://github.com/Adeleyeha-17" className="footer__social-link" target="_blank" rel="noreferrer">
           <i className="uil uil-github-alt"></i>
       </a>
         </div>

         <span className="footer__copy">&#169; All rights reserved</span>
      </div>
   </footer>
   )
}

export default Footer