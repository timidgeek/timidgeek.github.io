import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import smoothScroll from '../smoothScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import Sparkle from '../components/Sparkle';

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [pastContact, setPastContact] = useState(false);

	useEffect(() => {
		// handle nav-icon click (keeps previous behavior)
		const icon = document.getElementById('nav-icon4');
		const onIconClick = function () { this.classList.toggle('open'); };
		if (icon) icon.addEventListener('click', onIconClick);

		// scroll handler to update `isScrolled` / `pastContact`
		const onScroll = () => {
			setIsScrolled(window.scrollY > 0);
			const contact = document.getElementById('contact');
			setPastContact(contact ? contact.getBoundingClientRect().top <= window.innerHeight : false);
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		// initialize
		onScroll();

		return () => {
			if (icon) icon.removeEventListener('click', onIconClick);
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<>
			<header className={`fixed top-0 w-full z-[55] px-5 md:px-7 ${isScrolled ? 'scrolled' : ''}`}>
				<nav className='flex justify-between'>
					<div className='flex'>
						<Sparkle className='my-auto h-8 w-8 md:h-10 md:w-10 bg-primary/20 p-2 rounded-full' color='var(--color-secondary)' />
						<h4 className='text-xl lg:text-2xl p-5 pl-4 items-center'><a onClick={() => smoothScroll('top')} className='cursor-pointer hover-effect'>Lindsey Thomas</a></h4>
					</div>
					<div className='lg:hidden'>
						<HamburgerMenu position='top' />
					</div>
					<ul className='hidden header-nav lg:flex text-text items-center gap-10'>
						<li><button onClick={() => smoothScroll('about')}>About</button></li>
						<li><button onClick={() => smoothScroll('projects')}>Projects</button></li>
						<li><button onClick={() => smoothScroll('contact')}>Contact</button></li>
						<li><a href='https://www.linkedin.com/in/timidgeek/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} size='xl' /></a></li>
					</ul>
				</nav>
			</header>
			<button
				onClick={() => smoothScroll('top')}
				className={`fixed bottom-5 right-5 z-50 bg-bg/60 border-text border-2 text-text h-12 w-12 rounded-full shadow-lg 
		hover:bg-bg transition-all duration-300
		${isScrolled && !pastContact ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
			>
				<FontAwesomeIcon icon={faArrowUpLong} />
			</button>
		</>
	)
}

export default Header;