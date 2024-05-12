import React from "react";
import styled from "styled-components";
const Section = styled.div`
position: fixed;
z-index: 20;
border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 1400px) and (min-width: 769px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  @media only screen and (max-width: 1400px) and (min-width: 769px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// const Icon = styled.img`
//   width: 20px;
//   cursor: pointer;
//   display: none;
//   @media only screen and (max-width: 768px) {
//     display: block;
//   }
// `;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #e42898;
  }
`;

const Hamburger = styled.span`
  position: absolute;
  display: none;
	width: 35px;
	background-color: #e42898;
	height: 7px;
	transition: all .3s ease;
  opacity: 1;
  &:nth-child(1){
    top:2px;
  }
  &:nth-child(2){
    top:12px;
  }
  &:nth-child(3){
    top: 22px;
  }
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Hamburger_div = styled.div`
  display: flex;
	flex-direction: column;
	gap: 5px;
	position: relative;
	height: 35px;
	width: 35px;

  @media only screen and (max-width: 768px) {
    display: block;
  }
  &:hover{
    ${Hamburger}:nth-child(1)  {
      top: 12px;
      transform:rotate(45deg);
      background-color: #5107a5;
    }
    
  }
  &:hover{
    ${Hamburger}:nth-child(2) {
      opacity: 0;
    }
    
  }
  &:hover{
    ${Hamburger}:nth-child(3) {
      top: 12px;
      transform:rotate(-45deg);
      background-color: #5107a5;
    }
    
  }
`;

/*       --------------------------------Mobile ---------------------------                            */
const Mobile_Container = styled.div`
  display: none;
  background-image:url('./img/bg.jpeg');
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Mobile_Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 60px;
  margin-bottom: 70px;
`;

const Mobile_Logo = styled.img`
  height: 150px;
  width: 200px;
`;

const Mobile_ListItem = styled.li`
  cursor: pointer;
  &:hover{
    color:#e42898;
  }
`;
const Mobile_List = styled.ul`
width: 100%;
flex-direction: column;
justify-content: center;
font-size: 30px;
align-items: center;
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  display: flex;
  gap: 40px;
  list-style: none;


`;

const Mobile_Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;


const Mobile_Button = styled.button`
  width: 150px;
  padding: 20px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #e42898;
    color: salmon;
  }
`;


/* --------------------------End Mobile -----------------------------------*/
const HandleClickWorks = (id) => {
  document.getElementById(id).scrollIntoView();
}
const HandleClickWorksMobile = (id) => {
  const navBar = document.getElementById('mobileNavBar');
  navBar.style.display = 'none';
  document.getElementById(id).scrollIntoView();
}
const handleHamburger =() => {
  const navBar =  document.getElementById('mobileNavBar');

  navBar.style.display = (navBar.style.display === 'none' || navBar.style.display === '') ? 'block' : 'none';
}
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.avif" />
          <List>
            <ListItem onClick ={() => HandleClickWorks('Home')}>Home</ListItem>
            <ListItem onClick ={() => HandleClickWorks('about')}>About</ListItem>
            <ListItem onClick ={() => HandleClickWorks('works')}>Works</ListItem>
            <ListItem onClick ={() => HandleClickWorks('contact')}>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Hamburger_div id='hamburger'onClick={handleHamburger}>
            <Hamburger></Hamburger>
            <Hamburger></Hamburger>
            <Hamburger></Hamburger>
          </Hamburger_div>
          <Button>Hire Now</Button>
        </Icons>
      </Container>

      <Mobile_Container id ='mobileNavBar'>
         <Mobile_Links>
          <Mobile_Logo src="./img/logo.avif" />
          <Mobile_List>
            <Mobile_ListItem onClick ={() => HandleClickWorksMobile('Home')}>Home</Mobile_ListItem>
            <Mobile_ListItem onClick ={() => HandleClickWorksMobile('about')}>About</Mobile_ListItem>
            <Mobile_ListItem onClick ={() => HandleClickWorksMobile('works')}>Works</Mobile_ListItem>
            <Mobile_ListItem onClick ={() => HandleClickWorksMobile('contact')}>Contact</Mobile_ListItem>
          </Mobile_List>
        </Mobile_Links>
        <Mobile_Icons>
          <Mobile_Button>Hire Now</Mobile_Button>
        </Mobile_Icons> 
      </Mobile_Container>

    </Section>
  );
};

export default Navbar;