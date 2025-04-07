import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <div>
      <SEO 
        title="Home"
        description="Hossam Ahmed - Senior Software Engineer & Freelancer based in Dubai, UAE. Expertise in PHP, Laravel, Ruby on Rails, React, and Angular. Available for hire."
        keywords="software engineer, freelancer, PHP developer, Laravel developer, Ruby on Rails, React developer, full stack, Dubai, UAE, remote developer"
      />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default HomePage; 