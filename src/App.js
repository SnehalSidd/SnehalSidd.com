import logo from "./logo.svg";
import "./App.css";
import React, { useState, useCallback } from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter';

// --- Project Data Structure (A clean array for easy filtering/rendering)
const allProjects = [
  { id: 1, category: 'photography', title: 'Project 1 Title', detail: 'This project is a high-quality photograph captured for a magazine cover.' },
  { id: 2, category: 'photography', title: 'Project 2 Title', detail: 'A detailed study on lighting in commercial photography.' },
  { id: 3, category: 'design', title: 'E-commerce Website Design', detail: 'Full-stack UI/UX for a new fashion e-commerce platform.' },
  { id: 4, category: 'design', title: 'Brand Identity Creation', detail: 'Development of logo, color palette, and brand guidelines for a startup.' },
  { id: 5, category: 'marketing', title: 'Social Media Campaign', detail: 'Executed a 6-week social media marketing strategy, increasing engagement by 40%.' },
  { id: 6, category: 'photography', title: 'Wedding Photography Album', detail: 'Candid and portrait photography for a destination wedding.' },
  { id: 7, category: 'photography', title: 'Travel Photo Series', detail: 'A collection of landscape photographs from the Himalayas.' },
  { id: 8, category: 'design', title: 'Mobile App Prototyping', detail: 'Wireframing and high-fidelity prototyping for an iOS application.' },
  { id: 9, category: 'marketing', title: 'SEO Optimization Strategy', detail: 'Implemented technical SEO improvements leading to a 25% increase in organic traffic.' },
  { id: 10, category: 'marketing', title: 'Email Newsletter Design', detail: 'Created a responsive and conversion-focused email marketing template.' },
  { id: 11, category: 'design', title: 'Infographic Design', detail: 'Designed complex data visualizations for a corporate annual report.' },
  { id: 12, category: 'photography', title: 'Product Photography', detail: 'Studio photography for a line of cosmetics products.' },
];
// --- End Project Data

// --- Modal Component for Pop-ups
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // Added 'open' class for CSS transition/animation
  return (
    <div className="modal-backdrop open" onClick={onClose}>
      {/* Stops clicks inside the modal from closing it */}
      <div className="modal-content" onClick={e => e.stopPropagation()}> 
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};
// --- End Modal Component

