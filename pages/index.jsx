import styles from '../styles/Home.module.css'
import NavbarComponent from '../components/NavbarComponent'
import Profile from '../components/Profile'
import { Container, ProgressBar } from 'react-bootstrap'
import LangSkills from '../components/LangSkills'

export default function Home() {

  return (
    <div className='my-bg-blue-darken'>
    
      <NavbarComponent></NavbarComponent>
      <Container className='my-bg-blue'>
        <Profile></Profile>   
        <LangSkills></LangSkills>
      </Container>




    </div>
  )
}
