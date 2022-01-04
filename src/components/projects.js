
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "./data";
import hms1 from '../assets/images/hms1.png';
import ml from '../assets/images/ml2.png';
import app from '../assets/images/app1 (2).png';
import web from '../assets/images/web1 (2).png';
import arduino1 from '../assets/images/arduino1.png';
import arduino2 from '../assets/images/arduino2.png';
import iot1 from '../assets/images/iot1.png';
import iot2 from '../assets/images/iot2.png';


export default function Projects() {
  return (
    <section id="projects" className=" bg-cyan-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            My Portfolio
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>

      
      <div>

        <div className="pb-7">
          <div>
            <p className="text-left font-bold text-3xl">Web and App Development</p>
          </div>
      <div className="grid grid-cols-2">
        <div className="px-5 py-2">
          <a href = "#" key= {hms1} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg obje"
                  src = {hms1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {web} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {web}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {app} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {app}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

      </div>
      </div>
      

      <div  className="pb-7">
          <div>
            <p className="text-left font-bold text-3xl">Machine Learning</p>
          </div>
      <div className="grid grid-cols-2">
      <div className="px-5 py-2">
          <a href = "#" key= {ml} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {ml}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

      </div>
      </div>


      <div  className="pb-7">
      <div>
            <p className=" text-left font-bold text-3xl">Arduino and IOT</p>
          </div>
      <div className="grid grid-cols-2">
      <div className="px-5 py-2">
          <a href = "#" key= {arduino1} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {arduino1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {iot1} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {iot1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {arduino2} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {arduino2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {iot2} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {iot2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

      </div>
      </div>
      </div>

        {/* <div className="px-5 py-2">
          <a href = "#" key= {ml} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {ml}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {app} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {app}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {web} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {web}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {arduino1} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {arduino1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {iot1} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {iot1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {arduino2} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {arduino2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href = "#" key= {iot2} className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
                  src = {iot2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React Reserve
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    MERN Stack
                  </h1>
                  <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?</p>
                </div>
              </div>
          </a>
        </div>

      

        </div>
      </div> */}

      
      </div>
    </section>
  );
}