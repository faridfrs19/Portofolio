import React, { useEffect } from "react";
import { styles } from "../styles";
import { html, css, reactjs, javascript, tailwind, threejs, typescript, figma } from "../assets";
import AOS from 'aos';
import 'aos/dist/aos.css';

const techImages = [
  { src: html, alt: "Tech 1" },
  { src: css, alt: "Tech 2" },
  { src: reactjs, alt: "Tech 3" },
  { src: javascript, alt: "Tech 4" },
  { src: tailwind, alt: "Tech 5" },
  { src: threejs, alt: "Tech 6" },
  { src: typescript, alt: "Tech 7" },
  { src: figma, alt: "Tech 7" },
];

const Tech = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-all w-full h-[35rem] flex flex-col justify-center">
      <div className="sm:mr-16 mr-6 mb-10">
        <p className={`${styles.sectionSubText} text-end`}>What I'm learning</p>
        <h2 className={`${styles.sectionHeadText} text-end`}>Now</h2>
      </div>
      <div data-aos="zoom-in" className="flex flex-wrap justify-center gap-6 mt-10">
        {techImages.map((tech, index) => (
          <div
            key={index}
            className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-lg transform transition duration-300 hover:scale-110"
          >
            <img src={tech.src} alt={tech.alt} className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
