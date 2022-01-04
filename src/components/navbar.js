import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-cyan-400 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-bold text-black mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl">
            Aviral Batra
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          
          <a href="#about" className="mr-5 text-xl font-medium text-black hover:text-white">
            About
          </a>
          <a href="#education" className="mr-5 text-xl font-medium text-black hover:text-white">
            Experience
          </a>
          <a href="#projects" className="mr-5 text-xl font-medium text-black hover:text-white">
            Portfolio
          </a>
          <a href="#skills" className="mr-5 text-xl font-medium text-black hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-black rounded-lg border-2 border-black py-1 px-3 focus:outline-none hover:bg-gray-400 text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}