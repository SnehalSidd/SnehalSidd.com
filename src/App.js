import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter';

function App() {
  const [text]= useTypewriter({
    words: ['Public Speaker',' Web Developer',' You Tuber',' An Artist'],
    loop:{},
  });

  const fun = (() => {
    let el = document.getElementById('baxa');
    console.log("This is design cards!", el.childNodes[1], el.childNodes[2], el.childNodes[3], el.childNodes[4],el.childNodes[5],el.childNodes[6],el.childNodes[7], el.childNodes[8], el.childNodes[9], el.childNodes[10],el.childNodes[11],el.childNodes[0]);
    // el.style.display = 'none';
    el.childNodes[1].style.display = 'flex'
    el.childNodes[2].style.display = 'flex'
    el.childNodes[3].style.display = 'flex'
    el.childNodes[4].style.display = 'flex'
    el.childNodes[5].style.display = 'flex'
    el.childNodes[6].style.display = 'none'
    el.childNodes[7].style.display = 'none'
    el.childNodes[8].style.display = 'none'
    el.childNodes[9].style.display = 'none'
    el.childNodes[10].style.display ='none'
    el.childNodes[11].style.display ='none'
    el.childNodes[0].style.display = 'flex'
  })

  const fun1 = (() => {
    let el = document.getElementById('baxa');
    console.log("This is design cards!", el.childNodes[4], el.childNodes[8], el.childNodes[9], el.childNodes[11]);
    // el.style.display = 'none';
    el.childNodes[1].style.display = 'none'
    el.childNodes[2].style.display = 'flex'
    el.childNodes[3].style.display = 'flex'
    el.childNodes[4].style.display ='none'
    el.childNodes[5].style.display = 'none'
    el.childNodes[6].style.display = 'none'
    el.childNodes[7].style.display = 'flex'
    el.childNodes[8].style.display = 'none'
    el.childNodes[9].style.display = 'none'
    el.childNodes[10].style.display = 'flex'
    el.childNodes[11].style.display = 'none'
    el.childNodes[0].style.display = 'none'
  })
  const fun2 = (() => {
    let el = document.getElementById('baxa');
    console.log("This is design cards!", el.childNodes[1], el.childNodes[2], el.childNodes[3], el.childNodes[4],el.childNodes[5],el.childNodes[6],el.childNodes[7], el.childNodes[8], el.childNodes[9], el.childNodes[10],el.childNodes[11],el.childNodes[0]);
    // el.style.display = 'none';

    el.childNodes[1].style.display = 'none'
    el.childNodes[2].style.display = 'none'
    el.childNodes[3].style.display = 'none'
    el.childNodes[4].style.display = 'flex'
    el.childNodes[5].style.display = 'none'
    el.childNodes[6].style.display = 'none'
    el.childNodes[7].style.display = 'none'
    el.childNodes[8].style.display = 'flex'
    el.childNodes[9].style.display = 'flex'
    el.childNodes[10].style.display ='none'
    el.childNodes[11].style.display ='flex'
    el.childNodes[0].style.display = 'none'
  })

  const fun3 = (() => {
    let el = document.getElementById('baxa');
    console.log("This is design cards!", el.childNodes[1], el.childNodes[2], el.childNodes[3], el.childNodes[4],el.childNodes[5],el.childNodes[6],el.childNodes[7], el.childNodes[8], el.childNodes[9], el.childNodes[10],el.childNodes[11],el.childNodes[0]);
    // el.style.display = 'none';

    el.childNodes[1].style.display = 'flex'
    el.childNodes[2].style.display = 'none'
    el.childNodes[3].style.display = 'none'
    el.childNodes[4].style.display = 'none'
    el.childNodes[5].style.display = 'flex'
    el.childNodes[6].style.display = 'flex'
    el.childNodes[7].style.display = 'none'
    el.childNodes[8].style.display = 'none'
    el.childNodes[9].style.display = 'none'
    el.childNodes[10].style.display ='none'
    el.childNodes[11].style.display ='none'
    el.childNodes[0].style.display = 'flex'
  })

  const fun4 = () => {
    let el = document.getElementById('baxekabaxa');
  
    // Find the button elements
    let loadButton = el.querySelector('button.load');
    let showLessButton = el.querySelector('button.show-less');
    let baxaChild = el.querySelector('.baxa');
  
    // Find all project elements and set their display to flex
    for (let i = 1; i <= 12; i++) {
      let project = baxaChild.querySelector(`.project${i}`);
      if (project) {
        project.style.display = 'flex';
      }
    }
  
    // Manipulate button styles
    loadButton.style.display = 'none'; 
    showLessButton.style.display = 'flex'; 
  };
  
  const fun5 = () => {
    let el = document.getElementById('baxekabaxa');
  
    // Find the button elements
    let loadButton = el.querySelector('button.load');
    let showLessButton = el.querySelector('button.show-less');
    let baxaChild = el.querySelector('.baxa');
  
    // Find all project elements and set their display to flex
    for (let i = 7; i <= 12; i++) {
      let project = baxaChild.querySelector(`.project${i}`);
      if (project) {
        project.style.display = 'none';
      }
    }
  
    // Manipulate button styles
    loadButton.style.display = 'flex'; 
    showLessButton.style.display = 'none'; 
  };

  const fun8 = () => {
    let el = document.getElementById('baxekabaxa');
  
    // Find the button elements
    let loadButton = el.querySelector('button.load');
    let showLessButton = el.querySelector('button.show-less');  
    loadButton.style.display = 'flex'; 
    showLessButton.style.display = 'none'; 
  };


  const fun6 = () => {
    let el = document.getElementById('baxekabaxa');
    console.log("This is design cards!", el.childNodes);
  
    // Find the 'bottons' div and set its display to none
    let bottonsDiv = el.querySelector('#bottons');
    if (bottonsDiv) {
      bottonsDiv.style.display = 'none';
    }
  };

  const fun7 = () => {
    let el = document.getElementById('baxekabaxa');
    console.log("This is design cards!", el.childNodes);
  
    // Find the 'bottons' div and set its display to none
    let bottonsDiv = el.querySelector('#bottons');
    if (bottonsDiv) {
      bottonsDiv.style.display = 'flex';
    }
  };

  const handleDesignClick = () => {
    fun1();
    fun6();
  };

  const handleMarketingClick = () => {
    fun2();
    fun6();
  };

  const handlePhotographyClick = () => {
    fun3();
    fun6();
  };

  const allclick = () => {
    fun();
    fun7();
    fun8();
  };
  
  


  
  


  return (
  
    <div className="container">
      {/* <video className="background-video" autoPlay loop muted>
        <source src="./Plexus Numbers Free White Background Videos, Motion Graphics, No Copyright   All Background Videos.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="navbar">
        <h1>SNEHAL SIDDHARTH</h1>
        <ul className="lasthid">
          <li>
            <a className="navlin" href="#">
              About Me
            </a>
          </li>
          <li>
            <a className="navlin" href="#">
              Photos
            </a>
          </li>
          <li>
            <a className="navlin" href="#">
              Videos
            </a>
          </li>
          <li>
            <a className="navlin" href="#">
              Lifestyle
            </a>
          </li>
          <li>
            <a className="navlin" href="#">
              Blogs
            </a>
          </li>
          
        </ul>
      </div>
      <a href="#popdown" className="menu-icon" >
        <img id="photo" src="./list (1).png" alt="" />
      </a>

      <div className="scroll-menu" id="popdown">
        <ul>
          <li>
            <a target="_blank" href="https://www.youtube.com/">
              About Me
            </a>
          </li>
          <li>
            <a href="#">Photos</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Lifestyle</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <a href="#popup" className="up">
            <img src="./up-arrow.png" alt="" />
          </a>
        </ul>
      </div>
      <div className="gaur">
        <div className="left">
          <h3>WELCOME!</h3>
          <div className="yo">
            <div className="box">
              <div className="fix">I Am </div>
              <h1 className="change">
                {/* <ul className="dynamic-texts">
                  <li className="list">
                    <span>Public Speaker</span>
                  </li>
                  <li className="list">
                    <span>You Tuber</span>
                  </li>
                  <li className="list">
                    <span>Web Developer</span>
                  </li>
                  <li className="list">
                    <span>An Artist</span>
                  </li>
                </ul> */}

                <div className="hid">
                  <span style={{fontWeight: 'bold', color:'#feb300'}}>
                    {text}

                  </span>
                  <Cursor/>
                  
                </div>




              </h1>
            </div>
            <p className="Para">
              <h4>Snehal Siddharth</h4>
              "I am a dedicated Computer Engineering student at Thapar Institute of Technology in Patiala, India. Passionate about web development, I am currently enhancing my skills in HTML and CSS. Alongside my web development journey, I have a strong foundation in Java, Python, and C programming languages. I am eager to leverage my technical expertise and creativity to contribute to innovative projects and solutions."
               <span>
               Contact: 
               <span className="number">
               +91 8900000000
               </span>
               </span>
               <span className="icons">
                <a target="_blank" href="https://x.com/"><img src="./371907030_TWITTER_ICON_TRANSPARENT_400.gif" alt="" /></a>
                <a target="_blank" href="https://www.instagram.com/"><img src="./371907300_INSTAGRAM_ICON_TRANSPARENT_400.gif" alt="" /></a>
                <a target="_blank" href="https://www.facebook.com/"><img src="./371907490_FACEBOOK_ICON_TRANSPARENT_400.gif" alt="" /></a>
                <a target="_blank" href="https://www.linkedin.com/feed/"><img src="./372102050_LINKEDIN_ICON_TRANSPARENT_1080.gif" alt="" /></a>
               </span>
            </p>


          </div>
        </div>
        <div className="right">
          <img
            src="./WhatsApp Image 2024-06-25 at 14.08.33_cdad99ef.jpg"
            alt=""
          />
        </div>

      </div>
        <div className="next">
         <span>
         <h1 >My&nbsp;</h1>
         <h1 className="my">Services</h1>
          </span>
          <p>
          "My Services cater to a range of industries, offering expertise in Web Development,
          Photography, Web Design, App Development, Video Editing, and SEO."
          </p>

          <div className="grid">
            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Github"><path fill="#feb300" d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" className="color5c6bc0 svgShape"></path></svg>

            <h3>WEB DEVELOPMENT</h3>
            <p>
            Crafting interactive and dynamic websites using cutting-edge technologies and frameworks to bring ideas to life.
            </p>
            </div>
            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="camera"><path fill="#feb300" d="M24,18a8,8,0,1,0,8,8A8,8,0,0,0,24,18Zm-3.2,5.6A4,4,0,0,0,20,26v1H18V26a5.93,5.93,0,0,1,1.2-3.6l.61-.8,1.59,1.21ZM25,22H24a3.84,3.84,0,0,0-.79.08l-1,.21-.43-1.95,1-.22A5.77,5.77,0,0,1,24,20h1Z" className="color192340 svgShape"></path><path fill="#feb300" d="M41,12H35.54L33,8.23A5,5,0,0,0,28.86,6H19.14A5,5,0,0,0,15,8.23L12.46,12H7a5,5,0,0,0-5,5V37a5,5,0,0,0,5,5H41a5,5,0,0,0,5-5V17A5,5,0,0,0,41,12ZM24,36A10,10,0,1,1,34,26,10,10,0,0,1,24,36Z" className="color192340 svgShape"></path></svg>
            <h3>PHOTOGRAPHY</h3>
            <p>
            Capturing moments and stories
through the lens, transforming ordinary
scenes into captivating visual
narratives.
            </p>
            </div>
            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g data-name="21-web designer"><path d="M43 48H5a5.006 5.006 0 0 1-5-5 1 1 0 0 1 1-1h46a1 1 0 0 1 1 1 5.006 5.006 0 0 1-5 5zM2.171 44A3.006 3.006 0 0 0 5 46h38a3.006 3.006 0 0 0 2.829-2z"/><path d="M19 43h10v2H19zM46 43h-2V14a1 1 0 0 0-1-1h-4v-2h4a3 3 0 0 1 3 3zM4 43H2V14a3 3 0 0 1 3-3h4v2H5a1 1 0 0 0-1 1z"/><path d="M6 36h37v2H6z"/><path d="M10 37H8V3a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v3h-2V3a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1z"/><path d="M9 8h27v2H9z"/><path d="M26.648 25.176a1 1 0 0 1-.707-.293l-2.824-2.823a1 1 0 0 1 0-1.414L42.884.878a3.068 3.068 0 0 1 4.239 0 3 3 0 0 1 0 4.238L27.355 24.883a1 1 0 0 1-.707.293zm-1.41-3.823 1.41 1.409L45.708 3.7a1 1 0 0 0 0-1.41 1.019 1.019 0 0 0-1.409 0z"/><path d="M21 28a1 1 0 0 1-.895-1.447l2.824-5.648 1.789.895-1.482 2.964 2.964-1.483.9 1.789-5.653 2.83A1 1 0 0 1 21 28zM37.237 7.94l1.414-1.415 2.824 2.824-1.414 1.414zM38 12h2v25h-2zM12 4h2v2h-2zM16 4h2v2h-2zM20 4h2v2h-2zM17 22a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="m19.293 19.707 1.414-1.414 3 3-1.413 1.415z"/><path d="M32 32H17a1 1 0 0 1-1-1V21h2v9h11.586l-4.295-4.3 1.414-1.414 6 6A1 1 0 0 1 32 32zM34 30h2v2h-2zM12 30h2v2h-2z"/></g></svg>
            <h3>WEB DESIGN</h3>
            <p>
            Designing aesthetically pleasing and
user-friendly interfaces, blending
creativity with functionality to enhance
digital experiences.
            </p>
            </div>
            <div className="card">
            <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" id="apple-logo">
            <path fill="#feb300" d="M318.7 268.9c-1.5-35.8 15.9-62.9 49.1-82.8-18.1-26.3-44.9-41.1-78.5-41.6-32.9-.5-69.1 19.4-86.7 19.4-17.7 0-45.3-18.9-74.5-18.4-38.3.6-73.8 22.1-93.5 56.1-40 70-10.1 173.7 28.8 230.8 19.1 28.6 41.7 60.6 71.6 59.5 28.6-1.2 39.4-18.5 73.8-18.5 34.3 0 44.1 18.5 74.6 18 30.7-.5 50-28.3 68.7-57.1 21.6-32.1 30.4-63.1 30.8-64.8-0.7-.3-58.9-22.6-59.7-89.7zm-55.3-157.7c17.1-20.6 28.6-49.3 25.4-77.8-24.6 1-54.6 15.9-72.2 36.4-16.8 19.5-30.8 48.6-26.9 76.8 27.5 2.1 56.8-14.4 73.7-35.4z"/>
            </svg>
            <h3>APP DEVELOPMENT</h3>
            <p>
            Building robust and scalable mobile applications tailored to meet client needs, integrating seamless functionality with intuitive user interfaces for optimal user experiences.
            </p>

            </div>
            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g data-name="9-Video"><path fill="#feb300" d="M29 27H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h26a2.916 2.916 0 0 1 3 3v21a3 3 0 0 1-3 3zm-.012-25H3a1 1 0 0 0-1 1v21a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V3a.919.919 0 0 0-1.012-1z"/><path fill="#feb300" d="M10 32a1 1 0 0 1 0-2c1.914 0 2-3.96 2-4a1 1 0 0 1 2 0c0 2.229-.842 6-4 6zM22 32c-3.158 0-4-3.771-4-6a1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .04.066 4 2 4a1 1 0 0 1 0 2z"/><path fill="#feb300" d="M24 32H8a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z"/><path fill="#feb300" d="M22 20H6a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zM13 14a1 1 0 0 1-1-1V7a1 1 0 0 1 1.447-.895l6 3a1 1 0 0 1 0 1.79l-6 3A1 1 0 0 1 13 14zm1-5.382v2.764L16.764 10z"/></g></svg>
            <h3></h3>
            <h3>VIDEO EDITING</h3>
            <p>
              Transforming raw footage into polished videos, employing creative editing techniques to convey messages effectively, whether for marketing campaigns, events, or personal projects.
            </p>

            </div>
            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
            <path fill="#feb300" d="M15 112.75h98A10.762 10.762 0 0 0 123.75 102V25a9.761 9.761 0 0 0-9.75-9.75H14A9.761 9.761 0 0 0 4.25 25v77A10.762 10.762 0 0 0 15 112.75zm98-3.5H15A7.258 7.258 0 0 1 7.75 102V40.183h112.5V102a7.258 7.258 0 0 1-7.25 7.25zM120.25 25v11.683H52.888L61.37 18.75H114a6.257 6.257 0 0 1 6.25 6.25zM14 18.75h43.5l-8.484 17.933H7.75V25A6.257 6.257 0 0 1 14 18.75z"/>
            <path fill="#feb300" d="M21.57 33.466a5.75 5.75 0 1 0-5.75-5.75 5.756 5.756 0 0 0 5.75 5.75zm0-8a2.25 2.25 0 1 1-2.25 2.25 2.253 2.253 0 0 1 2.25-2.25zM37.626 33.466a5.75 5.75 0 1 0-5.75-5.75 5.756 5.756 0 0 0 5.75 5.75zm0-8a2.25 2.25 0 1 1-2.25 2.25 2.253 2.253 0 0 1 2.25-2.25zM67.522 29.466h44.745a1.75 1.75 0 0 0 0-3.5H67.522a1.75 1.75 0 0 0 0 3.5zM44.656 64.835a8.19 8.19 0 0 1 1.523-4.776 1.75 1.75 0 1 0-2.852-2.03 11.754 11.754 0 0 0 .173 13.848 1.75 1.75 0 1 0 2.8-2.1 8.178 8.178 0 0 1-1.644-4.942z"/>
            <path fill="#feb300" d="M78.262 79.471a1.8 1.8 0 0 0-2.475 0l-2.42 2.421-5.334-5.334a19.133 19.133 0 1 0-2.475 2.475l5.335 5.334-2.421 2.421a1.749 1.749 0 0 0 0 2.475l13.46 13.459a6.923 6.923 0 1 0 9.79-9.791zM37.75 64.353a15.6 15.6 0 1 1 26.68 10.974c-.018.017-.039.029-.057.047s-.03.038-.046.056A15.593 15.593 0 0 1 37.75 64.353zm51.5 35.894a3.506 3.506 0 0 1-4.842 0L72.184 88.025 74.6 85.6l2.42-2.42 12.227 12.226a3.427 3.427 0 0 1 .001 4.841z"/>
            </svg>
            <h3>SEO</h3>
            <p>
            Optimizing websites to improve search engine rankings and increase organic traffic, employing strategic keyword research, content optimization, and technical enhancements to enhance online visibility and drive business growth.
            </p>
            </div>
          </div>
        </div>
        <div className="aage" id="aage">
        <span>
         <h1 >My&nbsp;</h1>
         <h1 className="my" id="my">Work</h1>
          </span>
          <p>
          "My work is a fusion of creativity and technical expertise to craft captivating digital experiences."
          </p>
          <div className="buttons">
            <button id="showButton" onClick={allclick} className="btn" >All</button>
            <button id="hideButton1" onClick={ handleDesignClick} className="btn" >Design</button>
            <button id="hideButton2" onClick={handleMarketingClick} className="btn" >Marketing</button>
            <button id="hideButton3" onClick={handlePhotographyClick} className="btn" >Photography</button>
          </div>
          <div className="baxekabaxa" id="baxekabaxa">

          <div className="baxa" id="baxa">
            <div className="project1  pro photography"><div className="overlay">
                <span className="title">
                  <span>
                <p>Photography</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project2  pro photography"><div className="overlay">
            <span className="title">
                  <span>
                <p>Photography</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project3  pro design"><div className="overlay">
            <span className="title">
                  <span>
                <p>Design</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project4  pro design"><div className="overlay">
            <span className="title">
                  <span>
                <p>Design</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project5  pro marketing"><div className="overlay">
            <span className="title">
                  <span>
                <p>Marketing</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project6  pro photography"><div className="overlay">
            <span className="title">
                  <span>
                <p>Photography</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project7  pro photography"><div className="overlay">
            <span className="title">
                  <span>
                <p>Photography</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project8  pro design"><div className="overlay">
            <span className="title">
                  <span>
                <p>Design</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project9  pro marketing"><div className="overlay">
            <span className="title">
                  <span>
                <p>Marketing</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project10 pro marketing"><div className="overlay">
            <span className="title">
                  <span>
                <p>Marketing</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project11 pro design"><div className="overlay">
            <span className="title">
                  <span>
                <p>Design</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div></div>
            <div className="project12 pro marketing"><div className="overlay">
            <span className="title">
                  <span>
                <p>Marketing</p>
                <h1>Creative Web Design.</h1>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                
                </span>
            </div>

            
            </div>
          </div>
          <div className="bottons" id="bottons">
            <button className="load" onClick={fun4}>
              <a className="link" href="#bottons">Load More</a>
            </button>
            <button className="show-less" onClick={fun5} >
              <a className="link" href="#bottons">Show Less</a>
            </button>

            </div>
          </div>


        </div>

        <div className="more-next">
          <div className="sect">
            <div className="svg-sect">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 14-3 1 1-3 7-7 2 2z"/></svg>
            </div>
            <div className="adhokshaja">
            <h3>2000 - 2005</h3>
            <h2>Computer science</h2>
            <p>
            "Computer science graduate proficient in algorithms,data structures, and software development methodologies."
            </p>

            </div>


          </div>
          <div className="sect">
          <div className="svg-sect">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 14-3 1 1-3 7-7 2 2z"/></svg>
            </div>
            <div className="adhokshaja">
            <h3>2006-2009</h3>
            <h2>Computer Engineering</h2>
            <p>
            "Anchored in the realms of computation, adept at algorithmic thinking and computational problem-solving techniques."
            </p>

            </div>
          </div>
          <div className="sect">
          <div className="svg-sect">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 14-3 1 1-3 7-7 2 2z"/></svg>
            </div>
            <div className="adhokshaja">
            <h3>2010-2013</h3>
            <h2>Master In Computer</h2>
            <p>
            "Grounded in the principles of computer science,equipped with problem-solving prowess and a passion for innovation."
            </p>

            </div>
          </div>
          <div className="sect">
          <div className="svg-sect">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '70px', height: 'auto' }}>
  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/>
