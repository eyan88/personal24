import { motion } from 'framer-motion';
// import { useEffect } from 'react';

export default function Hero() {

  return (
    <motion.section
      className="h-screen relative pt-24 md:pt-48 md:px-20 font-sentient font-medium items-center justify-center">
      <div className="relative">
        {/* <span className="absolute left-96 w-full h-full bg-secondary-300"></span> */}
        <span className="absolute w-full h-full bg-primary-100"></span>
        <h1 className="relative flex flex-col text-display md:leading-snug text-tertiary-100 px-6 md:px-24">
            <span>I&apos;m Eric -</span>
            <span>welcome to my </span>
            <span>digital garden</span>
        </h1>
      </div>
    </motion.section>
  );
}
