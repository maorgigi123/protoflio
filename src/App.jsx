import Hero from './components/Hero'
import Contact from './components/Contact'
import Who from './components/Who'
import Works from './components/Works'
import styled from 'styled-components'
import './App.css'

const Container = styled.div `
  height:100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color:white;
  background: url('./img/bg.avif');
  &::-webkit-scrollbar{
    display: none;
  }

  @media only screen and (max-width: 768px) {
    scroll-snap-type:none;
  }
`

function App() {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>

  )
  
}

export default App