import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import carouselItems from '../assets/data/projects.json';

const Sparkle = () => (
  <svg style={{height:20, width:20, minWidth:20, color:'var(--color-secondary)', marginRight:'0.5rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 232">
    <g><path style={{opacity:0.991}} fill="currentColor" d="M 114.5,3.5 C 123.479,69.4779 161.145,106.811 227.5,115.5C 179.723,119.813 145.557,143.48 125,186.5C 119.787,199.686 116.62,213.353 115.5,227.5C 111.187,179.723 87.5202,145.557 44.5,125C 31.3138,119.787 17.6471,116.62 3.5,115.5C 53.6836,111.015 88.5169,85.6819 108,39.5C 112.403,27.8925 114.569,15.8925 114.5,3.5 Z"/></g>
  </svg>
);

const projects = require.context(
  '../assets/projects',
  false,
  /\.(png|jpe?g|gif|svg|webp)$/
);

const getImage = (filename) => projects(`./${filename}`);

const ServicesDesktop = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent(i => (i + 1) % carouselItems.length), 4000);
  };

  const prev = () => { setCurrent(i => (i - 1 + carouselItems.length) % carouselItems.length); startInterval(); };
  const next = () => { setCurrent(i => (i + 1) % carouselItems.length); startInterval(); };

  // useEffect(() => { startInterval(); return () => clearInterval(intervalRef.current); }, []);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div id='services' className='bg-bg bg-glow-lg flex flex-col py-10 md:py-20 '>
        <div className='md:w-[85vw] 2xl:max-w-[1400px] mx-auto'>
          <div>
            <h1 className='color-effect'>Selected Work</h1>
            <p className='italic'>Please note that the majority of my work is live and client facing, and does not exist in a portfolio due to prior employment agreements.</p>
          </div>
          <section className='pt-10 flex flex-col md:flex-row '>
          <div
            className='flex-col w-full flex-1 flex justify-center bg-bg border-2 border-text p-10 mr-[3rem] xl:mr-[4rem] rounded-[50px] gap-6'
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div key={current} className='flex flex-1 justify-center animate-fade-slide'>
              <img
                src={getImage(carouselItems[current].image)}
                alt=""
                className='max-w-[50%]'
              />
              <div className='flex flex-col gap-5 p-8'>
                <h4>{carouselItems[current].title}</h4>
                <p>{carouselItems[current].body}</p>
              <ul className='flex flex-wrap gap-3'>
                {carouselItems[current].skills.map((skill) => (
                  <li key={skill} className='flex flex-row items-center'>
                    <Sparkle />
                    {skill}
                  </li>
                ))}
              </ul>
              {carouselItems[current].url && (
                <a
                  href={carouselItems[current].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-button mx-auto"
                >
                  View Live Project
                </a>
              )}
            </div>
            </div>
            <div className='flex items-center justify-between md:gap-4'>
              <button onClick={prev} className='border-2 border-text rounded-full w-10 h-10 flex items-center justify-center hover:bg-text hover:text-bg transition-colors'>
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </button>
              <span className='text-sm'>{current + 1} / {carouselItems.length}</span>
              <button onClick={next} className='border-2 border-text rounded-full w-10 h-10 flex items-center justify-center hover:bg-text hover:text-bg transition-colors'>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            </div>
          </div>
          </section>


          {/* <section className='flex flex-1 flex-col gap-3 md:gap-[3rem] xl:gap-[4rem]'> 
            <div className='flex-col gap-5 bg-bg border-2 border-text p-10 rounded-[50px]'>
              <div className=''>
                <h4>Skills</h4>
                <ul className='mt-4 flex flex-col gap-3'>
                  <li className='flex flex-row items-center'><Sparkle />HTML</li>
                  <li className='flex flex-row items-center'><Sparkle />CSS</li>
                  <li className='flex flex-row items-center'><Sparkle />Javascript</li>
                  <li className='flex flex-row items-center'><Sparkle />C# / ASP.NET</li> 
                  <li className='flex flex-row items-center'><Sparkle />MS SQL Server</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col md:gap-5 bg-bg border-2 border-text p-10 rounded-[50px]'>
              <h4>Lorem Ipsum</h4>
              <p>
              Lindsey made this beautiful website.<br/>

              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section> */}

      </div>

    </div>

    
  )
}

export default ServicesDesktop