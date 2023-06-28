/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react"
import "./portfolio.css"
import Atlas from "../../assets/atlas.jpeg"
import Quantum from "../../assets/fitness.png"
import Eduford from "../../assets/university.jpeg"
import Game from "../../assets/game.jpeg"
import Playstation from "../../assets/playstation.jpeg"

const Portfolio = () => {

  const [toggle, setToggle] = useState(1)

  const toggleTab = (index) => {
    setToggle(index)
  }
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title about">Portfolio</h2>

      <div className="portfolio__container container">
         <div className="portfolio__tabs">
            <div className="portfolio__button portfolio-active button--flex" onClick={() => toggleTab(1)}>
            <i className="uil uil-bag"></i> {"  "} Web Development
            </div>

            <div className="portfolio__button portfolio-active button--flex" onClick={() => toggleTab(2)}>
            <i className="uil uil-setting"></i> {"  "} Networking
            </div>

            <div className="portfolio__button portfolio-active button--flex" onClick={() => toggleTab(3)}>
            <i className="uil uil-chart"></i> {"  "} Business Intelligence
            </div>
         </div>

         <div className="portfolio__sections">
          <div className={toggle === 1 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>
            <div className="portfolio__data ">
            <div>
                <img src={Atlas} alt="" className="img"/>
                </div>

              <div>
                <h3 className="portfolio__title"> ATLAS BANKING
                </h3>

                <p>lalalaalalla</p>
                <div className="gap">
                <i className='bx bxl-html5 html'></i>                
                <i className='bx bxl-css3 css'></i>
                                <i className='bx bxl-javascript javascript'></i>
                </div>

                <div className="link">
                <a href="https://github.com/Adeleyeha-17/Atlas-Banking" className="portfolio__subtitle" target="_blank">Code  <i className="uil uil-github-alt"></i> </a>
                <a href="https://atlasbanking.netlify.app/" className="portfolio__subtitle" target="_blank">Live Demo <i className="uil uil-expand-from-corner icon"></i></a>
                </div>
                
              </div>

              {/* <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div> */}
              
            </div>
            
            
              <div className="portfolio__data">
              
{/* 
                <div>
                  <span className="portfolio__rounder"></span>
                  <span className="portfolio__line"></span>
                </div> */}

              <div >
                <div>
                <h3 className="portfolio__title"> QUANTUM FITNESS
                </h3>

                <p>lalalalalal</p>
                <div className="link">
                <i className='bx bxl-react react'></i>                
                <i className='bx bxl-css3 css'></i>
                </div>
                
                <div className="link">
                <a href="https://github.com/Adeleyeha-17/Fitness-Gym" className="portfolio__subtitle" target="_blank">Code  <i className="uil uil-github-alt"></i> </a>
                <a href="https://quantum-fitness-club.netlify.app/" className="portfolio__subtitle" target="_blank">Live Demo <i className="uil uil-expand-from-corner icon"></i></a>
                </div>
                </div>
                
              </div>

              

              <img src={Quantum} alt="" className="img"/>

            </div>

            <div className="portfolio__data ">
            <div>
                <img src={Eduford} alt="" className="img"/>
                </div>

              <div>
                <h3 className="portfolio__title"> EDUFORD
                </h3>

                <p>lalalaalalla</p>
                <div className="link">
                <i className='bx bxl-react react'></i>                
                <i className='bx bxl-css3 css'></i>
                </div>

                <div className="link">
                <a href="https://github.com/Adeleyeha-17/University-website" className="portfolio__subtitle" target="_blank">Code  <i className="uil uil-github-alt"></i> </a>
                <a href="https://university-website-react.netlify.app" className="portfolio__subtitle" target="_blank">Live Demo <i className="uil uil-expand-from-corner icon"></i></a>
                </div>
                
              </div>

              {/* <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div> */}
              
            </div>
            
            
            <div className="portfolio__data">
              
              {/* 
                              <div>
                                <span className="portfolio__rounder"></span>
                                <span className="portfolio__line"></span>
                              </div> */}
              
                            <div >
                              <div>
                              <h3 className="portfolio__title"> GAME WEBSITE
                              </h3>
              
                              <p>lalalalalal</p>
                              <div className="gap">
                              <i className='bx bxl-html5 html'></i>                
                              <i className='bx bxl-css3 css'></i>
                              <i className='bx bxl-javascript javascript'></i>

                              </div>
                              
                              <div className="link">
                              <a href="https://github.com/Adeleyeha-17/Game-Store" className="portfolio__subtitle" target="_blank">Code  <i className="uil uil-github-alt"></i> </a>
                              <a href="https://the-gamestore.netlify.app" className="portfolio__subtitle" target="_blank">Live Demo <i className="uil uil-expand-from-corner icon"></i></a>
                              </div>
                              </div>
                              
                            </div>
              
                            
              
                            <img src={Game} alt="" className="img"/>
              
                          </div>
              

                          <div className="portfolio__data ">
            <div>
                <img src={Playstation} alt="" className="img"/>
                </div>

              <div>
                <h3 className="portfolio__title"> PLAYSTATION WEBSITE
                </h3>

                <p>lalalaalalla</p>
                <div className="link">
                <i className='bx bxl-html html'></i>                
                <i className='bx bxl-css3 css'></i>
                <i className='bx bxl-javascript javascript'></i>
                </div>

                <div className="link">
                <a href="https://github.com/Adeleyeha-17/Playstation-Website" className="portfolio__subtitle" target="_blank">Code  <i className="uil uil-github-alt"></i> </a>
                <a href="https://playstation-website.netlify.app" className="portfolio__subtitle" target="_blank">Live Demo <i className="uil uil-expand-from-corner icon"></i></a>
                </div>
                
              </div>

              {/* <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div> */}
              
            </div>
            </div>


            <div className={toggle === 2 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>
            <div className="portfolio__data">

              <div>
                <h3 className="portfolio__title"> ATLAS BANKING
                </h3>
                <span className="portfolio__subtitle">Spain - Institure</span>
                <div className="portfolio__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div>
              
            </div>
            
            
              <div className="portfolio__data">
              <div></div>

                <div>
                  <span className="portfolio__rounder"></span>
                  <span className="portfolio__line"></span>
                </div>

              <div>
                <h3 className="portfolio__title"> QuantumFitness
                </h3>

                <p>lalalaalal</p>
                <span className="portfolio__subtitle">Spain - Institure</span>
                <div className="portfolio__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>
              
              
            </div>

            <div className="portfolio__data">

              <div>
                <h3 className="portfolio__title"> Web Design
                </h3>
                <span className="portfolio__subtitle">Spain - Institure</span>
                <div className="portfolio__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div>
              
            </div>
            
            
              <div className="portfolio__data">
              <div></div>

                <div>
                  <span className="portfolio__rounder"></span>
                  <span className="portfolio__line"></span>
                </div>

              <div>
                <h3 className="portfolio__title"> Web Design
                </h3>
                <span className="portfolio__subtitle">Spain - Institure</span>
                <div className="portfolio__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>
              
            </div>
              
            </div>
          </div>
         </div>
      

    </section>
  )
}

export default Portfolio