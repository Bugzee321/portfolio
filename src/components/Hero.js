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
            Product Engineer & Cybersecurity Enthusiast
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Senior Software Engineer with expertise in PHP, Laravel, Ruby on Rails, and JavaScript frameworks. 
            Passionate about creating secure, scalable digital platforms and enhancing security practices 
            within software development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn btn-primary">Contact Me</Link>
            <Link to="/experience" className="btn border border-primary text-primary hover:bg-primary hover:text-white">
              View Experience
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-5/12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-10 rounded-full"></div>
            <img
              src={profileImage}
              alt="Hossam Ahmed - Product Engineer"
              className="rounded-full border-4 border-white shadow-xl relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 