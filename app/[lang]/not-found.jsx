"use client"
import { useState, useEffect } from 'react';
import ErrorPage from './components/ErrorPage';
// import { Navbar } from '@nextui-org/react';
import Footer from './components/footer';
import Navbar from './components/navbar';

const UnkownPage = () => {
    const messages = [
        'Have you lost your way, kiddo?',
        'Damn it! This dead-end road.',
        'The Aurors blocked this road, Harry!',
        'Oops! Looks like you took a wrong turn.',
        'This page seems to be missing.',
        'Well, this is awkward... Nothing here!',
        '404: The page you are looking for does not exist.',
        'You have reached the end of the internet.',
        'This page is taking a break. Try again later.',
        'Are you sure you’re in the right place?',
        'Houston, we have a problem!',
        'Seems like you’re trying to reach a page that doesn’t exist.',
        'Sorry, we couldn’t find that page.',
        'This is not the page you are looking for.',
        'Looks like you’ve hit a dead end.',
        'This page must have moved to another dimension.',
        'Yikes! This page flew away.',
        'The page you are looking for has been abducted by aliens.',
        'Nothing to see here, move along!',
        'The page you are trying to reach is not available right now.'
    ];

    const [randomMessage, setRandomMessage] = useState("");

    useEffect(() => {
        setRandomMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, []);


    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white overflow-hidden ">

        <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 0.5%, 50.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8787dc] to-[#3c3cbf] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
      < Navbar />



      <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8787dc] to-[#3c3cbf] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
   { randomMessage ? <ErrorPage code={404} message={randomMessage} /> : null}
          <Footer/>

      {/* <DiscordVisualizer /> */}
    </div>
    )
}

export default UnkownPage;
