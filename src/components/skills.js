import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import web from '../assets/images/web-programming.png';
//import { skills } from "./data";

export default function Skills() {
  return (
    <section id="skills" className=" bg-white body-font py-3">

        <div className="py-5">
            <p className="text-xl font-normal text-center text-black px-5 mx-5">What I am Good at</p>
            <p className="text-6xl font-extrabold text-center text-black">My Skills</p>
        </div>
      <div className="grid grid-cols-3 gap-4 px-5 py-10 mx-auto text-center lg:px-40">


<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        Web Development
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        80%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        Android Development
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        50%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        Machine Learning
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        60%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        Python
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        75%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        C++
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        80%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        Arduino
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        80%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        IOT
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        60%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        Web Scraping
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        80%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
       Marketing
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        75%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        DSA
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        70%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        OS
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        60%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4 relative pt-1 px-3">
    <div className="row-span-2" >
    <img src={web} alt=" random imgee" className="w-12 h-12 px-0 mx-0" />
    </div>
  <div className="row-span-1 flex mb-4 items-center justify-between px-0 mx-0">
    <div>
      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
        DBMS
      </span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold inline-block text-cyan-600">
        70%
      </span>
    </div>
  </div>
  <div className=" row-span-1 overflow-hidden h-2 mb-4 text-lg flex rounded bg-cyan-200">
    <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"></div>
  </div>
</div>

  </div>
    </section>
  );
}