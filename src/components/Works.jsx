import React from 'react'

import './styled/Works.css'

const HandleReadMore = () => {
  alert('will be soon....')
}
const Works = () => {
  return (
    <section class="work container section" id='works'>
      <h1 class="work__title">Projects</h1>

    <div class="work__container">
            <h3 class="work__project-title">Pirate King</h3>
            <div class="work__img-wrapper work__image1">
              <img
              class="lazy loading img"
              src="./img/projects/PiratesKing.PNG"
              data-src="./img/projects/PiratesKing.PNG" 
              alt="Pirate King Image"/>
            </div>
            <div class="work__project work__content1">
              <h3 class="work__project-subtitle">Pirate King</h3>
              <p class="work__project-description1">Online game I made both the server and the game.</p>
              <p class="work__project-description2">In the game you have different types of players you can upgrade the players to get stronger and progress in the story, you can add friends to fight against them, add the captain of your friends to help you win the game of the story.</p>
              <a class="work__project-btn" onClick={HandleReadMore}>+ Read more</a>
              
            </div>  


            <h3 class="work__project-title">Ball Slice</h3>
          <div class="work__img-wrapper work__image2">
            <img
             class="lazy loading img"
             src="./img/projects/BallSlice.JPG"
             data-src="./img/projects/BallSlice.JPG" 
             alt="Ball Slice Image"/>
          </div>
          <div class="work__project work__content2">
            <h3 class="work__project-subtitle">Ball Slice</h3>
            <p class="work__project-description1">ball slice is an infinity game for android and ios that gets harder and harder all 5 levels have a boss.</p>
            <p class="work__project-description2">you need to slice the balls before they get red and you can upgrade your damage buy different knives or balls and The more stages it goes through the more backgrounds will open up.</p>
            <a class="btn work__project-btn" onClick={HandleReadMore}>+ Read more</a>
           
          </div>  

          <h3 class="work__project-title">Fourm</h3>
          <div class="work__img-wrapper work__image3">
            <img 
            class="lazy loading img"
            src="./img/projects/Fourm.jpg"
           data-src="./img/projects/Fourm.jpg" 
           alt="Fourm Image"/>
          </div>
          <div class="work__project work__content3">
            <h3 class="work__project-subtitle">Fourm</h3>
            <p class="work__project-description1">ecure forum You can view people's posts to give them likes and also comments You can post posts You can change a banner photo and a profile picture to another picture and even to a sliding picture!.</p>
            <p class="work__project-description2">Everything is saved on the server, all the posts and all the pictures on the server's computer.</p>
            <a class="btn work__project-btn" onClick={HandleReadMore}>+ Read more</a>
           
          </div>  

          <h3 class="work__project-title">Army Project</h3>
          <div class="work__img-wrapper work__image4">
            <img 
            class="lazy loading img"
            src="./img/projects/army.jpg"
           data-src="./img/projects/army.jpg" 
           alt="Army Project Image"/>
          </div>
          <div class="work__project work__content4">
            <h3 class="work__project-subtitle">Army Project</h3>
            <p class="work__project-description1">I served in the army in a clinic and they would put us outside to check on soldiers during the Corona period, so I made an app where you write down what appointment you have, then you wait outside and receive a text message that your appointment is coming.</p>
            <p class="work__project-description2">And there is another app for the doctor that he sees everyone who is waiting and has the next button in line and whoever is next receives a text message.</p>
            <a class="btn work__project-btn" onClick={HandleReadMore}>+ Read more</a>
            
          </div>         

          <h3 class="work__project-title">DBZ Online</h3>
          <div class="work__img-wrapper work__image5">
            <img
             class="lazy loading img"
             src="./img/projects/DBZ.png"
             data-src="./img/projects/DBZ.png" 
             alt="DBZ Online Image"/>
          </div>
          <div class="work__project work__content5">
            <h3 class="work__project-subtitle">DBZ Online</h3>
            <p class="work__project-description1">the first multiplayer game I made in unity network for PC, android, and ios games with a lot of options.</p>
            <p class="work__project-description2">I made for this game website that you can register and login into the website and see all your items and players and your clans on the website.</p>
            <a class="btn work__project-btn" onClick={HandleReadMore}>+ Read more</a>
           
          </div>  

          <h3 class="work__project-title">General Image Detection</h3>
          <div class="work__img-wrapper work__image6">
            <img 
            class="lazy loading img"
            src="./img/projects/GeneralImageDetection.jpeg"
           data-src="./img/projects/GeneralImageDetection.jpeg" 
           alt="General Image Detection Image"/>
          </div>
          <div class="work__project work__content6">
            <h3 class="work__project-subtitle">General Image Detection</h3>
            <p class="work__project-description1">Detects a variety of common objects and the location and generates regions of an image that may contain that object.</p>
            <p class="work__project-description2">You can sort and search the results by percentage or by name.</p>
            <a class="btn work__project-btn" onClick={HandleReadMore}>+ Read more</a>
           
          </div> 


      </div>
      </section>       
  )
}

export default Works