import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="mt-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-justify md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64 lg:my-32">
      <h2 className="font-bold text-8xl mb-32 w-sull text-center md:text-6xl xs:text-4xl md:mb-16">
        Experiência
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-1 w-[4px] h-full bg-dark  dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Desenvolvedor Full Stack"
            company="DietSystem"
            companyLink="https://dietsystem.com.br/"
            time="nov 2021 - jan 2023"
            address="Remoto"
            work="Atuei como desenvolvedor full stack JavaScript e PHP, com muito foco em CSS e implementação de várias bibliotecas JS para melhorar a experiência do usuário e a funcionalidade do software, seguindo criações extremamente fidedignas ao Figma."
          />

          <Details
            position="Desenvolvedor Flutter"
            company="HomeQR"
            companyLink=""
            time="out 2019- out 2021"
            address="Campo Grande, MS"
            work="Fui responsável por implementar recursos e soluções inovadoras para o aplicativo de atendimentos domiciliares. Isso envolveu a utilização de várias bibliotecas para acessar funções como geolocalização, câmera, scan de QR code e outras, além de garantir que todas as partes do projeto estivessem integradas e funcionando em harmonia. Trabalhei no projeto durante todo o ciclo de desenvolvimento, desde a estruturação do aplicativo móvel até a última versão lançada."
          />

          <Details
            position="Estagiário de TI"
            company="Advocacia Geral da União"
            companyLink="https://www.gov.br/agu/pt-br"
            time="fev 2019 - jun 2019"
            address="Campo Grande, MS"
            work="Durante meu estágio obrigatório no IFMS, tive a oportunidade de trabalhar na área de TI da AGU, onde apliquei meus conhecimentos em planilhas, redes de computadores, formatação e backups de computadores na prática. Meu papel foi fundamental para garantir que os sistemas estivessem funcionando corretamente e os dados protegidos, além de solucionar problemas técnicos em tempo hábil para minimizar impactos nos negócios."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
