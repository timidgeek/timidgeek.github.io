import React from 'react'
import smoothScroll from '../smoothScroll'
import { ReactComponent as Frame } from "../assets/svgs/squiggle-frame.svg";
import headshot from '../assets/images/headshot_cropped.jpg'
import resume from '../assets/documents/LindseyThomas_Frontend_Resume_2026.pdf'
import useInView from '../hooks/useInView'

const HomePageDesktop = () => {
  const [imageRef, imageInView] = useInView();
  const [textRef, textInView] = useInView();

  return (
    <div id='home' className='bg-bg min-h-screen lg:h-[850px] w-full relative lg:overflow-hidden'>
      <div className='h-full relative z-10 flex flex-col pt-[100px] lg:pt-0 lg:flex-row-reverse justify-center w-[85vw] lg:justify-between lg:gap-16 lg:w-[80vw] 2xl:max-w-[1400px] m-auto items-center'>

        <div ref={imageRef} className={`relative ${imageInView ? 'animate-bubble-in' : 'opacity-0'}`}>
          <Frame className='opacity-50 absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 aspect-[3/4] object-cover w-[250px] md:w-[400px] 2xl:w-[500px]' />
          <img src={headshot} className='relative z-10 aspect-[3/4] object-cover max-w-[150px] md:max-w-[250px] 2xl:max-w-[300px] rounded-xl'></img>
        </div>

        <div
          ref={textRef}
          className={`text-center pt-28 lg:text-start flex flex-col gap-4 w-fit md:max-w-[500px] lg:max-w-[700px] ${textInView ? 'animate-bubble-in' : 'opacity-0'}`}
          style={{ animationDelay: '60ms' }}
        >
            <h1 className='px-2 md:px-0 text-secondary'>
              <span className='color-effect'>Driven, Creative, Empathetic</span> Full Stack Web Developer
            </h1>
            <p className='px-10 md:px-0'>
              I’m Lindsey, a software developer with a creative eye and a love for building things that work beautifully. I care about thoughtful code, intuitive experiences, and making the tech world a little more human.
            </p>
            <ul className='flex gap-4 mt-1 md:mt-4 mx-auto lg:mx-0 p-10 md:p-0 pt-0'>
              <button className='text-outline-button'><a href={resume} target='_blank' >Resume</a></button>
              <button className='accent-button'><a onClick={() => smoothScroll('contact')}>Contact</a></button>
            </ul>
        </div>
      </div>
        
    </div>
  )
}

export default HomePageDesktop