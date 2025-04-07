import React from 'react';
import Skills from '../components/Skills';
import SEO from '../components/SEO';

const SkillsPage = () => {
  return (
    <div className="pt-10">
      <SEO 
        title="Technical Skills"
        description="Hossam Ahmed's technical skills and expertise in programming languages, frameworks, databases, DevOps, and cybersecurity. Expert in PHP, Laravel, Ruby on Rails, React, Angular, and more."
        keywords="software engineer skills, PHP developer, Laravel expert, Ruby on Rails developer, React developer, Angular developer, DevOps, Cybersecurity, Docker, AWS, full stack developer"
      />
      <Skills />
    </div>
  );
};

export default SkillsPage; 