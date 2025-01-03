import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
// import { contactImg } from "../../assets/index";
import {myLogo} from "../../assets/index"


const ContactLeft = () => {
  return (
    <div className="w-[80%] lgl:w-[35%] mx-auto h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      {/* <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      /> */}          
      <div className="flex flex-col gap-4">
        <img className="w-32 rounded-full" src= { myLogo } alt="logo" />

        <p className="text-lg font-normal text-gray-400 italic">
          MERN Stack Developer
        </p>
        <p className="text-base text-white pb-10 italic">
          Let's work together
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8170-8526-0784</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mesafintminwagaw@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href ="https://github.com/Mesafin" target='_blank' rel="noreferrer"><FaGithub /></a>
          </span>
          <span className="bannerIcon">
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="mesafint-minwagaw23" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://et.linkedin.com/in/mesafint-minwagaw23?trk=profile-badge" target='_blank' rel="noreferrer" ><FaLinkedinIn /></a></div>
          </span>
          <span className="bannerIcon">
            <a href="tel:+8170-8526-0784"><FiPhone /></a>
          </span>
          <span className="bannerIcon">
            <a href="Mailto:mesafintminwagaw@gmail.com">< FiMail/></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft