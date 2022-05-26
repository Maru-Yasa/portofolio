import styles from '../styles/Home.module.css'
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
import Head from 'next/head'
import { HeadComponent } from '../components/HeadComponent'

export default function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (<>
      <HeadComponent />
      <div className='my-bg-blue-darken'>
      
        <NavbarComponent></NavbarComponent>
        <Container className='my-bg-blue-darken' id='profile'>
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
      </div>
    </>
    )
}
