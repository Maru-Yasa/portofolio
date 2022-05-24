import styles from '../styles/Home.module.css'
import NavbarComponent from '../components/NavbarComponent'
import Profile from '../components/Profile'
import { Container, ProgressBar } from 'react-bootstrap'
import LangSkills from '../components/LangSkills'
import FrameSkills from '../components/FrameSkills'
import ProjectComponent from '../components/ProjectComponent'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className='my-bg-blue-darken'>
    
      <NavbarComponent></NavbarComponent>
      <Container className='my-bg-blue-darken' id='profile'>
        <Profile />   
        <LangSkills />
        <FrameSkills />
        <ProjectComponent />
        <Footer />
      </Container>




    </div>
  )
}
