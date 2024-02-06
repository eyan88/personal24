import { motion } from 'framer-motion';
// import { useEffect } from 'react';

export default function Hero() {

  return (
    <motion.section
      id="hero"
      className="h-screen relative pt-24 md:pt-48 md:px-16 font-sentient font-medium items-center justify-center">
      <div className="relative">
        {/* <span className="absolute left-96 w-full h-full bg-secondary-300"></span> */}
        <motion.span 
          className="absolute w-full h-full bg-primary-100"></motion.span>
        <h1 className="relative flex flex-col text-display md:leading-snug text-tertiary-100 px-6 md:px-24">
            <motion.span
              initial={{ y:20, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} transition={{ ease:"easeIn", duration: 0.2 }}>
              I&apos;m Eric -
            </motion.span>
            <motion.span
              initial={{ y:20, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} transition={{ ease:"easeIn", duration: 0.4 }}>
              welcome to my 
            </motion.span>
            <motion.span
              initial={{ y:20, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} transition={{ ease:"easeIn", duration: 0.5 }}>
              digital garden
            </motion.span>
        </h1>
      </div>
    </motion.section>
  );
}
