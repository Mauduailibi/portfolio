import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import gpt3_react from '../../public/images/projects/gpt3_react_cut.png';
import dietsystem from '../../public/images/projects/dietsystem_cut.png';
import software_ivo from '../../public/images/projects/software_ivo.png';
import hotelsoft from '../../public/images/projects/hotelsoft.png';
import TransitionEffect from '@/components/TransitionEffect';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shaddow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl sm:-right-2 sm:h-[102%] sm:w-full sm:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl text-dark dark:text-light font-bold xs:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        {github ? (
          <div className="mt-2 flex items-center">
            <Link
              href={github}
              target="_blank"
              className="w-10 dark:bg-light rounded-full"
            >
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
            >
              Acesse o projeto
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full h-full flex flex-col items-center justify-start rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl text-dark dark:text-light">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline text-dark dark:text-light md:text-base"
          >
            Acesse
          </Link>
          {github !== '/' ? (
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </article>
  );
};

const projetos = () => {
  return (
    <>
      <Head>
        <title>Mauricio Neto | Projetos</title>
        <meta name="description" content="Mauricio Neto | Projetos" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Codificando o futuro!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32  lg:gap-x-8 md:gap-y-24 sm:!gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={'HotelSoft'}
                summary={
                  'O HotelSoft é um software projetado para gerenciar eficientemente pequenas pousadas e hotéis. Com recursos de reserva, gestão financeira, controle de estoque e gestão de funcionários, o HotelSoft permite aos proprietários monitorar a ocupação dos quartos em tempo real, gerar relatórios financeiros e manter um controle preciso sobre seus gastos. Fácil de usar e personalizável, o HotelSoft é a solução ideal para proprietários de pousadas e hotéis que desejam gerenciar seus negócios com eficiência e eficácia.'
                }
                type="Projeto em desenvolvimento"
                link="/images\projects\hotelsoft.png"
                github=""
                img={hotelsoft}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title={'Dietsystem | Software para Nutricionistas'}
                type="Software Nutricional"
                link="https://dietsystem.com.br/"
                github="/"
                img={dietsystem}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title={
                  'Developing software IVO for clinical, laboratory, therapeutic and cost data collection for Sickle Cell Anemia'
                }
                type="Publicação científica"
                link="https://scholarsjournal.net/index.php/ijier/article/view/1858"
                github="/"
                img={software_ivo}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title={'Aplicação GPT-3 React'}
                summary={
                  'Este é um projeto de estudos em ReactJS que tem como tema a tecnologia GPT-3. A ideia é aplicar as habilidades em ReactJS no desenvolvimento de uma plataforma funcional e interativa que aborda o tema da tecnologia GPT-3. O objetivo é fornecer uma experiência de usuário única e envolvente com o uso de tecnologia de ponta.'
                }
                type="Projeto aplicado"
                link="/images\projects\gpt3_react_fullhd.png"
                github="https://github.com/Mauduailibi/gpt3_react"
                img={gpt3_react}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projetos;
