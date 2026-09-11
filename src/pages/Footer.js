import React, { forwardRef, useState, useEffect } from 'react';
import Sparkle from '../components/Sparkle';
import HamburgerMenu from './HamburgerMenu';
import smoothScroll from '../smoothScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = forwardRef((props, ref) => {

  document.addEventListener('DOMContentLoaded', function() {
		const icon = document.getElementById('nav-icon4');
	
		if (icon) {
			icon.addEventListener('click', function() {
				this.classList.toggle('open');
			});
		}
	});

  return (
    <div ref={ref} id='footer' className='bg-text w-full text-light z-[55] relative lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between'>
      <div>
        <nav className='flex'>
          <div className='p-5 xxs:pl-5 items-center w-full'>
            <h3><a href="/" onClick={smoothScroll}>Thanks for stopping by.</a></h3>

            <div className='flex flex-row align-middle pt-1 text-xs'>
              <p>Website by <span><a href='https://www.linkedin.com/in/timidgeek/' className='hover-effect-pink' target='_blank'>Lindsey Thomas</a></span></p>
              <Sparkle className='bg-primary/20 rounded-full p-1 h-4 w-4 md:h-5 md:w-5' style={{display:'inline-block', color:'var(--color-secondary)', margin:'0 0.5rem'}} />
              <button><a href='https://timidgeek.com/' className='hover-effect-pink' target='_blank'>timidgeek</a></button>
            </div>
          </div>
        </nav>

        <div className='lg:hidden xl:hidden 2xl:hidden'>
          <HamburgerMenu position='bottom' />
        </div>
      </div>

      <ul className='hidden header-nav lg:flex items-center gap-10 pr-10'>
        <li><button onClick={() => smoothScroll('about')}>About</button></li>
        <li><button onClick={() => smoothScroll('projects')}>Projects</button></li>
        <li><button onClick={() => smoothScroll('contact')}>Contact</button></li>
        <li><a href='https://www.linkedin.com/in/timidgeek/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} size='xl' /></a></li>
      </ul>


    </div>
  )
});

Footer.displayName = 'Footer';

export default Footer