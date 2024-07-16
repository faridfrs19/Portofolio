import React, { useEffect } from "react";

import { styles } from "../styles";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className='bg-all w-full sm:h-[25rem] h-[35rem]' id="about">
      <div data-aos="fade-up" className="pt-8">
        <p className={`${styles.sectionSubText} flex justify-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} flex justify-center`}>Overview</h2>
      </div>

      <p data-aos="fade-up" className='text-left sm:text-center mx-10 sm:mx-auto mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Murid SMKN 1 Ciomas yang berminat dalam bidang teknologi dan pemrograman, 
        saya sangat tertarik untuk menjadi seorang SOFTWARE ENGINEERING. 
        Berpengalaman dalam mengerjakan project project sekolah untuk membuat website 
        dan design, hal yang sangat saya sukai adalah ketika harus melakukan 
        hal-hal yang menggunakan kreatifitas dan hal seperti problem solving
        yang mengharuskan berpikir secara logis.
      </p>
    </div>
    </>
  );
};

export default About;
