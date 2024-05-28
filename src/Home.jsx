import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { FaHackerrank } from "react-icons/fa";
import cicon from "./c.svg";
import project1 from "./assets/Screenshot 2024-05-20 192842.png";
import project2 from "./assets/Screenshot 2024-05-28 143808.png"
import resume from "./"
import { BiColor } from 'react-icons/bi';
import { BsTwitterX } from "react-icons/bs";
// import {ReactComponent as Cicon} from "./asc.svg" ;

const Home = () => {
  return (
    <div >
      <div className='hello' id="home">
        <div>
          <h2 className='font-regular'>Hello Everybody,<h2 className='font-bold' >I'm <strong style={{ color: '#28d146' }}>VIKAS BALE</strong></h2><h3 className='font-medium'>Web Developer | DSA</h3></h2>
        </div>


        <div className='mail-location'>
          <div>
            <MdOutlineEmail style={{ fontSize: '26px' }} />
            <h5 className='font-regular'>vikasbale4@gmail.com</h5>
          </div>
          <div>
            <FaRegAddressCard style={{ fontSize: '26px' }} />
            <h5 className='font-regular'>Hyderabad,India</h5>
          </div>
        </div>
        <div className='links'>

          <a href="https://github.com/vikas958" target='/blank'>
            <VscGithub />
          </a>
          <a href="https://www.linkedin.com/in/vikas-bale" target='/blank'>
            <RiLinkedinBoxLine />
          </a>
          <a href="https://leetcode.com/coder6765" target='/blank'>
            <SiLeetcode />
          </a>
          <a href="https://www.naukri.com/code360/profile/vikasbale" target='/blank'>
            <SiCodingninjas />
          </a>
          <a href="https://www.hackerrank.com/profile/vikas_bale834" target='/blank'>
          <FaHackerrank />
          </a>
        </div>
        <div className='resume'>
          <a href="https://drive.google.com/file/d/1ulDVwWSnkc7GsZY5cRQCR9QoYbXKFkIY/view?usp=sharing" target='/blank' className="btn font-bold">My Resume</a>
        </div>
      </div>
      <div className='about' id='About'>
        <h2 className='font-bold'>ABOUT MYSELF</h2>
        <p className='font-regular'>I'm a Freshman pursuing Computer Science and Engineering at MallaReddy Engineering College,Hyderabad. Passionate and dedicated student with a solid understanding of Data Structures and Algorithms (DSA). Proficient in
          front-end development, eager to leverage skills in HTML, CSS, JavaScript to create intuitive user experiences. A
          problem-solving enthusiast with a keen eye for detail, adept at crafting efficient solutions to complex challenges.I am always ready to have new experiences, meet new people and learn new things.Eager
          to apply theoretical knowledge in a practical setting to contribute effectively to projects and initiatives.Committed
          to delivering high-quality work and exceeding expectations in pursuit of organizational success.</p>
      </div>
      <div className='skills' id='Skills'>
        <h2 className='font-bold'>MY SKILLS</h2>
        <div>
          <h3 className='font-medium'>Languages</h3>
          <div>
            <ImHtmlFive className='icon' />
            <SiCss3 className='icon' />
            <TbBrandJavascript className='icon' />
            <RiJavaLine className='icon' />
          </div>
        </div>
        <div>
          <h3 className='font-medium'>Technologies</h3>
          <div>
            <FaBootstrap className='icon' />
            <RiReactjsLine className='icon' />
          </div>
        </div>
        <div>
          <h3 className='font-medium'>Tools</h3>
          <div>
            <VscVscode className='icon' />
            <FaGithub className='icon' />
          </div>
        </div>

        {/* <img src={cicon} alt="" /> */}
      </div>
      <div className='projects' id='Projects'>
        <h2 className='font-bold' style={{ color: '#090c31' }}>PROJECTS</h2>
        <div>
          <div className="card" style={{ width: '18em' }}>
            <img src={project1} classNmae="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-medium">JobHub</h5>
              <p className="card-text font-regular">"JobHub: Where job seekers find opportunities and recruiters hire talent seamlessly."</p>
              <div>
                <a href="https://github.com/Vikas958/jobhub" target='/blank' className="btn font-regular">Show Code</a>
                <a href="https://job-hub-portal.netlify.app/" target='/blank' className="btn font-regular">Live demo</a>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: '18em' }}>
            <img src={project2} classNmae="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-medium">ShopEase</h5>
              <p className="card-text font-regular">"An e-commerce platform with user-friendly interface and seamless cart functionality."</p>
              <div>
                <a href="https://github.com/Vikas958/shopease" target='/blank' className="btn font-regular">Show Code</a>
                <a href="https://shop-ease-website.netlify.app/" target='/blank' className="btn font-regular">Live demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" id='Contact' style={{ zIndex: '5' }}>
        <h3 className='font-medium'>About Me</h3>
        <p className='font-regular'>
          Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the better you get.
        </p>
        <h3 className='font-medium'>Follow Me Here</h3>
        <div className='links'>

          <a href="https://github.com/vikas958" target='/blank'>
            <VscGithub />
          </a>
          <a href="https://www.linkedin.com/in/vikas-bale" target='/blank'>
            <RiLinkedinBoxLine />
          </a>
          <a href="https://x.com/vikas_bale?t=RkGhMjf4m3CZuWx6tZDwdg&s=09" target='/blank'>
            <BsTwitterX />
          </a>
        </div>
      </div>
    </div>

  )
}

export default Home
