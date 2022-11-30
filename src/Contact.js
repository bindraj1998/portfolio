import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
// import contactImg from "./img/about-9.jpg"
import contactImg from "./image/photo.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for  work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+91-8115735448</strong>,<strong>WhatsApp :+91-8115735448</strong> or email <strong>rajkumarbind555@gmail.com</strong></p>
                        </div>
                        <div>
                        <p className='hire__text white'>more information</p>
                           <div style={{display:"flex",paddingLeft:"10px",justifyContent:"space-around",width:"40%"}}>
                            <a href="https://www.linkedin.com/in/raj-kumar-bind-6b5744241/"><p ><LinkedInIcon/></p></a>
                           <a href="https://github.com/bindraj1998"><p><GitHubIcon/></p></a>

                           </div>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                   
                    


                </div>
            </div>
        </div>
    )
}

export default Contact
