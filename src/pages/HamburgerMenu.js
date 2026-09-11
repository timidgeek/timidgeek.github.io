import React, { useState, useEffect } from 'react';
import Sparkle from '../components/Sparkle';
import SocialButton from '../components/SocialButton';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

import smoothScroll from '../smoothScroll';

// Reference-counted so two menu instances (Header + Footer) can't step on
// each other's cleanup if one closes while the other is still open.
let scrollLockCount = 0;
const lockScroll = () => {
  scrollLockCount += 1;
  document.body.style.overflow = 'hidden';
};
const unlockScroll = () => {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) document.body.style.overflow = '';
};

const HamburgerMenu = ({ position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsOpen(!isOpen);
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    if (!isOpen) return;
    lockScroll();
    return unlockScroll;
  }, [isOpen]);

  return (
    <div>
      {/* {isOpen && (
      <header className='fixed top-1 left-6 p-4 z-50 xxs:p-2'> 
        <h4 className='text-xl items-center'>Lindsey Thomas</h4>
      </header>
      )} */}
      <div className='relative'>
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className={`absolute ${position === 'top' ? 'top-3' : 'bottom-6 right-3'} right-1 z-[70] focus:outline-none flex items-center justify-center w-10 h-10`}
        >
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <span className={`block h-[2px] w-5 transition-transform duration-300 ease-in-out origin-center ${position === 'top' ? 'bg-text' : 'bg-light'} ${isOpen ? 'translate-y-[12px] rotate-45 bg-text' : ''}`} />
            <span className={`block h-[2px] w-5 transition-opacity duration-200 ease-in-out ${position === 'top' ? 'bg-text' : 'bg-light'} ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-[2px] w-5 transition-transform duration-300 ease-in-out origin-center ${position === 'top' ? 'bg-text' : 'bg-light'} ${isOpen ? '-translate-y-[3px] -rotate-45 bg-text' : ''}`} />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-bg text-center z-[60] flex justify-center">
          <nav className="text-text text-xl tracking-widest my-auto flex flex-col items-center gap-8">
            <Sparkle
              className='mx-auto bg-primary/20 p-4 rounded-full h-20 w-20 animate-bubble-in'
              color='var(--color-secondary)'
            />
            <ul className="space-y-6 animate-bubble-in" style={{ animationDelay: '60ms' }}>
              <li><a href="/" onClick={toggleMenu} className='navy-button'>home</a></li>
              <li><a href="#about" onClick={toggleMenu} className='navy-button'>about</a></li>
              <li><a href="#projects" onClick={toggleMenu} className='navy-button'>projects</a></li>
              <li><a href="#contact" onClick={toggleMenu} className='navy-button'>contact</a></li>
            </ul>

            <div className='flex justify-center gap-3 items-center'>
              <SocialButton icon={faCommentDots} onClick={() => { toggleMenu(); smoothScroll('contact'); }} label='Email' />
              <SocialButton icon={faInstagram} href='https://www.instagram.com/timidgeek/' label='Instagram' />
              <SocialButton icon={faLinkedin} href='https://www.linkedin.com/in/timidgeek/' label='LinkedIn' />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;