</svg>


            </div>
            <div className="adhokshaja">
            <h3>2014-2015</h3>
            <h2>TCS company, Mumbai</h2>
            <p>
            "Contributed to the dynamic environment of TCS Mumbai with dedication and expertise."
            </p>

            </div>
          </div>
          <div className="sect">
          <div className="svg-sect">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '70px', height: 'auto' }}>
  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/>
</svg>
            </div>
            <div className="adhokshaja">
            <h3>2016-2017</h3>
            <h2>Google company, Melbourne</h2>
            <p>
            "Played a pivotal role in Google's innovative endeavors in Melbourne, driving excellence and innovation."
            </p>

            </div>
          </div>
          <div className="sect">
          <div className="svg-sect">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: '70px', height: 'auto'}}>
  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/>
</svg>
            </div>
            <div className="adhokshaja">
            <h3>2018-2019</h3>
            <h2>Apple company, Delhi</h2>
            <p>
            "Instrumental in Apple's pioneering initiatives,contributing to groundbreaking advancements and excellence in product development."
            </p>

            </div>
          </div>
        </div>


        <div className="blog-sect">

          <div className="texta">
          <span>
        <h1 >My&nbsp;</h1>
         <h1 className="my" id="my">Blog</h1>
          </span>
          <p>
          "Exploring a myriad of topics through insightful narratives.
          captivating visuals, and expert analysis in my blogs."
          </p>
          </div>

          <div className="kard-container">


          <div className="kard kard3"><span><img src="./—Pngtree—sci fi femme fatale a_9892305.jpg" alt="" /></span>
          <div className="kard-content">
          <h2>Future of AI</h2><p>Explore the advancements in artificial intelligence and how it is reshaping our world.</p> <button>Read More</button></div></div>
          <div className="kard kard2"><span><img src="./1000_F_561064134_uFAZ9tAhpzJtVgbqW20LLrVB71OIzf7j.jpg" alt="" /></span>
          <div className="kard-content">
          <h2>Human Potential</h2><p>Delve into the depths of human potential and the limitless possibilities of our mind.</p> <button>Read More</button></div></div>
          <div className="kard kard1"><span><img src="./atheism.png" alt="" /></span>
          <div className="kard-content">
          <h2>From Atheist to a Theist</h2><p>My journey about how I came into theism.</p> <button>Read More</button></div></div>
          </div>
        </div>
        

        <div className="last">
          <div className="left1">

          <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <defs>
      <style>
        {`.cls-2{fill:#f6b445;}
          .cls-3{fill:#fed049;}
          .cls-4{fill:none;stroke:#474c54;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
      </style>
    </defs>
    <g id="_21-Email" data-name="21-Email">
      <g id="_Group_" data-name="<Group>">
        <path d="M41,19,24,30,7,19V2a1,1,0,0,1,1-1h32a1,1,0,0,1,1,1Z" style={{fill: '#f1f2f2'}} />
        <path className="cls-2" d="M7,13.91V19l-6-4,6-6v4.91ZM47,15l-6,4V9l6,6Z" />
        <path className="cls-3" d="M41,18.91,47,15v28a4.025,4.025,0,0,1-1.17,2.83L39,39,28,28l-.28-.43Z" />
        <path className="cls-2" d="M39,39,45.83,45.83A4.025,4.025,0,0,1,43,47H5a4.025,4.025,0,0,1-2.83-1.17L9,39l11-11,.28-.43L24,30,27.72,27.57l.28.43Z" />
        <path className="cls-3" d="M20.28,27.57,20,28,9,39l-6.83,6.83A4.025,4.025,0,0,1,1,43V15Z" />
        <path className="cls-4" d="M41,18.91,27.72,27.57,24,30,20.28,27.57,7,18.91" />
        <path className="cls-4" d="M1,15v28a3.995,3.995,0,0,0,4,4H42a3.995,3.995,0,0,0,4-4V15M28,28,39,39" />
        <path className="cls-4" d="M20,28,9,39" />
        <path className="cls-4" d="M7,14V2a1,1,0,0,1,1-1h32a1,1,0,0,1,1,1v12" />
        <path className="cls-4" d="M6.91,9.09,1,15" />
        <path className="cls-4" d="M47,15,41.05,9.05" />
        <line className="cls-4" x1="13" y1="6" x2="35" y2="6" />
        <line className="cls-4" x1="13" y1="11" x2="35" y2="11" />
        <line className="cls-4" x1="35" y1="16" x2="33" y2="16" />
        <line className="cls-4" x1="29" y1="16" x2="27" y2="16" />
      </g>
    </g>
  </svg>
          </div>
          
          <div className="right1">
            <h1>Get In Touch</h1>
            <input className="email-opt" type="text" placeholder="Name" />
            <input className="email-opt" type="text" placeholder="Email" />
            <input className="email-opt" type="text" placeholder="Subject" />
            <input className="comment-box" type="text" placeholder="message" />
            <button>Send Email</button>
          </div>
        </div>
    </div>
  );
}

export default App;
