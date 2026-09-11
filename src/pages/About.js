import React from 'react'
import sunburst from '../assets/svgs/Sunburst.svg';
import Sparkle from '../components/Sparkle';

const About = () => {
  return (
    <div id='aboutmob' className='bg-text text-bg h-auto w-full flex flex-col'>

      <section className='flex-1 flex-col gap-5 mx-6 pt-10 flex justify-center h-auto md:mx-20 md:mt-10 lg:mx-20 lg:mt-10'>

        <div className='text-center mx-2'>
          <h2 className='lg:text-4xl'>About</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <Sparkle style={{height:80, width:80, color:'var(--color-bg)'}} className='mx-auto' />

        <div>
          <h4 className='mb-3'>Educational Background and Experience</h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <Sparkle style={{height:80, width:80, color:'var(--color-bg)'}} className='mx-auto' />

        <div className='text-right'>
          <h4 className='mb-3'>Goals</h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </section>


      <section className='flex items-center justify-center h-full relative my-8 mx-4 md:my-20 lg:my-20'>
        <img src={sunburst} className='flex justify-items items-center' alt="sunburst"/>
        <div className='h-full w-full absolute top-0 left-0 text-center flex flex-col justify-center items-center'>
          <h2 className='text-accent text-center xxs:text-2xl'>
            Lindsey <br/> Thomas
          </h2>
          <h3 className='text-secondary xxs:text-xl'>Full Stack Web Developer</h3>
        </div>
      </section>


    </div>
  )
}

export default About
