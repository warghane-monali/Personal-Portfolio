import { About } from "./components/about/About"
import { Experience } from "./components/experience/Experience"
import { Footer } from "./components/footer/Footer"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import { Projects } from "./components/projects/Projects"

function App() {

  return (
    <>
      <div className='bg-[#171d32] w-full h-auto overflow-hidden'>
        <Navbar/>
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
      </div>
    </>
  )
}

export default App
