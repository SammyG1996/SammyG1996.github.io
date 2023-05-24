import React, {useState} from 'react'
import Logo from "../assets/sg_logo.png"
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const handleHamburgerClick = () => {
        setMenuClicked( (bool) => {
            console.log(!bool)
            return !bool
        })
    }

    return (
        // z-index of 50 so nothing covers the navbar
        <div className='fixed w-full h-[80px] flex z-50 justify-between items-center px-4 bg-slate-900 text-gray-300' >
            <div>
                <img src={Logo} alt="image logo" style={{width: "60px"}}/>
            </div>
            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>        
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div className='md:hidden z-10 ' onClick={handleHamburgerClick}>
                {menuClicked ? <FaTimes/> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            <ul className={menuClicked ? 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center' : 'hidden'}>
                <li className='py-6 text-4xl' >
                    <Link onClick={handleHamburgerClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                    <Link onClick={handleHamburgerClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                    <Link onClick={handleHamburgerClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                    <Link onClick={handleHamburgerClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a target='_blank' rel='noreferrer noopener' href="https://www.linkedin.com/in/samuel-gonzalez-jr/" className='flex justify-between items-center w-full text-gray-300'>LinkedIn <FaLinkedin size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-neutral-900'>
                        <a target='_blank' rel='noreferrer noopener' href="https://github.com/SammyG1996" className='flex justify-between items-center w-full text-gray-300'>GitHub <FaGithub size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                        <a target='_blank' rel='noreferrer noopener' href="mailto:sgonzalezjr1914@gmail.com" className='flex justify-between items-center w-full text-gray-300'>Email <HiOutlineMail size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
                        <a target='_blank' rel='noreferrer noopener' href="https://drive.google.com/file/d/1Ov3Q_7IMBTlKPu8rETeKBGz-Y_19cNQ5/view" className='flex justify-between items-center w-full text-gray-300'>Resume <BsFillPersonLinesFill size={30} /> </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar