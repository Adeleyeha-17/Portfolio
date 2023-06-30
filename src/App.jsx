
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
     <Header />

    <main className="main">
      <Home />

      <About />

      <Skills />

      <Services />
      
      <Portfolio />

      <Contact />
    </main>
     
    </>
  )
}

export default App
