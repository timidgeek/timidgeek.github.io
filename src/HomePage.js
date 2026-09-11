import './HomePage.css';
import React from 'react';
import Sparkle from './components/Sparkle';
import HomepageGroupSVG from './components/HomepageGroupSVG';
import smoothScroll from './smoothScroll';
import headshot from './assets/images/headshot_cropped.jpg'

function HomePage() {

  return (
    <div id='home' className='bg-bg min-h-screen w-full mobile-home relative overflow-hidden'>
      {/* <HomepageGroupSVG style={{width:'90%'}} /> */}
      <header className='flex flex-col gap-4 text-center mx-auto w-fit md:text-left lg:text-left'>
        <img src={headshot} className='w-60 h-60 rounded-full mt-10'/>
        
        <Sparkle style={{height:80, width:80, color:'var(--color-secondary)'}} className='mx-auto mt-1/6 xs:mt-5 md:hidden lg:hidden' />
        <h2 className='lg:text-2xl md:mt-10 lg:mt-20 '>
          <span className='color-effect'>Welcome</span> <br/>to my website.
        </h2>
        <div className='mx-2/12 flex flex-col gap-3 my-6 xs:my-0 xs:mx-0 md:mx-0 lg:mx-0'>
          <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
          <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
        </div>
        <ul className='flex gap-4 mt-4 justify-center text-md md:justify-start lg:justify-start'>
          <button className='navy-button'><a onClick={() => smoothScroll('aboutmob')}>About</a></button>
          <button className='teal-button'><a onClick={() => smoothScroll('contactmob')}>Contact</a></button>
        </ul>
      </header>
    </div>
  );
}
//bg-bg/50 rounded-[10px] lg:p-4
export default HomePage;
