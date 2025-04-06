import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Biography</h3>
            <p className="text-gray-700 mb-4">
              Hossam Ahmed is a highly motivated Senior Software Engineer and Cybersecurity Enthusiast, 
              based in Dubai, United Arab Emirates. With a robust skill set that spans Backend, 
              Frontend, and DevOps tools, Hossam is passionate about creating secure, scalable 
              digital platforms and dedicated to enhancing security practices within software development.
            </p>
            <p className="text-gray-700">
              He has a proven track record in leading teams, mentoring junior developers, and delivering 
              projects successfully and on time.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-primary">Professional Summary</h3>
            <p className="text-gray-700 mb-4">
              As a Senior Software Engineer with extensive experience in developing secure software applications, 
              Hossam specializes in various programming languages and frameworks, including PHP, Laravel, 
              Ruby on Rails, and several JavaScript frameworks.
            </p>
            <p className="text-gray-700">
              His expertise in securing digital platforms and streamlining development processes has had a 
              significant positive impact on the projects he has managed. Hossam is committed to continuous 
              improvement and utilizing his skills to contribute meaningfully to any organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 