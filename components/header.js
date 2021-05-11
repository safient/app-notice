import React, { useState } from 'react';
import Link from 'next/link';
import { Nav } from './NavBar';

export const Header = () => {
  const [status, setStatus] = useState('');
  function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  }

  return (
    <>
      <div className='relative h-full '>
        <Nav />
        <img
          src='/images/background.png'
          className='absolute inset-0 object-cover w-full h-screen '
          alt=''
        />
        <div className='relative  '>
          <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
            <div className='flex flex-col items-center justify-between xl:flex-row'>
              <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
                <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
                  Hey,
                  <span className='text-teal-accent-400'>there 👋</span>
                </h2>
                <p className='max-w-xl mb-4 text-base text-white md:text-lg'>
                  We are working on it. In the meantime, check out our{' '}
                  <a
                    href='http://getsafex.co/'
                    className='text-teal-accent-400'
                    target='_next'
                  >
                    website
                  </a>{' '}
                  for information and join us on{' '}
                  <a
                    href='https://twitter.com/getsafex'
                    className='text-teal-accent-400'
                    target='_next'
                  >
                    Twitter
                  </a>{' '}
                  and{' '}
                  <a
                    href='https://discord.com/invite/tttGQAwuZx'
                    className='text-teal-accent-400'
                    target='_next'
                  >
                    Discord
                  </a>{' '}
                  for updates.
                </p>
              </div>

              <div className='w-full max-w-xl xl:px-8 xl:w-5/12'>
                <div className='bg-white rounded shadow-2xl p-7 sm:p-10'>
                  <h3 className='mb-4 text-xl font-semibold sm:text-center text-gray-700 sm:mb-6 sm:text-2xl'>
                    Sign up for updates
                  </h3>
                  {status === 'SUCCESS' ? (
                    <p className='text-primary-yellow'>
                      Thank you for getting in touch. We will get back to you
                      soon.
                    </p>
                  ) : (
                    <form
                      onSubmit={submitForm}
                      action='https://formspree.io/xbjzvrkq'
                      method='POST'
                    >
                      <div className='mb-1 sm:mb-2'>
                        <label
                          htmlFor='firstName'
                          className='inline-block mb-1 text-gray-700 font-medium'
                        >
                          First name
                        </label>
                        <input
                          placeholder='John'
                          required
                          name='name'
                          type='text'
                          className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                          id='firstName'
                          name='firstName'
                        />
                      </div>

                      <div className='mb-1 sm:mb-2'>
                        <label
                          htmlFor='email'
                          className='inline-block mb-1 text-gray-700 font-medium'
                        >
                          E-mail
                        </label>
                        <input
                          placeholder='john.doe@example.org'
                          required
                          name='email'
                          type='email'
                          className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                          id='email'
                          name='email'
                        />
                      </div>
                      <div className='mt-4 mb-2 sm:mb-4'>
                        <button
                          type='submit'
                          className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                        >
                          Notify Me
                        </button>
                      </div>
                      <p className='text-xs text-gray-600 sm:text-sm'>
                        We respect your privacy. Unsubscribe at any time.
                      </p>

                      {status === 'ERROR' && (
                        <p className='text-primary-yellow'>
                          Ooops! There was an error.
                        </p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
