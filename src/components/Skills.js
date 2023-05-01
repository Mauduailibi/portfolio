import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shaddow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-16 xs:text-4xl">
        Habilidades
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:!bg-circularLightSm sm:!dark:bg-circularDarkSm">
        <Skill name="Web" x="0vw" y="0vw" />

        <Skill name="HTML" x="-5vw" y="-10vw" />

        <Skill name="CSS" x="-10vw" y="7vw" />

        <Skill name="JS" x="10vw" y="6vw" />

        <Skill name="NextJS" x="10vw" y="20vw" />

        <Skill name="Flutter" x="20vw" y="-10vw" />

        <Skill name="Figma" x="0vw" y="-20vw" />

        <Skill name="MySQL" x="-25vw" y="5vw" />

        {/* <Skill name="Tailwind" x="25vw" y="-25vw" /> */}

        <Skill name="PHP" x="20vw" y="10vw" />

        <Skill name="RestAPI" x="-20vw" y="-20vw" />

        <Skill name="NodeJS" x="-10vw" y="20vw" />
      </div>
    </>
  );
};

export default Skills;
