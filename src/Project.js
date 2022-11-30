import React from "react";
import "./Project.css";
// import Project1 from './img/portfolio-1.jpg';
// import Project2 from './img/portfolio-2.jpg';
// import Project3 from './img/portfolio-3.jpg';
// import Project4 from './img/portfolio-4.jpg';
import nodejs from "./image/nodejs.jpg"
import githube from "./tools/github.jpg"
import git from "./tools/git.jpg"
import replit from "./tools/replit.jpg"

import heroku from "./tools/heroku.jpg"
import netlify from "./tools/netlify.jpg"
import npm from "./tools/npm.jpg"
import vercel from "./tools/vercel.jpg"
import vscode from "./tools/vscode.jpg"



import logo from './logo.svg';

function Project() {
  return (
    <div className="project component__space" id="Services">
      <div className="heading">
        <h1 style={{marginLeft:"40%",fontSize:"30px"}}>TOOLS</h1>
        {/* <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p> */}
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={git} alt="" className="project__img" />

                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4> */}
                     <a href="#" className="project__btn">GIT</a>
                     </div>
                 </div>
             </div>
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={vscode} alt="" className="project__img" />
                             
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4> */}
                     <a href="#" className="project__btn">VS CODE</a>
                     </div>
                 </div>
             </div>



             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={replit} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4> */}
                     <a href="#" className="project__btn">REPLIT</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={npm}alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4> */}
                     <a href="#" className="project__btn">NPM</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img  src={githube} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4> */}
                     <a href="#" className="project__btn">GITHUBE</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={netlify} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4> */}
                     <a href="#" className="project__btn">NETLIFY</a>
                     </div>
                 </div>
             </div> 


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={vercel} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4> */}
                     <a href="#" className="project__btn">VERCEL</a>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={heroku} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4> */}
                     <a href="#" className="project__btn">HEROKU</a>
                     </div>
                 </div>
             </div>
              
              
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             {/* <button className="view__more pointer btn">View more</button> */}
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
