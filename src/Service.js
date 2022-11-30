import React from "react";
import "./Service.css";

import react from "./image/react.jpg"
import react2 from "./image/react2.jpg"
import html from "./image/html.jpg"
import css from "./image/css.jpg"
import js from "./image/js.jpg"
import redux from "./image/redux.jpg"
import nodejs from "./image/nodejs.jpg"

import express from "./image/express.jpg"





import logo from './logo.svg';

function Project() {
  return (
    <div className="service component__space" id="Portfolio">
      <div className="heading">
        <h1 style={{marginLeft:"40%",marginBottom:"50px",fontSize:"30px"}}>SKILLS</h1>
       
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="service__box pointer relative">
                     <div className="service__box__img pointer relative">
                         <div className="service__img__box">
                             <img src={html} alt="" className="service__img" />

                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="service__meta absolute">
                     
                  
                     <a href="#" className="service__btn">HTML</a>
                     
                     </div>
                    
                 </div>
             </div>


             <div className="col__3">
                 <div className="service__box pointer relative">
                     <div className="service__box__img pointer relative">
                         <div className="service__img__box">
                             <img src={css} alt="" className="service__img" />

                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="service__meta absolute">
                     
                  
                     <a href="#" className="service__btn">CSS</a>
                     
                     </div>
                    
                 </div>
             </div>
             <div className="col__3">
                 <div className="service__box pointer relative">
                     <div className="service__box__img pointer relative">
                         <div className="service__img__box">
                             <img src={js} alt="" className="service__img" />

                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="service__meta absolute">
                     
                  
                     <a href="#" className="service__btn">JS</a>
                     
                     </div>
                    
                 </div>
             </div>

             <div className="col__3">
                 <div className="service__box pointer relative">
                     <div className="service__box__img pointer relative">
                         <div className="service__img__box">
                             <img  alt="" className="service__img" src={react}/>

                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="service__meta absolute">
                     
                  
                     <a href="#" className="service__btn">REACT</a>
                     
                     </div>
                    
                 </div>
             </div>

             <div className="col__3">
                 <div className="service__box pointer relative">
                     <div className="service__box__img pointer relative">
                         <div className="service__img__box">
                             <img src={redux} alt="" className="service__img" />

                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="service__meta absolute">
                     
                  
                     <a href="#" className="service__btn">REDUX</a>
                     
                     </div>
                    
                 </div>
             </div>

             <div className="col__3">
                 <div className="service__box pointer relative">
                     <div className="service__box__img pointer relative">
                         <div className="service__img__box">
                             <img src="data:image/jpeg;base64,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" alt="" className="service__img" />

                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="service__meta absolute">
                     
                  
                     <a href="#" className="service__btn">MONGODB</a>
                     
                     </div>
                    
                 </div>
             </div>

             <div className="col__3">
                 <div className="service__box pointer relative">
                     <div className="service__box__img pointer relative">
                         <div className="service__img__box">
                             <img src={nodejs} alt="" className="service__img" />

                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="service__meta absolute">
                     
                  
                     <a href="#" className="service__btn">NODEJS</a>
                     
                     </div>
                    
                 </div>
             </div>

             <div className="col__3">
                 <div className="service__box pointer relative">
                     <div className="service__box__img pointer relative">
                         <div className="service__img__box">
                             <img src={express} alt="" className="service__img" />

                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="service__meta absolute">
                     
                  
                     <a href="#" className="service__btn">EXPRESS.JS</a>
                     
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
