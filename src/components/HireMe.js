import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flexitems-center justify-center overflow-hidden md:right-0 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-32">
        <CircularText
          className={'fill-dark animate-spin-slow dark:fill-light'}
        />
        <Link
          href="https://wa.link/00w267"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-dark text-light shaddow-md border border-solid border-dark w-24 h-24 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-16 md:h-16 md:text-[10px]"
        >
          Me Contrate
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
