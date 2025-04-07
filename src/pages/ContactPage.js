import React from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <div className="pt-10">
      <SEO 
        title="Contact Me"
        description="Get in touch with Hossam Ahmed, a Senior Software Engineer & Freelancer based in Dubai, UAE. Available for new projects, job opportunities, and collaborations."
        keywords="hire software engineer, hire freelance developer, contact developer, PHP developer for hire, Laravel developer for hire, remote developer Dubai, software engineer consultation"
      />
      <Contact />
    </div>
  );
};

export default ContactPage; 