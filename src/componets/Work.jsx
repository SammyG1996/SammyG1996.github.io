import React from 'react';
import MyWeatherProject from '../assets/my-weather-proj.png';
import OrganizationProject from '../assets/organization-proj.png';
import TvMazeProject from '../assets/tv_maze_proj.png'
import PortfolioProject from '../assets/portfolio-proj.png'
import Jobly from '../assets/jobly.png'



const Work = () => {
  return (
    // Added pt-8 to give some space between elms and set md:h-full
    <div name='work' className='w-full md:h-full bg-slate-900 text-gray-300 pt-8 pb-8'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-[100px] relative z-10'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-200'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            {/* Card Container */}
            <div className='grid sm:grid-cols-2 gap-4'>

                {/* Card */}
                <div style={{backgroundImage: `url(${Jobly})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Full Stack React And Node JS Application
                        </span>
                        <div>
                            <a target='_blank' rel='noreferrer noopener' href="https://jobly-react.onrender.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='_blank' rel='noreferrer noopener' href="https://github.com/SammyG1996/jobly_react_application">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>React Code</button>
                            </a> 
                            <a target='_blank' rel='noreferrer noopener' href="https://github.com/SammyG1996/Jobly_NodeJS">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Node JS Code</button>
                            </a> 
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div style={{backgroundImage: `url(${MyWeatherProject})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Full Stack Flask Application
                        </span>
                        <div>
                            <a target='_blank' rel='noreferrer noopener' href="https://my-weather-tbvb.onrender.com/weather_search">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='_blank' rel='noreferrer noopener' href="https://github.com/SammyG1996/capstone_1">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a> 
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div style={{backgroundImage: `url(${TvMazeProject})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            TV Show Rest API Project
                        </span>
                        <div>
                            <a target='_blank' rel='noreferrer noopener' href="https://sammyg1996.github.io/tv_maze/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='_blank' rel='noreferrer noopener' href="https://github.com/SammyG1996/tv_maze">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a> 
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div style={{backgroundImage: `url(${PortfolioProject})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Portfolio
                        </span>
                        <div>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a target='_blank' rel='noreferrer noopener' href="https://github.com/SammyG1996/SammyG1996.github.io">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a> 
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Work