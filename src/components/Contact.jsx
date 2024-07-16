import React from "react";
import { styles } from "../styles";
import { logo} from '../assets';

const Contact = () => {
  return (
    <footer className="bg-hero" id="contact">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between sm:ms-12 ms-4">
        <div className="mb-6 md:mb-0">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src={logo}
              className="h-12 me-3"
              alt="Farid Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Farid
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://vitejs.dev/guide/" className="hover:underline">
                  React JS
                </a>
              </li>
              <li className="mb-4">
                <a href="https://ui.aceternity.com/" className="hover:underline">
                  Aceternity Ui
                </a>
              </li>
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow Me
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="https://github.com/faridfrs19/"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://youtube.com/@faridfrs0310?si=xYLyxr6CNjBlU7JF"
                  className="hover:underline "
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/frd129_?igsh=eTRvNWNmd2pxNmxk"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between sm:ms-14">
        <span className="text-sm text-gray-500 sm:text-center text-center dark:text-gray-400 flex justify-center sm:justify-center">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            Farid
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
  );
};

export default Contact;
