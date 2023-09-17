import React from 'react'

import Javascript from '../assets/javascript.png';
import CSS from '../assets/css.png';
import MUI from '../assets/material_ui.png';
import BootStrap from '../assets/bootstrap.png';
import Tailwind from '../assets/tailwind.png';
import ReactJs from '../assets/react.png';
import MongoDB from '../assets/mongodb.png';
import NodeJs from '../assets/node.png';
import PostgeSQL from '../assets/postgresql.png';
import Python from '../assets/python.png';
import Flask from '../assets/flask.png';
import TypeScript from '../assets/typescript.png'

export const Skills = () => {
  return (
    // Needed to use h-full in order to contain elms in DIV
    <div name='skills' className='w-full h-full bg-slate-900 text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10'>
            <div className='mt-[100px]'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-200'>Experience</p>
                <p className='py-4'>// Here's my tech stack</p>
            </div>
            {/* icon container DIV */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={Javascript} alt="Javascript icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>Javascript</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={TypeScript} alt="TypeScript icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>TypeScript</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={CSS} alt="CSS icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>CSS</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={ReactJs} alt="ReactJs icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>React</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={MUI} alt="MUI icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>Material UI</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={BootStrap} alt="BootStraps icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>BootStraps</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={Tailwind} alt="Tailwind icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>Tailwind</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={MongoDB} alt="MongoDB icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>MongoDB</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={NodeJs} alt="NodeJs icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>NodeJs</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={PostgeSQL} alt="PostgeSQL icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>PostgeSQL</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={Python} alt="Python icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>Python</p>
                </div>
                <div className='bg-slate-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img src={Flask} alt="Flask icon" className='h-20 mx-auto'/>
                    <p className='mt-4'>Flask</p>
                </div>
            </div>
        </div>
    </div>
  )
}