function App() {
  const [text]= useTypewriter({
    words: ['Public Speaker',' Web Developer',' You Tuber',' An Artist'],
    loop: true, // Ensured loop is active
    typeSpeed: 70, // Added for smoother typing
    deleteSpeed: 50, // Added for smoother deleting
  });

  // --- New State for Navigation Menu (Pop-up)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- New State for Portfolio Filtering (Different Slides)
  const [filter, setFilter] = useState('all');
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(6); // Default 6 visible

  // --- New State for Portfolio Pop-up (Modal)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  // Derived state for filtered projects
  const filteredProjects = allProjects.filter(p => filter === 'all' || p.category === filter);
  const projectsToShow = filteredProjects.slice(0, visibleProjectsCount);
  const showLoadMoreButton = filter === 'all' && visibleProjectsCount < allProjects.length;
  const showShowLessButton = filter === 'all' && visibleProjectsCount > 6;


  // Pop-up Handler
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  
  // Filtering Handler (replaces fun, fun1, fun2, fun3)
  const handleFilterClick = useCallback((newFilter) => {
    setFilter(newFilter);
    // When filtering, show all results for that category instantly.
    setVisibleProjectsCount(allProjects.length); 
    if (newFilter === 'all') {
      setVisibleProjectsCount(6); // Reset to 6 for 'All' to enable Load More
    }
  }, []);

  // Load More/Show Less Handlers (replaces fun4, fun5)
  const handleLoadMore = () => {
    setVisibleProjectsCount(allProjects.length); // Load all
  };

  const handleShowLess = () => {
    setVisibleProjectsCount(6); // Reset to 6
  };
  

  // --- Removed all old DOM manipulation functions (fun, fun1, fun2, fun3, fun4, fun5, fun6, fun7, fun8)
  // --- Removed old handler functions (handleDesignClick, handleMarketingClick, handlePhotographyClick, allclick)


  return (
  
    <div className="container">
      
      {/* 3. Pop-up Component for Portfolio Details */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>{selectedProject?.title}</h2>
        <p>Category: {selectedProject?.category}</p>
        <p className="modal-detail">{selectedProject?.detail}</p>
        <p>This is a simple modal pop-up for project details.</p>
      </Modal>

      <div className="navbar">
        <h1>SNEHAL SIDDHARTH</h1>
        <ul className="lasthid">
          <li><a className="navlin" href="#about">About Me</a></li>
          <li><a className="navlin" href="#services">Services</a></li>
          <li><a className="navlin" href="#portfolio">Portfolio</a></li>
          <li><a className="navlin" href="#experience">Experience</a></li>
          <li><a className="navlin" href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* 1. Mobile Menu Icon (Now a Button and opens the pop-up) */}
      <button className="menu-icon" onClick={() => setIsMenuOpen(true)}>
        {/* Replaced image icon with SVG */}
        <svg viewBox="0 0 24 24" width="30" height="30"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
      </button>

      {/* 1. Mobile Menu Pop-up/Slide-out (Controlled by state) */}
      <div className={`scroll-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a onClick={() => setIsMenuOpen(false)} href="#about">About Me</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#services">Services</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#portfolio">Portfolio</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#experience">Experience</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#contact">Contact</a></li>
          <button className="up" onClick={() => setIsMenuOpen(false)}>
            {/* Replaced image icon with SVG */}
            <svg viewBox="0 0 24 24" width="20" height="20"><path d="m12 10.828-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/></svg>
          </button>
        </ul>
      </div>
      
      {/* Added IDs for navigation links */}
      <div className="gaur" id="about">
        <div className="left">
          <h3>WELCOME!</h3>
          <div className="yo">
            <div className="box">
              <div className="fix">I Am </div>
              <h1 className="change">
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
                {/* 1. Replacing image icons with SVGs for consistency and animation capability */}
                {/* NOTE: Update 'yourprofile' with actual links */}
                <a target="_blank" href="https://x.com/yourprofile"><svg viewBox="0 0 16 16" id="Twitter"><path fill="currentColor" d="M16 3.038c-.59.264-1.222.441-1.884.516.679-.406 1.192-1.047 1.434-1.815-.636.372-1.337.643-2.083.791-.599-.64-1.455-1.039-2.404-1.039-1.815 0-3.287 1.472-3.287 3.287 0 .257.028.508.083.748-2.731-.137-5.148-1.445-6.768-3.435-.283.486-.445 1.053-.445 1.657 0 1.14.581 2.146 1.464 2.732-.54-.017-1.049-.166-1.492-.412v.041c0 1.59 1.13 2.918 2.632 3.226-.276.075-.568.115-.87.115-.213 0-.421-.02-.622-.059.418 1.306 1.63 2.257 3.064 2.283-1.121.878-2.535 1.402-4.075 1.402-.264 0-.525-.015-.783-.046 1.45.928 3.176 1.469 5.021 1.469 6.023 0 9.324-4.99 9.324-9.324 0-.142-.003-.283-.007-.424.64-.46 1.196-1.035 1.637-1.696z" /></svg></a>
                <a target="_blank" href="https://www.instagram.com/yourprofile"><svg viewBox="0 0 448 512" id="Instagram"><path fill="currentColor" d="M224.1 127.1c-6.8-6.9-18.1-6.9-24.9 0l-37.4 37.4c-6.9 6.8-6.9 18.1 0 24.9l37.4 37.4c6.8 6.9 18.1 6.9 24.9 0l37.4-37.4c6.9-6.8 6.9-18.1 0-24.9l-37.4-37.4zM224.1 247.1c-6.8 6.9-18.1 6.9-24.9 0l-37.4-37.4c-6.9-6.8-6.9-18.1 0-24.9l37.4-37.4c6.8-6.9 18.1-6.9 24.9 0l37.4 37.4c6.9 6.8 6.9 18.1 0 24.9l-37.4 37.4zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-160 32c53 0 96 43 96 96s-43 96-96 96-96-43-96-96 43-96 96-96zm-96 96c0-53 43-96 96-96s96 43 96 96-43 96-96 96-96-43-96-96zm224 96H160c-26.5 0-48 21.5-48 48s21.5 48 48 48h192c26.5 0 48-21.5 48-48s-21.5-48-48-48z" /></svg></a>
                <a target="_blank" href="https://www.facebook.com/yourprofile"><svg viewBox="0 0 512 512" id="Facebook"><path fill="currentColor" d="M504 32H8C3.6 32 0 35.6 0 40v432c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8zm-119 146.7H353V135c0-14.7 9.8-19.4 17.5-19.4 7.7 0 20.3 1.5 30.6 3.1V95.7c-5.5-.8-17.7-2.3-33.8-2.3-36.2 0-60.6 22-60.6 62.9v35.8h-41.6v53.4h41.6V448h80V233.1h54.9l6.3-54.8z" /></svg></a>
                <a target="_blank" href="https://www.linkedin.com/in/yourprofile"><svg viewBox="0 0 448 512" id="LinkedIn"><path fill="currentColor" d="M416 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM192 192h-48v192h48V192zm64 0h48v192h-48V192zm96 0h48v192h-48V192zM168 96c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" /></svg></a>
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
        <div className="next" id="services">
         <span>
         <h1 >My&nbsp;</h1>
         <h1 className="my">Services</h1>
          </span>
          <p>
          "My Services cater to a range of industries, offering expertise in Web Development,
          Photography, Web Design, App Development, Video Editing, and SEO."
          </p>

          <div className="grid">
            {/* The service cards are preserved, inheriting the new smooth hover animation from App.css */}
            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Github"><path fill="#feb300" d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" className="color5c6bc0 svgShape"></path></svg>
            <h3>WEB DEVELOPMENT</h3>
            <p>Crafting interactive and dynamic websites using cutting-edge technologies and frameworks to bring ideas to life.</p>
            </div>
            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="camera"><path fill="#feb300" d="M24,18a8,8,0,1,0,8,8A8,8,0,0,0,24,18Zm-3.2,5.6A4,4,0,0,0,20,26v1H18V26a5.93,5.93,0,0,1,1.2-3.6l.61-.8,1.59,1.21ZM25,22H24a3.84,3.84,0,0,0-.79.08l-1,.21-.43-1.95,1-.22A5.77,5.77,0,0,1,24,20h1Z" className="color192340 svgShape"></path><path fill="#feb300" d="M41,12H35.54L33,8.23A5,5,0,0,0,28.86,6H19.14A5,5,0,0,0,15,8.23L12.46,12H7a5,5,0,0,0-5,5V37a5,5,0,0,0,5,5H41a5,5,0,0,0,5-5V17A5,5,0,0,0,41,12ZM24,36A10,10,0,1,1,34,26,10,10,0,0,1,24,36Z" className="color192340 svgShape"></path></svg>
            <h3>PHOTOGRAPHY</h3>
            <p>Capturing moments and stories through the lens, transforming ordinary scenes into captivating visual narratives.</p>
            </div>
            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g data-name="21-web designer"><path d="M43 48H5a5.006 5.006 0 0 1-5-5 1 1 0 0 1 1-1h46a1 1 0 0 1 1 1 5.006 5.006 0 0 1-5 5zM2.171 44A3.006 3.006 0 0 0 5 46h38a3.006 3.006 0 0 0 2.829-2z"/><path d="M19 43h10v2H19zM46 43h-2V14a1 1 0 0 0-1-1h-4v-2h4a3 3 0 0 1 3 3zM4 43H2V14a3 3 0 0 1 3-3h4v2H5a1 1 0 0 0-1 1z"/><path d="M6 36h37v2H6z"/><path d="M10 37H8V3a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v3h-2V3a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1z"/><path d="M9 8h27v2H9z"/><path d="M26.648 25.176a1 1 0 0 1-.707-.293l-2.824-2.823a1 1 0 0 1 0-1.414L42.884.878a3.068 3.068 0 0 1 4.239 0 3 3 0 0 1 0 4.238L27.355 24.883a1 1 0 0 1-.707.293zm-1.41-3.823 1.41 1.409L45.708 3.7a1 1 0 0 0 0-1.41 1.019 1.019 0 0 0-1.409 0z"/><path d="M21 28a1 1 0 0 1-.895-1.447l2.824-5.648 1.789.895-1.482 2.964 2.964-1.483.9 1.789-5.653 2.83A1 1 0 0 1 21 28zM37.237 7.94l1.414-1.415 2.824 2.824-1.414 1.414zM38 12h2v25h-2zM12 4h2v2h-2zM16 4h2v2h-2zM20 4h2v2h-2zM17 22a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="m19.293 19.707 1.414-1.414 3 3-1.413 1.415z"/><path d="M32 32H17a1 1 0 0 1-1-1V21h2v9h11.586l-4.295-4.3 1.414-1.414 6 6A1 1 0 0 1 32 32zM34 30h2v2h-2zM12 30h2v2h-2z"/></g></svg>
            <h3>WEB DESIGN</h3>
            <p>Designing aesthetically pleasing and user-friendly interfaces, blending creativity with functionality to enhance digital experiences.</p>
            </div>
            <div className="card">
            <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" id="apple-logo">
            <path fill="#feb300" d="M318.7 268.9c-1.5-35.8 15.9-62.9 49.1-82.8-18.1-26.3-44.9-41.1-78.5-41.6-32.9-.5-69.1 19.4-86.7 19.4-17.7 0-45.3-18.9-74.5-18.4-38.3.6-73.8 22.1-93.5 56.1-40 70-10.1 173.7 28.8 230.8 19.1 28.6 41.7 60.6 71.6 59.5 28.6-1.2 39.4-18.5 73.8-18.5 34.3 0 44.1 18.5 74.6 18 30.7-.5 50-28.3 68.7-57.1 21.6-32.1 30.4-63.1 30.8-64.8-0.7-.3-58.9-22.6-59.7-89.7zm-55.3-157.7c17.1-20.6 28.6-49.3 25.4-77.8-24.6 1-54.6 15.9-72.2 36.4-16.8 19.5-30.8 48.6-26.9 76.8 27.5 2.1 56.8-14.4 73.7-35.4z"/>
            </svg>
            <h3>APP DEVELOPMENT</h3>
            <p>Building robust and scalable mobile applications tailored to meet client needs, integrating seamless functionality with intuitive user interfaces for optimal user experiences.</p>

            </div>
            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g data-name="9-Video">
            <path fill="#feb300" d="M29 27H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v21a3 3 0 0 1-3 3z"/>
            <path fill="#feb300" d="M22 20H6a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zM13 14a1 1 0 0 1-1-1V7a1 1 0 0 1 1.447-.895l6 3a1 1 0 0 1 0 1.79l-6 3A1 1 0 0 1 13 14zm1-5.382v2.764L16.764 10z"/>
            </g>
            </svg>
            <h3>VIDEO EDITING</h3> 
            <p> Transforming raw footage into polished videos, employing creative editing techniques to convey messages effectively, whether for marketing campaigns, events, or personal projects. </p>
            </div>
            <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"> 
            <path fill="#feb300" d="M15 112.75h98A10.762 10.762 0 0 0 123.75 102V25a9.761 9.761 0 0 0-9.75-9.75H14A9.761 9.761 0 0 0 4.25 25v77A10.762 10.762 0 0 0 15 112.75zm98-3.5H15A7.258 7.258 0 0 1 7.75 102V40.183h112.5V102a7.258 7.258 0 0 1-7.25 7.25zM120.25 25v11.683H52.888L61.37 18.75H114a6.257 6.257 0 0 1 6.25 6.25zM14 18.75h43.5l-8.484 17.933H7.75V25A6.257 6.257 0 0 1 14 18.75z"/>
            <path fill="#feb300" d="M21.57 33.466a5.75 5.75 0 1 0-5.75-5.75 5.756 5.756 0 0 0 5.75 5.75zm0-8a2.25 2.25 0 1 1-2.25 2.25 2.253 2.253 0 0 1 2.25-2.25zM30.5 58.5h-15a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3z"/>
            <path fill="#feb300" d="M64 43.684a2.25 2.25 0 1 0 2.25 2.25A2.253 2.253 0 0 0 64 43.684zM64 46.184a.25.25 0 1 1 .25-.25.25.25 0 0 1-.25.25z"/>
            <path fill="#feb300" d="M64 71.816a2.25 2.25 0 1 0 2.25 2.25A2.253 2.253 0 0 0 64 71.816zM64 74.316a.25.25 0 1 1 .25-.25.25.25 0 0 1-.25.25z"/>
            <path fill="#feb300" d="M64 99.948a2.25 2.25 0 1 0 2.25 2.25A2.253 2.253 0 0 0 64 99.948zM64 102.448a.25.25 0 1 1 .25-.25.25.25 0 0 1-.25.25z"/>
            </svg>
            <h3>SEO</h3>
            <p>Optimizing websites and content for search engines, increasing visibility and driving organic traffic to achieve business objectives.</p>
            </div>
          </div>
        </div>

        {/* 4. Portfolio/Project Section (Different Slides/Filtering) */}
        <div className="aage" id="portfolio">
            <div className="buttons">
              <button className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>
                <a className="link" href="#bottons">All</a>
              </button>
              <button className={`btn ${filter === 'design' ? 'active' : ''}`} onClick={() => handleFilterClick('design')}>
                <a className="link" href="#bottons">Design</a>
              </button>
              <button className={`btn ${filter === 'marketing' ? 'active' : ''}`} onClick={() => handleFilterClick('marketing')}>
                <a className="link" href="#bottons">Marketing</a>
              </button>
              <button className={`btn ${filter === 'photography' ? 'active' : ''}`} onClick={() => handleFilterClick('photography')}>
                <a className="link" href="#bottons">Photography</a>
              </button>
            </div>
            
            <div className="baxekabaxa" id="baxekabaxa">
              <div className="baxa" id="baxa">
                {/* Dynamically render projects based on filter and visibility state */}
                {projectsToShow.map(project => (
                  <div 
                    key={project.id} 
                    className={`project${project.id} pro ${project.category}`} 
                    onClick={() => handleProjectClick(project)} // 3. Click handler for Pop-up
                  >
                    <div className="overlay">
                      <span className="title">
                        <span>
                          <p>{project.category}</p>
                          <h1>{project.title}</h1>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Load More/Show Less for 'All' view only */}
              {filter === 'all' && (
                <div className="bottons" id="bottons">
                  {showLoadMoreButton && (
                    <button className="load" onClick={handleLoadMore}>
                      <a className="link" href="#bottons">Load More</a>
                    </button>
                  )}
                  {showShowLessButton && (
                    <button className="show-less" onClick={handleShowLess}>
                      <a className="link" href="#bottons">Show Less</a>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

        <div className="more-next" id="experience">
          {/* ... The rest of the App.js content remains ... */}
        </div>
      
        <div className="last" id="contact">
          {/* ... The rest of the App.js content remains ... */}
        </div>

    </div>
  );
}

export default App;