import { useState, useEffect } from 'react';
import squiggle from '../assets/svgs/squiggle-circle.svg';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import smoothScroll from '../smoothScroll';
import SocialButton from '../components/SocialButton';
import useInView from '../hooks/useInView';

const AboutDesktop = () => {
  const [showMore, setShowMore] = useState(false);
  const [avatarRef, avatarInView] = useInView();
  const [textRef, textInView] = useInView();

  useEffect(() => {
    if (showMore) {
      smoothScroll('about-more');
    }
  }, [showMore]);

  return (
    <div id='about' className='bg-text text-bg w-full md:py-20 xl:py-32'>
      <div className='md:w-[85vw] 2xl:max-w-[1400px] mx-auto p-10 md:p-0'>
        <div className=' flex flex-col lg:flex-row justify-between items-center mx-auto gap-10'>
          <section ref={avatarRef} className={`flex items-center justify-center flex-col gap-5 ${avatarInView ? 'animate-bubble-in' : 'opacity-0'}`}>
            <div className='flex items-center justify-center w-[309px] h-[308px] md:w-[329px] md:h-[328px] aspect-square relative'>
              <img
                src={squiggle}
                className="absolute z-0"
                alt=""
              />
              <div className='relative z-10 pb-2 pd:mb-0 text-center flex flex-col justify-center items-center aspect-square'>
                <div className="bubble-container bubble-container-smaller">
                  <div>
                    <span className="letter" style={{ '--i': 0 }}>l</span>
                    <span className="letter" style={{ '--i': 1 }}>i</span>
                    <span className="letter" style={{ '--i': 2 }}>n</span>
                    <span className="letter" style={{ '--i': 3 }}>d</span>
                    <span className="letter" style={{ '--i': 4 }}>s</span>
                    <span className="letter" style={{ '--i': 5 }}>e</span>
                    <span className="letter" style={{ '--i': 6 }}>y</span><br></br>
                    <span className="letter" style={{ '--i': 7 }}>t</span>
                    <span className="letter" style={{ '--i': 8 }}>h</span>
                    <span className="letter" style={{ '--i': 9 }}>o</span>
                    <span className="letter" style={{ '--i': 10 }}>m</span>
                    <span className="letter" style={{ '--i': 11 }}>a</span>
                    <span className="letter" style={{ '--i': 12 }}>s</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex gap-3 items-center mt-2'>
              <SocialButton icon={faCommentDots} onClick={() => smoothScroll('contact')} label='Email' />
              <SocialButton icon={faInstagram} href='https://www.instagram.com/timidgeek/' label='Instagram' />
              <SocialButton icon={faLinkedin} href='https://www.linkedin.com/in/timidgeek/' label='LinkedIn' />
            </div>
          </section>
          <section
            ref={textRef}
            className={`flex-1 flex-col gap-4 max-w-[700px] flex justify-center h-auto text-background ${textInView ? 'animate-bubble-in' : 'opacity-0'}`}
            style={{ animationDelay: '60ms' }}
          >
            <h1>About Me</h1>
            <p>
              I love software, especially when it works well. I focus on clean code, thoughtful architecture, and creating experiences that are intuitive and fun to use. I am constantly encountering real-world problems that make me think, <em className='text-primary'>"I wish I could hop into that code and fix that"</em>, because I know I could. I love the challenge of taking something that is clunky or broken and figuring out how to make it better.
            </p>

            {!showMore && (
              <button className='text-start italic text-primary hover:text-primary/80 transition-colors mt-5' onClick={() => setShowMore(true)}>read more ...</button>
            )}

          </section>

        </div>

        {showMore && (
          <div id='about-more' className='pt-20'>
            <hr></hr>
            <section className='flex flex-col md:flex-row gap-10 md:gap-20 mt-10 md:mt-20'>

              <div className='w-full md:w-1/2 flex flex-col gap-4'>
                <h2 className='mb-4'>Motivation</h2>
                <p>
                  I am motivated by the opportunity to merge technology with creativity. I want to build things that are not only functional, but thoughtful, personal, and enjoyable to use. Empathy is an important part of that — understanding that every feature, interface, and decision ultimately affects a person. I'm ready to make something different, exciting, and new.
                </p><p>
                  I am also motivated by growth and success. I want to keep learning, keep improving, and push myself to become better at what I do. I don't want to simply build software and move on; I want to care about what I'm building, understand why it matters, and always look for ways to make it better. I think technology is at its best when technical skill, creativity, and human perspective are all given room to exist together.
                </p>
              </div>
              <div className='w-full md:w-1/2 flex flex-col gap-4'>
                <h2 className='mb-4'>Goals</h2>
                <p>
                  My dream is to merge my technical skills, my drive to strive for greatness, and my creative ability into one incredible job. I have worked hard to get where I am, and I am proud to be on that path. I am excited for whatever the future holds and eager to continue growing in the right direction.
                </p><p>
                  I am always growing my technical skills and looking for a company whose expectations I can exceed, whose culture I can fit into and genuinely stand behind, and whose people care about what they are building. I want to contribute meaningfully to a team that values individuality, empathy, and the pursuit of great work.
                </p><p>
                  That combination of creativity and technology is really what I am looking for. I want to build something entirely new and unthought of, and I want to continue to strive to create great things in all avenues of my life.</p>
              </div>
            </section>
          </div>
        )}

      </div>
    </div>
  )
}

export default AboutDesktop