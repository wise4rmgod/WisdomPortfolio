import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="font-mono md:w-2/3">
          <TypeAnimation
            sequence={[
              'Technical Documentation Engineer ✍🏾',
              2000,
              'Building Developer Experiences ✍🏾',
              2000,
              'Creating API Documentation ✍🏾',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-5xl font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          />
          <br />
          <p className="text-2xl text-gray-200">
            Hello, World! 👋 I'm Wisdom ⚡️
          </p>
          <br />
          <p className="text-xl text-gray-300">
            I'm known as the "Docs Guru." With over five years of experience as a Technical Writer specializing in Developer and API Documentation, 
            <br />  <br />
           I work with companies worldwide to showcase their innovative solutions to diverse audiences. 
            My expertise lies in collaborating with SaaS providers. 
            <br /> <br />
            I am passionate about docs-as-code, open source, workflow optimization, API documentation, style guide development, and creating engaging visual resources.
          </p>
        </div>
        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200">
            <img
              src="/my-cover-image.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
