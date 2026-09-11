import React from 'react';
import Sparkle from '../components/Sparkle';

function Services() {
  return (
    <div id='servicesmob' className='bg-accent text-text h-fit w-full flex flex-col services-mobile sm:bg-cover md:bg-cover lg:bg-cover'>
      <section className='flex items-center flex-col'>
        <div className='bg-accent text-bg rounded-[50px] p-5 text-center mx-4 mt-8 xxs:mx-5 sm:mx-10 md:mx-20 lg:mx-0 lg:p-6'>
          <h2 className='xxs:text-2xl lg:text-4xl'>Lorem ipsum</h2>
          <p className='lg:text-xl'>Lorem ipsum et cetera</p>
        </div>
      </section>

      <section className='flex-col gap-5 p-10 xxs:p-5 lg:p-5 xxs:my-7'>
        <div className='w-fit items-center mx-auto'>
          <h4 className='text-center'>Section</h4>
          <ul className='ml-2 mt-4 flex flex-col gap-3'>
            <li className='flex flex-row items-center'><Sparkle style={{height:20, width:20, minWidth:20, color:'var(--color-accent)', marginRight:'0.5rem'}} />Option one</li>
            <li className='flex flex-row items-center'><Sparkle style={{height:20, width:20, minWidth:20, color:'var(--color-accent)', marginRight:'0.5rem'}} />Option two</li>
            <li className='flex flex-row items-center'><Sparkle style={{height:20, width:20, minWidth:20, color:'var(--color-accent)', marginRight:'0.5rem'}} />Option three</li>
            <li className='flex flex-row items-center'><Sparkle style={{height:20, width:20, minWidth:20, color:'var(--color-accent)', marginRight:'0.5rem'}} />Option four</li> 
            <li className='flex flex-row items-center'><Sparkle style={{height:20, width:20, minWidth:20, color:'var(--color-accent)', marginRight:'0.5rem'}} />Option five</li>
          </ul>
        </div>
      </section>

      <section className='flex-col flex justify-center py-10 pt-0 mx-14 xxs:mx-5 md:mx-20 lg:mx-40'>

      <hr className='border-secondary border-[2px] mx-10 my-5'></hr>

        <div className='flex flex-col gap-1'>
            <h4>Another Section</h4>
            <p>More information is found here.</p>
        </div>

        <hr className='border-secondary border-[2px] mx-10 my-5'></hr>

        <div className='flex flex-col gap-1 text-right'>
          <h4>Last Section</h4>
          <p>More information here.</p>
        </div>

        <hr className='border-secondary border-[2px] mx-10 my-5'></hr>

        <div className='flex flex-col gap-1'>
          <h4>One Last Section</h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <hr className='border-secondary border-[2px] mx-10 my-5'></hr>

        <div className='flex flex-col gap-1 text-right '>
          <h4>Surprise Extra Section</h4>
          <p>Lorem ipsum et cetera.</p>
        </div>
      </section>

      <section className='flex items-center flex-col sm:mx-10 md:mx-20'>
        <div className='bg-accent text-bg rounded-[50px] p-5 text-center mx-4 mt-4 xxs:p-2 lg:p-1'>
          <h2 className='text-2xl xxs:pt-4 lg:text-3xl'>More Info Here</h2>
          <p className='lg:text-xl m-4'>You can write whatever you want here.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>

  </div>
  )
}

export default Services      