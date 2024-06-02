import React from 'react'
import styled from 'styled-components';


const Section = styled.div`
  overflow: hidden;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1450px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1450px) {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 840px;
  @media only screen and (max-width: 1450px) {
    max-width: 100%;
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 1450px) {
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 3;
  width: 840px;
  position: relative;
  @media only screen and (max-width: 1450px) {
    flex: 1;
    width: 100vw;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 1450px) {
    padding: 20px;
    text-align: center;
  }
`;
const Img = styled.img`
  max-width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    max-width: 300px;
    height: 300px;
  }
  @media only screen and (max-width: 1450px) and (min-width: 769px) {
    max-width: 600px;
    height: 600px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;
const BigLine = styled.img`
  height: 5px;
  width: 100%;
`;

const BigLineAnimated = styled.img`
  height: 5px;
  width: 0%;
  justify-content: center;

  @media only screen and (max-width: 1450px){
    animation: line 3s ease infinite;
  }

  
  

  @keyframes line {
    to{
      width: 100%;
    }
  }
`;


const Subtitle = styled.h2`
  color: #da4ea2;
`;

const ContainerAboutList = styled.div`
 display: flex;
 gap:40px;
 max-width: 100%;
 @media only screen and (max-width: 1450px) {
   margin-left: 50px;
   gap:0px;
  }
 
`;

const AboutUl = styled.ul`
  display: flex;
	flex-direction: column;
  width: 250px;
  gap:1em;
	padding-left: 1em;
	flex: 1;
  margin-left: 10px;


`;
const AboutList = styled.li`
font-size: 1.5rem;
  ::before{
    content: '';
	margin-left: 1em;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  margin-top: 5px;
  font-weight: 600;
  max-width: 150px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #e42898;
  }
  a{
    text-decoration: none; 
    color: lightgray;
  }
`;

const Who = () => {
  return (
    <Section id ='about'>
      <Container>
        <Left>
        <Title>About</Title>
          <Desc>Hello there! I'm Maor, a <strong>Fullstack & Game Developer</strong> . I wake up in the morning, grab a cup of timmies coffee, open up my laptop and build things that live on the web all day, everyday.</Desc>
          <Desc>People who know me say I'm obsessed, that's fair, I am very driven and love learning new things.</Desc>
          <Desc>I recently created a Mobile Game called <a>Ball Slice </a> to Google Store and App Store</Desc>
          <BigLine src='./img/line.avif'/>
          <WhatWeDo>
            <Line src='./img/line.avif'/>
            <Subtitle>Technologies</Subtitle>
          </WhatWeDo>
          <ContainerAboutList>
             <AboutUl>
              <AboutList>JavaScript</AboutList>
              <AboutList>CSS</AboutList>
              <AboutList>HTML</AboutList>
              <AboutList>Rest Api</AboutList>
            </AboutUl>
            <AboutUl>
              <AboutList >ReactJS</AboutList>
              <AboutList>Express</AboutList>
              <AboutList>Unity</AboutList>
              <AboutList>MongoDB</AboutList>
            </AboutUl>
            <AboutUl>
              <AboutList >c#</AboutList>
              <AboutList>Sql</AboutList>
              <AboutList>php</AboutList>
              <AboutList>Python</AboutList>
            </AboutUl>
          </ContainerAboutList>
          <BigLineAnimated src='./img/line.avif'/>
          <Button><a href='./Resume.docx' ownload="maor_gigi_cv">Download Cv</a></Button>
        </Left>
        <Right>
          <Img 
            src ="/img/moon.avif"
            data-src="/img/moon.avif" 
            alt="Profile picture"/>
        </Right>
      </Container>
    </Section>
 
  )
}

export default Who