import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sparkle from '../components/Sparkle';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import smoothScroll from '../smoothScroll';
import SocialButton from '../components/SocialButton';
import useInView from '../hooks/useInView';

const Contact = () => {
  const [textRef, textInView] = useInView();
  const [formRef, formInView] = useInView();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear the error for this field
    setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!formData.email.includes('@')) errors.email = 'Email must contain "@"';
    if (!formData.phone) errors.phone = 'Phone is required';
    if (!formData.message) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://formspree.io/f/placeholder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert('Thank you for your submission, Lindsey will get back to you as soon as possible!');
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          alert('There was an error submitting the form. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='bg-bg relative flex justify-center mx-auto pt-0 pb-10 md:pb-20 2xl:pb-32'>
      <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-[85vw] 2xl:max-w-[1200px] '>

        <div
          ref={textRef}
          className={`flex text-center flex-col gap-4 w-full lg:w-1/2 ${textInView ? 'animate-bubble-in' : 'opacity-0'}`}
        >
          <div>
            <Sparkle className='mx-auto bg-primary/20 p-3 lg:p-4 rounded-full my-2 h-12 w-12 md:h-16 md:w-16' color='var(--color-secondary)' />
            <h1>Let's Connect!</h1>
          </div>
          <p className='text-sm md:text-base'>
            I'd love to hear from you. This form goes to my email inbox.<br />You can also message me on <a href='https://www.linkedin.com/in/timidgeek/' target='_blank' rel='noreferrer' className='hover-effect-pink inline-flex items-center gap-1'>LinkedIn <FontAwesomeIcon icon={faLinkedin} /></a> for the speediest response.
          </p>

          <div className='pt-2 lg:pt-5 flex justify-center gap-3 items-center'>
            <SocialButton icon={faCommentDots} onClick={() => smoothScroll('contact')} label='Email' />
            <SocialButton icon={faInstagram} href='https://www.instagram.com/timidgeek/' label='Instagram' />
            <SocialButton icon={faLinkedin} href='https://www.linkedin.com/in/timidgeek/' label='LinkedIn' />
          </div>
        </div>

        <div
          ref={formRef}
          className={`mt-8 w-full lg:mt-0 bg-light lg:w-1/2 md:max-w-[550px] rounded-[40px] ${formInView ? 'animate-bubble-in' : 'opacity-0'}`}
          style={{ animationDelay: '60ms' }}
        >
          <form
            // action="https://formspree.io/f/mzzpdbon"
            // method="POST"
            className="bg-text/40 space-y-4 p-6 rounded-[40px] lg:p-8"
            onSubmit={handleSubmit}>

            <div>
              <label htmlFor="name" className="block text-text mb-1 ml-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-full bg-text text-light border-2"
                required
              />
              {formErrors.name && <span className='text-red-500'>{formErrors.name}</span>}
            </div>

            <div className='flex flex-col md:flex-row justify-between gap-4 lg:gap-6'>
              <div className='md:w-[50%]'>
                <label htmlFor="email" className="block text-text mb-1 ml-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                  className="w-full px-3 py-2 rounded-full bg-text text-light border-2"
                  required
                />
                {formErrors.email && <span className='text-red-500'>{formErrors.email}</span>}
              </div>

              <div className='md:w-[50%]'>
                <label htmlFor="phone" className="block text-text mb-1 ml-2">Phone</label>
                <InputMask
                  mask="(999) 999-9999"
                  maskChar=" "
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-full bg-text text-light border-2"
                  required
                />
                {formErrors.phone && <span className='text-red-500'>{formErrors.phone}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-text mb-1 ml-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-3xl bg-text text-light border-2"
                required
              ></textarea>
              {formErrors.message && <span className='text-red-500'>{formErrors.message}</span>}
            </div>

            <div className='flex justify-center'>
              <button type='submit' className='accent-button' disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact