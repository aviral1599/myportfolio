import React from "react";
import web from '../assets/images/web-programming.png';
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

export default function Education() {
    return (
      <section id="education" className="bg-white body-font py-3">

<div>
<Tab.Group>
  <div className="pl-[550px] pt-[10px] pb-[10px]">
      <Tab.List className="flex py-2 w-80 bg-cyan-400/50 rounded-xl justify-center">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
            className={
              selected ? 'bg-white text-cyan-600 font-bold rounded-xl px-2 py-1' : ' text-black font-bold px-2 py-1'
            }
            >
              Education
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
            className={
              selected ? ' bg-white text-cyan-600 font-bold rounded-xl px-2 py-1' : ' text-black font-bold px-2 py-1'
            }
            >
              Work Experience
            </button>
          )}
        </Tab>
      </Tab.List>
      </div>
      <Tab.Panels>
        <Tab.Panel>
        <div className="py-5">
            <p className="text-6xl font-extrabold text-center text-black">My Education</p>
        </div>
  
       <div className="px-5 py-5 h-80 mx-auto text-center lg:px-40 overflow-y-scroll">
           <div className="grid grid-cols-5 px-10 my-10">
           <div className=" col-span-1 text-center">
               <p className="text-right py-3 pl-6 translate-x-6 translate-y-8 text-xl italic font-bold text-black">2019-Present</p>
           </div>
           <div className=" col-span-4 max-w-xl rounded-lg bg-cyan-200 text-center">
               <p className="text-center text-xl pt-5 pb-5 px-10 font-bold text-black">B.E in Computer Engineering</p>
               <div className="grid grid-cols-2">
               <p className="col-span-1 text-left text-sm pt-2 pb-5 px-10 font-medium text-black">Thapar Institute of Engineering and Technology,Patiala </p>
               <p className="col-span-1 text-right text-sm pt-2 pb-5 px-10 font-medium text-black">9.55 CGPA </p>
               </div>
           </div>
           </div>

           <div className="grid grid-cols-5 px-10 my-10">
           <div className=" col-span-1 text-center">
               <p className="text-right py-3 pl-6 translate-x-6 translate-y-8 text-xl italic font-bold text-black">2018-2019</p>
           </div>
           <div className=" col-span-4 max-w-xl rounded-lg bg-cyan-200 text-center">
               <p className="text-center text-xl pt-5 pb-5 px-10 font-bold text-black">12th CBSE (PCM) </p>
               <div className="grid grid-cols-2">
               <p className="col-span-1 text-left text-sm pt-2 pb-5 px-10 font-medium text-black">N.K Bagrodia Public School,Delhi </p>
               <p className="col-span-1 text-right text-sm pt-2 pb-5 px-10 font-medium text-black">93.2%</p>
               </div>
           </div>
           </div>

           <div className="grid grid-cols-5 px-10 my-10">
           <div className=" col-span-1 text-center">
               <p className="text-right py-3 pl-6 translate-x-6 translate-y-8 text-xl italic font-bold text-black">2016-2017</p>
           </div>
           <div className=" col-span-4 max-w-xl rounded-lg bg-cyan-200 text-center">
               <p className="text-center text-xl pt-5 pb-5 px-10 font-bold text-black">10th CBSE</p>
               <div className="grid grid-cols-2">
               <p className="col-span-1 text-left text-sm pt-2 pb-5 px-10 font-medium text-black">N.K Bagrodia Public School,Delhi </p>
               <p className="col-span-1 text-right text-sm pt-2 pb-5 px-10 font-medium text-black">10 CGPA</p>
               </div>
           </div>
           </div>
           

           
       </div>
        </Tab.Panel>
        
        <Tab.Panel>
        <div className="py-5">
            <p className="text-6xl font-extrabold text-center text-black">Work Experience</p>
        </div>
  
       <div className="py-5 h-80 mx-auto lg:px-40 overflow-y-scroll">
       <div className="grid grid-cols-6 my-10">
           <div className=" col-span-2 text-right">
               <p className="text-right pt-6 pl-6 translate-x-10 translate-y-10 text-xl italic font-bold text-black">May 2021 - Dec 2021</p>
           </div>
           <div className=" col-span-4 max-w-2xl rounded-lg bg-cyan-200">
               <p className="text-center text-xl pt-5 pb-1 px-10 font-bold text-black">Project Intern </p>
               <p className="text-center text-xl pt-2 pb-4 px-10 font-semibold text-black">Samsung Prism</p>
               <div className="">
               <p className="text-left text-sm pt-3 pb-3 px-10 font-medium text-black">Built an end-to-end on-device solution of web content
categorization specifically targeted to identify certain e- commerce products categories.</p>
               <p className="text-left text-sm pt-2 pb-5 px-10 font-medium text-black"><strong>Tech Stack :</strong> Web Scraping , ML , Android Development</p>
               </div>
           </div>
           </div>       

           
       </div>
        </Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
    </div>

        {/* <div className="py-5">
            <p className="text-6xl font-extrabold text-center text-black">My Education</p>
        </div>
  
       <div className="px-5 py-5 h-80 mx-auto text-center lg:px-40 overflow-y-scroll">
           <div className="grid grid-cols-5 px-10 my-10">
           <div className=" col-span-1 text-center">
               <p className="text-right py-2 px-2 translate-x-6 translate-y-8 text-xl italic font-bold text-black">2008</p>
           </div>
           <div className=" col-span-4 max-w-xl rounded-lg bg-cyan-200 text-center">
               <p className="text-center py-10 px-10 text-black">Thapar Institute of Engineering and Technology</p>
           </div>
           </div>

           <div className="grid grid-cols-5 px-10 my-10">
           <div className=" col-span-1 text-center">
               <p className="text-right py-2 px-2 translate-x-6 translate-y-8 text-xl italic font-bold text-black">2008</p>
           </div>
           <div className=" col-span-4 max-w-xl rounded-lg bg-cyan-200 text-center">
               <p className="text-center py-10 px-10 text-black">Thapar Institute of Engineering and Technology</p>
           </div>
           </div>

           <div className="grid grid-cols-5 px-10 my-10">
           <div className=" col-span-1 text-center">
               <p className="text-right py-2 px-2 translate-x-6 translate-y-8 text-xl italic font-bold text-black">2008</p>
           </div>
           <div className=" col-span-4 max-w-xl rounded-lg bg-cyan-200 text-center">
               <p className="text-center py-10 px-10 text-black">Thapar Institute of Engineering and Technology</p>
           </div>
           </div>
           

           
       </div> */}
          
      </section>
    );
  }