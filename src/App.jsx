import { BrowserRouter } from "react-router-dom"

import { Navbar, Hero, About, Experience, Tech, Certificate, Project, Contact } from './components'

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div>
        <About />
        <Experience />
        <Tech />
        <Certificate />
        <Project />
      </div>
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
