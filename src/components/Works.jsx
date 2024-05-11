import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  overflow: hidden;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div `
  width: 1400px;
  background-color: red;

  @media only screen and (max-width: 1450px) {
    width: 80%;
  }
`



const Works = () => {
  return (
    <Section>
      <Container>
        {/* do here projects and images in grid layout */}
      <h1>hello</h1>
      </Container>
    </Section>
  )
}

export default Works