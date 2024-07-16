import React, { useEffect } from "react";

import { styles } from '../styles'
import { FaYoutube, FaInstagram, FaGithub, FaDownload, FaArrowDown } from 'react-icons/fa';
import { logo} from '../assets';
import pdf from '../assets/Farid Firdaus - Web Developer - CV.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto bg-hero">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center sm:mt-9 mt-0'>
            <div className='w-5 h-5 ms-4 rounded-full bg-[#1f2d99]'/>
            <div className='w-1 ms-4 sm:h-80 h-60 blue-gradient'/>
        </div>

        <div data-aos="zoom-in" className='sm:mt-12 mt-3'>
          <h2 className={`${styles.heroFirstText} text-white mb-0`}>Hi, Welcome</h2>
          <h1 className={`${styles.heroHeadText} text-white mb-0`}>I'm <span className='text-[#1f2d99]'>Farid Firdaus</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mb-0`}>I Web Developer In Vocational Highschool SMKN 1 Ciomas</p>
          <div className="flex space-x-4 mt-3">
            <a href="https://www.youtube.com" target="https://youtube.com/@faridfrs0310?si=xYLyxr6CNjBlU7JF" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 rounded-full bg-white p-2 hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              <FaYoutube size={30} />
            </a>
            <a href="https://www.instagram.com" target="https://www.instagram.com/frd129_?igsh=eTRvNWNmd2pxNmxk" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 rounded-full bg-white p-2  hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.github.com" target="https://github.com/faridfrs19/" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 rounded-full bg-white p-2 hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              <FaGithub size={30} />
            </a>
          </div>
          <a 
            href={pdf} 
            download="Farid_Firdaus_CV.pdf" 
            className="w-[150px] flex items-center px-4 py-2 mt-5 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          >
            Download CV
            <FaDownload className="ms-2" />
          </a>

        </div>
        <div className="hidden sm:block ml-auto">
          <img src={logo} alt="Farid Firdaus" className="w-80 mr-8 h-auto rounded-lg" />
        </div>
        
      </div>
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <FaArrowDown className="text-white text-4xl animate-bounce" />
      </a>
    </section>
  )
}

export default Hero