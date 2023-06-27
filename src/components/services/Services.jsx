import { useState } from "react"
import "./services.css"

const Services = () => {
   const [toggleState, setToggleState] = useState(0);

   const toggleTab = (index) => {
      setToggleState(index)
   }
  return (
   <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
         <div className="services__content">
            <div>
               <i className="uil uil-web-grid services__icons"></i>
               <h3 className="services__title">Web <br /> Developement</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
               View More {" "} <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
               <div className="services__modal-content">
                  <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                  <h3 className="services__modal-title">Web Development</h3>
                  <p className="services__modal-description">Service with more than 2 years experience. Providing quality work to clients and companies.</p>

                  <ul className="services__modal-services grid">
                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Web Development
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Network Engineering
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           I develop user interface
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Data Analysis
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="services__content">
            <div>
               <i className="uil uil-setting services__icons"></i>
               <h3 className="services__title">Network <br /> Engineer</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
               View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
               <div className="services__modal-content">
                  <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                  <h3 className="services__modal-title">Network Engineer</h3>
                  <p className="services__modal-description">Service with more than 2 years experience. Providing quality work to clients and companies.</p>

                  <ul className="services__modal-services grid">
                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Web Development
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Network Engineering
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           I develop user interface
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Data Analysis
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="services__content">
            <div>
               <i className="uil uil-edit services__icons"></i>
               <h3 className="services__title">BI <br /> Engineer</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
               View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
               <div className="services__modal-content">
                  <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                  <h3 className="services__modal-title">Data Analysis</h3>
                  <p className="services__modal-description">Service with more than 2 years experience. Providing quality work to clients and companies.</p>

                  <ul className="services__modal-services grid">
                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Web Development
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Network Engineering
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           I develop user interface
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Data Analysis
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="services__content">
            <div>
               <i className="uil uil-edit services__icons"></i>
               <h3 className="services__title">3D <br /> Animation</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(4)}>
               View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
               <div className="services__modal-content">
                  <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                  <h3 className="services__modal-title">3D Animation</h3>
                  <p className="services__modal-description">Service with more than 2 years experience. Providing quality work to clients and companies.</p>

                  <ul className="services__modal-services grid">
                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Web Development
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Network Engineering
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           I develop user interface
                        </p>
                     </li>

                     <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           Data Analysis
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
   )
}

export default Services