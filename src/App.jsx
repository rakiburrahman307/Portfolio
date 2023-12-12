import About from "./Components/About/About"
import Qualifications from "./Components/Qualificatios/Qualification"
import Contact from "./Components/Contact/Contact"
import Experiences from "./Components/Experiences/Experiences"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import NavBer from "./Components/Navber/NavBer"
import Projects from "./Components/Projects/Projects"
import SocialLinks from "./Components/SocialLinks/SocialLinks"


function App() {
 

  return (
    <>
     <NavBer></NavBer>
     <Home></Home>
    <Projects></Projects>
    <Experiences></Experiences>
    <Qualifications></Qualifications>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>
     <SocialLinks></SocialLinks>
    </>
  )
}

export default App
