import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/hossam-profile.jpg';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-20">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        {/* Left Column - Text */}
        <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-dark">
            Hi, I'm <span className="text-primary">Hossam Ahmed</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-700">
            Senior Software Engineer & Freelancer
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experienced software engineer with expertise in <strong>PHP</strong>, <strong>Laravel</strong>, <strong>Ruby on Rails</strong>, 
            <strong> React</strong>, and <strong>Angular</strong>. Based in Dubai, UAE, I specialize in developing 
            secure, scalable digital platforms for businesses worldwide. Available for 
            freelance projects and full-time opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn btn-primary">Contact Me</Link>
            <Link to="/experience" className="btn border border-primary text-primary hover:bg-primary hover:text-white">
              View Experience
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">PHP</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Laravel</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Ruby on Rails</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">React</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Angular</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Full Stack</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Freelancer</span>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-5/12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-10 rounded-full"></div>
            <img
              src={profileImage}
              alt="Hossam Ahmed - Senior Software Engineer and Freelancer based in Dubai"
              className="rounded-full border-4 border-white shadow-xl relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 