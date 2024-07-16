import React, { useEffect } from "react";
import { projects } from "../constants";
import { styles } from "../styles";
// import { PinContainer } from "../components/ui/3d-pin";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
// import { Link } from "react-router-dom";
import { github } from "../assets";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-all" id="project">
        <div data-aos="fade-right" className="sm:ms-16 ms-6">
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
        </div>

        <div data-aos="fade-right" className="w-full flex mb-6">
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] sm:ms-16 ms-6">
            Project saya yang sudah saya kerjakan di kelas XI sampai kelas XII,
            project yang saya kerjakan kebanyakan project sekolah yang diberikan
            oleh guru untuk di kerjakan.
          </p>
        </div>

        {/* <div className="h-[40rem] w-full sm:flex flex-wrap items-center justify-center">
          {projects.map((project, index) => (
            <PinContainer
              key={`project-${index}`}
              title={project.name}
              href={project.source_code_link}
              image={project.image}
              tags={project.tags}
              className="bg-[#172554]"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem]">
                <div className="flex flex-1 w-full rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[10rem] object-cover rounded-lg"
                  />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.name}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-400">
                    {project.description}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <p
                      key={`${project.name}-${tag.name}`}
                      className={`text-[14px] ${tag.color}`}
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </div>
            </PinContainer>
          ))}
        </div> */}

        <div className="sm:flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <CardContainer key={`project-${index}`} className="inter-var flex-grow sm:flex-shrink-0">
              <CardBody className="bg-hero relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img src={project.image} alt={project.name} className="w-full h-auto object-cover rounded" />
                </CardItem>
                <div className="flex justify-between items-center mt-4">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-2 py-1 rounded-full bg-black"
                  >
                    <a href={project.source_code_link}>
                    <img className="w-8" src={github} alt="" />
                    </a>
                  </CardItem>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <p
                      key={`${project.name}-${tag.name}-${idx}`}
                      className={`text-[14px] ${tag.color}`}
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

      </div>

    </>
  );
};

export default Project;
