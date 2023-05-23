import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-900 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-6 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-200'>About</p>
                </div>
                <div>
                    {/* Empty Div */}
                </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, Im Sam, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                   <p>I love challenges. The harder the problem, the more exhilarating it is to solve. I’m a team player and I will give my all to any organization I work with. I have been in tech for over 4 years now and have specialized in software development for 2 years. This understanding paired with my programming knowledge enables me to build full-stack applications with a focus on a responsive user experience.</p>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default About