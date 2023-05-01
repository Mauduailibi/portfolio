import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/avatar_2.jpeg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 300 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const sobre = () => {
  return (
    <>
      <Head>
        <title>Mauricio Neto | Sobre mim</title>
        <meta name="description" content="Mauricio Neto | Sobre mim" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Code. Create. Inspire."
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:!col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Apresentação
              </h2>
              <p className="font-medium text-justify">
                Olá, eu sou o Mauricio! Sou um desenvolvedor web com muito foco
                em frontend e desenvolvimento mobile. Tenho paixão por criar
                experiências digitais bonitas, funcionais e centradas no
                usuário. Com 4 anos de experiência na área, estou sempre
                procurando maneiras novas e inovadoras de dar vida às ideias de
                meus clientes.
              </p>
              <p className="my-4 font-medium text-justify">
                Web Design é muito mais do que simplesmente tornar as coisas
                visualmente atraentes. É sobre solucionar problemas complexos,
                compreender as necessidades dos usuários e criar experiências
                intuitivas e agradáveis que superem suas expectativas. O design
                bem-sucedido é aquele que se concentra nas pessoas, em seus
                desejos e necessidades, e é capaz de comunicar de forma clara e
                eficaz a mensagem de uma marca ou produto.
              </p>
              <p className="font-medium text-justify">
                Quando se trata de projetos digitais, meu compromisso com a
                excelência em design e pensamento centrado no usuário é
                inabalável. Seja trabalhando em um site, aplicativo móvel ou
                outro produto digital, estou empenhado em criar experiências
                significativas e envolventes que atendam às necessidades do
                usuário e superem suas expectativas. Estou animado com a
                possibilidade de trazer minha paixão, habilidades e experiência
                para o seu próximo projeto e ajudá-lo a alcançar o sucesso
                digital.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:!col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Mauricio Neto"
                className="w-full h-auto rounded-2xl"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75">
                  Anos de experiência
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75">
                  Projetos finalizados
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />
                  M+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75">
                  Linhas de código
                </h2>
              </div>
            </div>
          </div>

          <Skills />

          <Experience />

          <Education />
        </Layout>
      </main>
    </>
  );
};

export default sobre;
