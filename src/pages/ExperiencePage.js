import React from 'react';
import Experience from '../components/Experience';
import SEO from '../components/SEO';

const ExperiencePage = () => {
  return (
    <div className="pt-10">
      <SEO 
        title="Professional Experience"
        description="Hossam Ahmed's extensive work experience as a Senior Software Engineer at Lynk, Cartona, and other companies. Over 8 years of experience in PHP, Laravel, Ruby on Rails, and JavaScript frameworks."
        keywords="software engineer experience, senior developer portfolio, PHP developer work history, Laravel experience, Ruby on Rails projects, freelance developer, Dubai"
      />
      <Experience />
    </div>
  );
};

export default ExperiencePage; 