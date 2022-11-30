import React, {useState} from "react";
import "./Home.css";
import logo from "./img/logo.png";
import homeimage from "./image/photo.jpg"
import logo1 from "./image/logo1.jpg"
import logo2 from "./image/logo.jpg"
import homeimage3 from "./image/photo3.png"




function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img style={{borderRadius:"50%"}} src={logo} alt="" />
                    
            {/* <img src="" alt="" /> */}

          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Tools</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Project</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          {/* <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#about">About</a>
            </li>
            <li className="sideNavbar">
              <a href="#services">Services</a>
            </li>
            <li className="sideNavbar">
              <a href="#portfolio">Skills</a>
            </li>
            <li className="sideNavbar">
              <a href="#blog">Blog</a>
            </li>
            <li className="sideNavbar">
              <a href="#contact">Contact</a>
            </li>
              </ul>
          </div>
           ) : null}*/}
        </div> 
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY PORTFOLIO</h1>
              <h2 className="home__text pz__10">Hi, I am Raj Kumar Bind</h2>
              <h3 className="home__text sweet pz__10">Full stack-web developer</h3>
              <h2 style={{color:"grey"}}> FRONTEND :- html,css,js, Components,Class Components,ES6 Classes, React ,React Router,React Router Dom, Context Api,State,Hooks,Props,HOC,render Props,Chakra Ui ,Material Ui,DOM ,redux,react-redux,redux-config ,redux thunk etc.</h2>
            <h4 style={{marginTop:"10px",color:"grey"}}>BACKEND :- nodejs,mongodb,mongoose,middlewere,express,mongodb compass,mongodb atlas,authorization,authentication,express-validator,redis,aws deployment</h4>
            <div style={{marginTop:"20px"}}> <h3>Contect Me At :-</h3>
          <h3>Email:rajkumarbind555@gmail.com</h3>
          <h3>Phone : 8115735448</h3>
          </div>
            </div>
            <div><img className="home" src={homeimage3}/></div>
          </div>
         
          
        </div>
      </div>
    </div>
  );
}

export default Home;
