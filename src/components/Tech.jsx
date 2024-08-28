import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="mb-16">
      <h2 className="text-center text-secondary font-bold text-[24px] mb-8">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img src={tech.icon} alt={tech.name} className="w-10 h-10 mr-4" />
            <span className="text-black font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
    // <div className='flex flex-row flex-wrap justify-center gap-10'>
    //   {technologies.map((technology) => (
    //     <div className='w-28 h-28' key={technology.name}>
    //       <BallCanvas icon={technology.icon} />
    //     </div>
    //   ))}
    // </div>
  );
};

export default SectionWrapper(Tech, "");