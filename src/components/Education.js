import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
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
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-justify md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64 lg:my-32">
      <h2 className="font-bold text-8xl mb-32 w-sull text-center md:text-6xl xs:text-4xl md:mb-16">
        Educação
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bacharelado em Engenharia de Petróleo"
            time="2021 - Presente"
            place="Universidade do Estado de Santa Catarina (UDESC)"
            info="Como estudante de Engenharia de Petróleo, estou aprendendo conceitos fundamentais da física, química e matemática aplicados à exploração, produção e refino de petróleo. Estou desenvolvendo habilidades em gestão de projetos e análise de dados para projetar, gerenciar e otimizar processos e equipamentos na indústria de petróleo e gás. O curso está me preparando para atuar em diferentes áreas dessa indústria, garantindo segurança, eficiência e rentabilidade."
          />

          <Details
            type="Técnico em Informática"
            time="2017-2020"
            place="Instituto Federal de Mato Grosso do Sul (IFMS)"
            info="Como aluno do curso técnico em informática integrado ao ensino médio adquiri habilidades essenciais para o desenvolvimento de sistemas, softwares e aplicativos para diversas plataformas. Durante o curso, aprendi linguagens de programação, banco de dados, redes de computadores, desenvolvimento web e mobile, entre outras habilidades necessárias para o mercado de trabalho. Essa formação me permitiu atuar em empresas de tecnologia e iniciar minha carreira como desenvolvedor de software."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
