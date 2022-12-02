import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My name is natnael biruk  
        </p>

        <br />

        <p className="text-xl">
          I am information systems department student in university of gondar.
           i am interested in web based application development , in this year
            i will try to be a good programmer in both front end and back end 
            development , and these course motivate and makes me  very interested
             for it.
        </p>
      </div>
    </div>
  );
};

export default About;
