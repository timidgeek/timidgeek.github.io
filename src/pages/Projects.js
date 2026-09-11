import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import projectsData from '../assets/data/projects.json'
import Sparkle from '../components/Sparkle'
import useInView from '../hooks/useInView'

const projectImages = require.context(
  '../assets/projects',
  false,
  /\.(png|jpe?g|gif|svg|webp)$/
);

const getImage = (filename) => projectImages(`./${filename}`);

const ProjectCard = ({ project }) => (
  <div className='flex flex-col lg:flex-row xl:flex-col rounded-[40px] overflow-hidden bg-light'>
    <div className='relative flex items-center justify-center bg-text/40 p-10 lg:w-2/5 xl:w-full'>
      <img src={getImage(project.image)} alt={project.title} className='max-h-[220px] w-auto object-contain rounded-xl' />
    </div>

    <div className='flex flex-col justify-between gap-4 p-8 lg:h-full lg:w-3/5 xl:w-full'>
      
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between gap-3'>
          <div className='flex items-center gap-3'>
            <span className='flex items-center justify-center rounded-full bg-primary/20 h-9 w-9 shrink-0'>
              <Sparkle style={{ height: 18, width: 18, color: 'var(--color-secondary)' }} />
            </span>
            <h4 className=''>{project.title}</h4>
          </div>
          {project.date && (
            <span className='text-xs text-text/50 font-medium shrink-0'>{project.date}</span>
          )}
        </div>
        <p className='text-text/75 text-sm'>{project.body}</p>
      </div>

      <div>
        <ul className='flex flex-wrap gap-2 mt-3 xl:justify-center'>
          {project.skills.map((skill) => (
            <li key={skill} className='rounded-full bg-text/10 text-text text-sm px-4 py-1 font-medium '>
              {skill}
            </li>
          ))}
        </ul>
        {project.url && (
          <a
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='block accent-button mt-4 w-fit mx-auto lg:mx-0 xl:mx-auto text-center'
          >
            View Live Project
          </a>
        )}
      </div>

    </div>
  </div>
);

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const [sectionRef, sectionInView] = useInView();

  const prev = () => setCurrent((i) => (i - 1 + projectsData.length) % projectsData.length);
  const next = () => setCurrent((i) => (i + 1) % projectsData.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div id='projects' className='bg-bg flex flex-col p-10 md:pt-20 lg:p-0 lg:py-20'>
      <div
        ref={sectionRef}
        className={`md:w-[85vw] 2xl:max-w-[1400px] mx-auto ${sectionInView ? 'animate-bubble-in' : 'opacity-0'}`}
      >
        <div>
          <h1 className=''>Selected Work</h1>
          <p>Recent projects from my portfolio.<span className='text-secondary'>*</span></p>
          <p className='italic text-xs mt-2 text-secondary'>* Please note that the majority of my work is live and client facing, and does not exist in a portfolio due to prior employment agreements.</p>
        </div>

        <div className='pt-10 hidden xl:grid xl:grid-cols-3 gap-8'>
          {projectsData.map((project) => (
            <ProjectCard key={project.image} project={project} />
          ))}
        </div>

        <div className='pt-10 xl:hidden'>
          <div className='overflow-hidden' onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div key={projectsData[current].image} className='animate-fade-slide'>
              <ProjectCard project={projectsData[current]} />
            </div>
          </div>

          <div className='flex items-center justify-center gap-6 mt-6'>
            <button
              onClick={prev}
              aria-label='Previous project'
              className='border-2 border-text rounded-full w-10 h-10 flex items-center justify-center hover:bg-text hover:text-bg transition-colors'
            >
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </button>

            <div className='flex items-center gap-2'>
              {projectsData.map((project, i) => (
                <button
                  key={project.image}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${i === current ? 'bg-secondary' : 'bg-text/20'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label='Next project'
              className='border-2 border-text rounded-full w-10 h-10 flex items-center justify-center hover:bg-text hover:text-bg transition-colors'
            >
              <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
          </div>
        </div>
      </div>
      <hr className='block md:mx-10 lg:mx-52 xl:hidden mt-14'></hr>
    </div>
  )
}

export default Projects
