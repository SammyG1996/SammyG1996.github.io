import React from 'react';
import HouseworkHelper from "../assets/housework_helper.png"



const UpcommingProjects = () => {
  return (
    // Added pt-8 to give some space between elms and set md:h-full
    <div name='upcommingprojects' className='w-full md:h-full bg-slate-900 text-gray-300 pt-8 pb-8'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-[100px] relative z-10'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-200'>Current Projects</p>
                <p className='py-6'>Check out some of my current projects</p>
            </div>
            {/* Card Container */}
            <div className='grid sm:grid-cols-2 gap-4'>

                {/* Card */}
                <div style={{backgroundImage: `url(${HouseworkHelper})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Full Stack React And Node JS Application
                        </span>
                        <div>
                            <a target='_blank' rel='noreferrer noopener' href="https://www.figma.com/file/TXcpMUC1qQgArBJKmzed90/Housework-Helper?type=design&node-id=0%3A1&mode=design&t=yiULgSzEAOTUmbHD-1">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Figma</button>
                            </a>
                            <a target='_blank' rel='noreferrer noopener' href="https://github.com/SammyG1996/HouseworkHelper">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>React Code</button>
                            </a> 
                            {/* <a target='_blank' rel='noreferrer noopener' href="https://github.com/SammyG1996/my_calorie_buddy_NodeJS">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Node JS Code</button>
                            </a>  */}
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default UpcommingProjects