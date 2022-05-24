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

export default function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (<>
      <Head>
        <meta charset="utf-8"/>
        <title>Maru Yasa | Portofolio</title>
        <meta name="description" content="HI There! 👋, I'm Maru Yasa, and this is my portofolio website" />
        <meta name="image" content="https://media-exp1.licdn.com/dms/image/C4E03AQHoYXy-4o1BFA/profile-displayphoto-shrink_200_200/0/1645504624862?e=1658966400&v=beta&t=B1rbCKZsTkyAuxwLo1s80kPaONn5_CxWh6SVzq9ceNw" />
        <meta itemProp="name" content="Maru Yasa" />
        <meta itemProp="description" content="HI There! 👋, I'm Maru Yasa, and this is my portofolio website" />
        <meta itemProp="image" content="https://media-exp1.licdn.com/dms/image/C4E03AQHoYXy-4o1BFA/profile-displayphoto-shrink_200_200/0/1645504624862?e=1658966400&v=beta&t=B1rbCKZsTkyAuxwLo1s80kPaONn5_CxWh6SVzq9ceNw" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Maru Yasa" />
        <meta name="twitter:description" content="HI There! 👋, I'm Maru Yasa, and this is my portofolio website" />
        <meta name="og:title" content="Maru Yasa" />
        <meta name="og:description" content="HI There! 👋, I'm Maru Yasa, and this is my portofolio website" />
        <meta name="og:image" content="https://media-exp1.licdn.com/dms/image/C4E03AQHoYXy-4o1BFA/profile-displayphoto-shrink_200_200/0/1645504624862?e=1658966400&v=beta&t=B1rbCKZsTkyAuxwLo1s80kPaONn5_CxWh6SVzq9ceNw" />
        <meta name="og:site_name" content="Maru Yasa's Portofolio" />
        <meta name="og:type" content="website" />
      </Head>
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
