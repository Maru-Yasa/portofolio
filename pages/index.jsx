import NavbarComponent from '../components/NavbarComponent'
import Profile from '../components/Profile'
import { Container, ProgressBar } from 'react-bootstrap'
import LangSkills from '../components/LangSkills'
import FrameSkills from '../components/FrameSkills'
import ProjectComponent from '../components/ProjectComponent'
import Footer from '../components/Footer'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import { HeadComponent } from '../components/HeadComponent'

export default function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (<>
      
        <Container id='profile'>
          <Profile />   
          <div data-aos="flip-left" className="">
            <LangSkills />
          </div>
          <div data-aos="flip-right" className="">
            <FrameSkills />
          </div>
          <ProjectComponent />
          <Footer />
        </Container>
    </>
    )
}
