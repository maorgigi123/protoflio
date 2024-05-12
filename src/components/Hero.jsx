import React, { Suspense, useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
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

  @media only screen and (max-width: 1450px) {
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

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 1450px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  max-width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #e42898;
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

let size = 2.4
const Hero = () => {
  if(window.innerWidth > 769)
  {
    size = 2.4
  }
  else{
    size = 1.4
  }
  

  return (
    <Section id='Home'>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src='./public/img/line.png'/>
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>
              We enjoy creating websites and games at the highest level.
          </Desc>
          <Button onClick = {() => {document.getElementById('about').scrollIntoView()}}>Learn More</Button>
        </Left>
        <Right>
        <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              
              <Sphere args={[1, 100, 200]} scale={size}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img draggable="false" src='./public/img/moon.png'/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero