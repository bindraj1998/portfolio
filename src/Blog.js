import React from "react";
import "./Blog.css";

import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import projectimage from "./projectimage/dealshare.png"
import projectimage2 from "./projectimage/nordstrom.png"
import projectimage3 from "./projectimage/netmeds.png"
import projectimage4 from "./projectimage/meanbuy.png"
import projectimage6 from "./projectimage/authentication.png"
import projectimage7 from "./projectimage/mailtrap.png"
import projectimage5 from "./projectimage/you tube.png"
import projectimage8 from "./projectimage/expressvalidater.png"

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 style={{marginLeft:"45%",fontSize:'30px'}}>Projects</h1>
        {/* <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p> */}
        {/* <p className="heading p__color">
          but the majority have suffered alteration.
        </p> */}
      </div>
      <div className="container">
          <div className="row">
             

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={projectimage2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                        
                        
                       </div>
                       <div style={{color:"white",fontSize:"30px"}}>Nordstrom</div>
                 <div style={{color:"white",fontSize:"15px"}}> its a website for  online shopping (E-Commerce) website ,made on react,Material UI,Context Api,react router DOM,css</div>
                       
                 </div>
                 <div style={{display:'flex',color:"white",width:"40%",marginLeft:"60px",justifyContent:"space-between"}} ><a href="https://github.com/bindraj1998/nordstrome-project"><GitHubIcon/></a><a href="https://rajkumar-netlify-app.netlify.app"><p><RemoveRedEyeIcon/></p></a></div>

              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img style={{height:'150px'}} src={projectimage} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                        {/* <h5 className="project__text">Development</h5> */}
                          {/* <h4 className="project__text">Getting tickets to the big show</h4> */}
                         {/* <a  className="blog project__btn btn"><GitHubIcon/></a> */}
                         {/* <div style={{display:'flex',width:"40%",marginLeft:"60px",justifyContent:"space-between",border:"1px solid red"}} ><GitHubIcon/><RemoveRedEyeIcon/></div> */}
                       </div>
                      

                 </div>
                 <div style={{color:"white",fontSize:"30px"}}>DealShare</div>
                 <div style={{color:"white",fontSize:"15px"}}> its a website for buy online home grocery items,made on react,Chakra UI,Context Api,react router DOM</div>
                       
                 <div style={{display:'flex',color:"white",width:"40%",marginLeft:"60px",justifyContent:"space-between"}} ><a href="https://github.com/bindraj1998/dealshare-project"><GitHubIcon/></a><a href="https://rajkumar-netlify-app.netlify.app"><p><RemoveRedEyeIcon/></p></a></div>
                       {/* <div style={{display:'flex',color:"white",width:"40%",marginLeft:"60px",justifyContent:"space-between"}} ><GitHubIcon/><a href=""></a><RemoveRedEyeIcon/></div> */}
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={projectimage7} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         
                       </div>
                       <div style={{color:"white",fontSize:"30px"}}>mailtrap</div>
                 <div style={{color:"white",fontSize:"15px"}}> its website to send email ,made on nodejs,express,mongodb,mongoose,mailtrap,nodemailer</div>
                       
                 </div>
                 <div style={{display:'flex',color:"white",width:"40%",marginLeft:"60px",justifyContent:"space-between"}} ><a href="https://github.com/bindraj1998/mailtrap"><GitHubIcon/></a></div>

              </div>


              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={projectimage8} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         
                       </div>
                       <div style={{color:"white",fontSize:"30px"}}>express -validater</div>
                 <div style={{color:"white",fontSize:"15px"}}> its a website to check tha validation of email,password,username,IP address etc. ,made on nodejs,express,mongodb,mongoose,express - validater</div>
                       
                 </div>
                 <div style={{display:'flex',color:"white",width:"40%",marginLeft:"60px",justifyContent:"space-between"}} ><a href="https://github.com/bindraj1998/express-validater"><GitHubIcon/></a></div>

              </div>



              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={projectimage6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         
                       </div>
                       <div style={{color:"white",fontSize:"30px"}}> authorization  and authentication</div>
                 <div style={{color:"white",fontSize:"15px"}}> its a website to check user is accessible in particular router or not,made on nodejs ,middlewere,express,mongodb,mongoose,</div>
                       
                 </div>
                 <div style={{display:'flex',color:"white",width:"40%",marginLeft:"60px",justifyContent:"space-between"}} ><a href="https://github.com/bindraj1998/authentication"><GitHubIcon/></a></div>

              </div>


              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={projectimage3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         
                       </div>
                       <div style={{color:"white",fontSize:"30px"}}>netmedsclone</div>
                 <div style={{color:"white",fontSize:"15px"}}> its a website for buy online medicine ,made on Html,Css,Bootstrap , DOM</div>
                       
                 </div>
                 <div style={{display:'flex',color:"white",width:"40%",marginLeft:"60px",justifyContent:"space-between"}} ><a href="https://github.com/g-utsav/NetMedsClone"><GitHubIcon/></a><a href="https://netmedsclone-u3.netlify.app/html"><p><RemoveRedEyeIcon/></p></a></div>

              </div>
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={projectimage4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         {/* <h5 className="project__text">MEANBUY.COM </h5> */}
                        
                       </div>

                 </div>
                 <div style={{color:"white",fontSize:"30px"}}>MEANBUY.com</div>
                 <div style={{color:"white",fontSize:"15px"}}> meanbuy.com is a online shopping website,made on html,css,Dom</div>
                 <div style={{display:'flex',color:"white",width:"40%",marginLeft:"60px",justifyContent:"space-between"}} ><a href="https://github.com/bindraj1998/project-clone"><GitHubIcon/></a><a href="https://celebrated-sunshine-51349d.netlify.app/"><p><RemoveRedEyeIcon/></p></a></div>

              </div>

              
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={projectimage5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                        
                       </div>
                 </div>
                 <div style={{color:"white",fontSize:"30px"}}>You Tube</div>

                 <div style={{color:"white",fontSize:"15px"}}> You Tube website,made on html,css,Dom</div>
                 <div style={{display:'flex',color:"white",width:"40%",marginLeft:"60px",justifyContent:"space-between"}} ><GitHubIcon/><a href="https://curious-rabanadas-1e158b.netlify.app/"><p><RemoveRedEyeIcon/></p></a></div>

              </div>
              
          </div>
      </div>
    </div>
  );
}

export default Blog;
