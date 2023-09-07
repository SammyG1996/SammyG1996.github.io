import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import profilePic from '../assets/profile_pic.jpeg'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'



const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-900'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='flex justify-end pt-[100px]'>
                <img className='rounded-full max-w-[200px] m-8 relative z-10' src={profilePic} alt="" />
            </div>
           
            <p className='text-blue-200'>Hi 👋🏽, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>Samuel Gonzalez Jr</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Full Stack Developer</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>I have a knack for design and a thirst for knowledge. I have a passion for code and an eye for design. I love to make software that is not only functional and efficient but also beautiful.</p>
            <div className='lg:hidden flex jus'>
                <a target='_blank' rel='noreferrer noopener' href="https://www.linkedin.com/in/samuel-gonzalez-jr/" className=' bg-blue-600  text-white group px-2 py-2 my-2 flex items-center justify-between hover:bg-blue-400'><FaLinkedin size={30} className='ml-1'/> </a>
                <a target='_blank' rel='noreferrer noopener' href="https://github.com/SammyG1996" className=' bg-neutral-900  text-white group px-2 py-2 my-2 flex items-center justify-between hover:bg-neutral-700'><FaGithub size={30} className='ml-1'/> </a>
                <a target='_blank' rel='noreferrer noopener' href="mailto:sgonzalezjr1914@gmail.com" className=' bg-blue-400  text-white group px-2 py-2 my-2 flex items-center justify-between hover:bg-blue-200'>Email<HiOutlineMail size={30} className='ml-1'/> </a>
                <a target='_blank' rel='noreferrer noopener' href="https://drive.google.com/file/d/1Ov3Q_7IMBTlKPu8rETeKBGz-Y_19cNQ5/view" className=' bg-blue-900  text-white group px-2 py-2 my-2 flex items-center justify-between hover:bg-blue-700'>Resume <BsFillPersonLinesFill size={30} className='ml-1'/> </a>
            </div>
            <div className='flex flex-col md:flex-row'>
                {/* Grouping the BTN with the span tells tailwind that the animation is to happen when hover happens on any items in group */}
                <button className='max-w-[180px] text-white group border-2 px-6 py-3 my-2 mr-2 flex items-center hover:bg-blue-200 relative z-10'>
                    
                    <Link to="work" smooth={true} duration={500}>
                        View Work 
                    </Link>

                    <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
                </button>
                {/* Grouping the BTN with the span tells tailwind that the animation is to happen when hover happens on any items in group */}
                <button className='max-w-[180px] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-200 relative z-10'>
                    
                    <Link to="upcommingprojects" smooth={true} duration={500}>
                        View Projects 
                    </Link>

                    <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home