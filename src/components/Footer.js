import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:space-y-2">
        <span>
          {new Date().getFullYear()} &copy; Todos os direitos reservados.
        </span>
        <div className="flex items-center">
          Feito com{' '}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;
          </span>{' '}
          por &nbsp;
          <Link
            href="mailto:maudneto@gmail.com"
            className="underline underline-offset-2"
          >
            Mauricio Neto
          </Link>
        </div>
        <Link
          href="mailto:maudneto@gmail.com"
          target={'_blank'}
          className="underline underline-offset-2"
        >
          Diga olá
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
