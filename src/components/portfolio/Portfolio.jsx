/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react"
import "./portfolio.css"
import Atlas from "../../assets/atlas.jpeg"
import Leadwinn from "../../assets/leadwinn.png"
import Eduford from "../../assets/university.jpeg"
import Game from "../../assets/game.jpeg"
import Realtor from "../../assets/realtor.png"
import Vivid from "../../assets/vivid.png"

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
        </div>

        <div className="portfolio__sections">
          <div className={toggle === 1 ? "portfolio__content-active" : "portfolio__content"}>
          <div className="portfolio__data">
              <div className="img__container">
                <img src={Leadwinn} alt="" className="img" />
              </div>

              <div >
                <div>
                  <h3 className="portfolio__title"> Leadwinn Academy
                  </h3>

                  <p className="text">Leadwinn Academy is a tech-focused educational platform that aims to empower students and tech enthusiasts with comprehensive knowledge and skills in various areas of technology. The platform covers a wide range of topics, starting from the fundamentals of programming and web development to advanced and cutting-edge technologies. </p>
                  <div className="gap">
                    <i className='bx bxl-tailwind-css tailwind'></i>
                    <i className='bx bxl-react react'></i>
                    <i className='bx bxl-typescript typescript'></i>
                    <i className='bx bxl-firebase firebase'></i>
                  </div>

                  <div className="link">
                    <a href="https://github.com/Adeleyeha-17/Leadwinn-Academy" className="portfolio__subtitle" target="_blank">Code  <i className="uil uil-github-alt"></i> </a>
                    <a href="https://leadwinnacademy.netlify.app/" className="portfolio__subtitle" target="_blank">Live Demo <i className="uil uil-expand-from-corner icon"></i></a>
                  </div>
                </div>

              </div>

            </div>
            
            <div className="portfolio__data">
              <div className="img__container">

                <img src={Realtor} alt="" className="img" />
              </div>

              <div>
                <h3 className="portfolio__title"> Realtor App
                </h3>

                <p className="text">Welcome to the Realtor App – Your Ultimate Real Estate Solution!

Discover the easiest way to sell your property or find your dream home with our user-friendly Realtor App website. Our platform empowers users to effortlessly upload pictures of their houses, creating a visually appealing listing that attracts potential buyers.</p>
                <div className="gap">
                    <i className='bx bxl-tailwind-css tailwind'></i>
                <i className='bx bxl-react react'></i>
                  <i className='bx bxl-javascript javascript'></i>
                    <i className='bx bxl-firebase firebase'></i>

                </div>

                <div className="link">
                  <a href="https://github.com/Adeleyeha-17/Realtor-App" className="portfolio__subtitle" target="_blank">Code  <i className="uil uil-github-alt"></i> </a>
                  <a href="https://realtorappreact.netlify.app" className="portfolio__subtitle" target="_blank">Live Demo <i className="uil uil-expand-from-corner icon"></i></a>
                </div>

              </div>

              {/* <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div> */}

            </div>

            
            <div className="portfolio__data">
              <div className="img__container">

                <img src={Vivid} alt="" className="img" />
              </div>

              <div>
                <h3 className="portfolio__title"> VividVisage
                </h3>

                <p className="text">Welcome to VividVisage – Your Exquisite Beauty Haven!

Indulge in the world of beauty and self-expression with VividVisage, your premier destination for luxurious cosmetics and skincare essentials. At VividVisage, we believe that your face tells a unique story, and we are here to provide you with the finest tools to express yourself through the art of makeup</p>
                <div className="gap">
                    <i className='bx bxl-tailwind-css tailwind'></i>
                <i className='bx bxl-react react'></i>
                  <i className='bx bxl-javascript javascript'></i>
                </div>

                <div className="link">
                  <a href="https://github.com/Adeleyeha-17/E-commerce" className="portfolio__subtitle" target="_blank">Code  <i className="uil uil-github-alt"></i> </a>
                  <a href="https://vividvisage.netlify.app" className="portfolio__subtitle" target="_blank">Live Demo <i className="uil uil-expand-from-corner icon"></i></a>
                </div>

              </div>

              {/* <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div> */}

            </div>
            
            <div className="portfolio__data">
              <div className="img__container">
                <img src={Atlas} alt="" className="img" />
              </div>

              <div>
                <h3 className="portfolio__title"> ATLAS BANKING
                </h3>

                <p className="text">Atlas Banking is your trusted online bank, simplifying your financial journey with convenience and security. From managing your accounts to making seamless transactions, Atlas provide a user-friendly platform that puts user in control of their finances.</p>
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

            </div>


          

            <div className="portfolio__data">
              <div className="img__container">
                <img src={Eduford} alt="" className="img" />
              </div>

              <div>
                <h3 className="portfolio__title"> EDUFORD
                </h3>

                <p className="text">Eduford website provides a comprehensive platform for students, faculty, and staff to access academic resources, connect with peers, and stay informed about campus events. From exploring degree programs to accessing course materials, Eduford is designed to streamline your educational journey.</p>
                <div className="link">
                  <i className='bx bxl-css3 css'></i>
                  <i className='bx bxl-react react'></i>
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



              <div className="img__container">
                <img src={Game} alt="" className="img" />
              </div>

              <div>
                <div>
                  <h3 className="portfolio__title"> GAME WEBSITE
                  </h3>

                  <p className="text">Gamestore is your ultimate destination for all things gaming. Our website is a haven for gamers, offering a vast collection of the latest and greatest video games, consoles, and accessories. Browse through our extensive catalog, find exclusive deals, and stay updated on upcoming releases. Whether you are a casual gamer or a hardcore enthusiast, GameHub is your one-stop shop for immersive gaming experiences. </p>
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

            </div>


          </div>


          <div className={toggle === 2 ? "portfolio__content-active" : "portfolio__content"}>
            <h2 className="portfolio__subtitle"> NETWORKING PROJECTS</h2>
            <div className="net">

              <div className="portfolio__data">

                <div>

                  <img src="./networking1.jpg" className="net__img" />

                </div>


              </div>

              <div className="portfolio__data">

                <div>

                  <img src="./networking2.jpg" className="net__img" />

                </div>


              </div>


              <div className="portfolio__data">

                <div>

                  <img src="./networking3.jpg" className="net__img" />

                </div>


              </div>

              <div className="portfolio__data">

                <div>

                  <img src="./networking4.jpg" className="net__img" />

                </div>


              </div>

              <div className="portfolio__data">

                <div>

                  <img src="./networking5.jpg" className="net__img" />

                </div>


              </div>

              <div className="portfolio__data">

                <div>

                  <img src="./networking6.jpg" className="net__img" />

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