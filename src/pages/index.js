import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/svgs/avatar.svg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauricio Duailibi Neto</title>
        <meta name="description" content="Mauricio Duailibi Neto" />
        {/* Event snippet for Contato conversion page*/}
        <Script>
          {`gtag('event', 'conversion', {'send_to': '${process.env.GA_MEASUREMENT_ID}/${process.env.GA_MEASUREMENT_EVENT}'});`}
        </Script>
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light lg:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full md:pb-4">
              <Image
                src={profilePic}
                alt="Mauricio Duailibi Neto"
                className="w-8/12 h-auto mx-auto"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Criando Experiências Digitais Surpreendentes para Você."
                className="!text-6xl !text-left lg:!text-center sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Sou um desenvolvedor web e mobile apaixonado por criar soluções
                digitais inovadoras. Tenho habilidade de traduzir requisitos em
                soluções elegantes e intuitivas, elevando a presença digital de
                sua empresa e melhorando a experiência do usuário. Entre em
                contato para saber como posso ajudá-lo a alcançar seus objetivos
                digitais.
              </p>
              <div className="flex flex-row md:flex-col items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://wa.link/00w267"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-8 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-8 md:text-base"
                >
                  <span className="whitespace-nowrap">Fale comigo!</span>
                  <LinkArrow className={'w-6 ml-2'} />
                </Link>
                <Link
                  href="/curriculum.pdf"
                  target={'_blank'}
                  className="ml-4 mt-0 md:mt-4 text-lg font-medium italic capitalize text-dark underline dark:text-light md:text-base"
                >
                  Curriculum
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  );
}
