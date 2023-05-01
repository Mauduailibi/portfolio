import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
  SunIcon,
  MoonIcon,
} from './Icons';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
                 h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
                 ${router.asPath == href ? 'w-full' : 'w-0'}
                 dark:bg-light
                `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MobileCustomLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
				   h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
				   ${router.asPath == href ? 'w-full' : 'w-0'}
				   dark:bg-dark
				  `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    localStorage.setItem('dark', isDark);
    document.documentElement.classList.toggle('dark', isDark);
  };

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? 'rotate-45 translate-y-1' : 'rotate-0 -translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'rotate-0 translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/sobre" title="Sobre mim" className="mx-4" />
          <CustomLink href="/projetos" title="Projetos" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/mauricio-duailibi-neto-b391a41a6/"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Mauduailibi"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mauduailibi/"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/Mauduailibi"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <TwitterIcon />
          </motion.a>

          <button
            onClick={toggleDarkMode}
            className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
          >
            {darkMode ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <MobileCustomLink href="/" title="Home" toggle={handleClick} />
            <MobileCustomLink
              href="/sobre"
              title="Sobre mim"
              toggle={handleClick}
            />
            <MobileCustomLink
              href="/projetos"
              title="Projetos"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.linkedin.com/in/mauricio-duailibi-neto-b391a41a6/"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Mauduailibi"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/mauduailibi/"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/Mauduailibi"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>

            <button
              onClick={toggleDarkMode}
              className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
            >
              {darkMode ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
