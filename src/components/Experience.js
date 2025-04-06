import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Senior Software Engineer (Contract)',
      company: 'Lynk',
      location: 'Riyadh, Saudi Arabia',
      period: 'November 2024 - Present',
      responsibilities: [
        'Spearheaded developing and maintaining a fintech platform facilitating Murabaha transactions in under 60 seconds.',
        'Leading front-end development in a mono-repo environment using React to deliver seamless and intuitive user interfaces.',
        'Developing and optimizing a robust Laravel-based backend to handle complex fintech operations, ensuring high performance and scalability.',
        'Manage and integrate technologies like MySQL, Redis, and other tools to enhance system efficiency and reliability.',
        'Ensuring compliance with Islamic Sharia principles in all technical implementations, supporting financial institutions in achieving their goals.',
        'Collaborating cross-functionally to deliver innovative, secure, and efficient financial solutions.'
      ],
      techStack: 'PHP, Laravel, MYSQL, Oracle, Restful APIS, Reactjs, mono-repo, Docker, Security, Multi-Tenant'
    },
    {
      id: 2,
      position: 'Senior Software Engineer',
      company: 'Cartona',
      location: 'Egypt',
      period: 'March 2022 - November 2024',
      responsibilities: [
        'Conducted code reviews and provided feedback to improve the quality of code and software development processes, improving code quality by 50%.',
        'Enhanced software development efficiency by 40% through implementing Agile methodologies, continuous integration, and continuous delivery of best practices.',
        'Completed an intensive junior manager training program, contributing to a 30% improvement in team performance and project success rates.',
        'Mentored and managed junior developers, fostering their growth and improving team performance.'
      ],
      techStack: 'Ruby on Rails, Ionic, Angular, Docker, Kubernetes, Helm, PostgreSQL, MySQL, RabbitMQ, AWS, CSVBox, Micro-Service'
    },
    {
      id: 3,
      position: 'Senior Software Consultant (Contract)',
      company: 'MentorMate',
      location: 'USA',
      period: 'March 2022 - September 2022',
      responsibilities: [
        'Played a key role in developing a web-based e-commerce platform, resulting in a 50% reduction in maintenance time, a 35% increase in scalability, and a 20% improvement in overall performance.',
        'Deployed multiple software applications to production environments, enhancing release efficiency by 25% and ensuring seamless integration with existing systems.'
      ],
      techStack: 'Laravel, Symfony, Docker, PostgreSQL, Yii2, Filament, Livewire'
    },
    {
      id: 4,
      position: 'Senior Software Engineer (Freelancer)',
      company: 'Egyptian Computer Emergency Readiness Team',
      location: 'Egypt',
      period: 'April 2019 - Present',
      responsibilities: [
        'Developed 10+ portals to perform better penetration testing processes and generate reports for managerial levels.',
        'Implemented software solutions in live environments, streamlining and automating more than 100 manual tasks.',
        'Performed and automated security vulnerability assessments, including penetration testing and database scans, and integrated them into the CI/CD pipeline.',
        'Inspected and implemented missing security features in all stack layers, from code to tooling and infrastructure, to ensure in-depth security.'
      ],
      techStack: 'PHP, Laravel, Symfony, Ruby on Rails, React, Golang, Docker, DigitalOcean, BitBucket, Github, GitHub Actions, ReactNative, Multi-Tetnant, MicorService'
    },
    {
      id: 5,
      position: 'Senior PHP Developer',
      company: 'ExpandCart',
      location: 'Egypt',
      period: 'October 2020 - December 2021',
      responsibilities: [
        'Worked in the customer bugs squad to solve customer issues, decreasing customer bugs by 40%.',
        'Mentored and managed junior developers, enhancing team skills and performance.'
      ],
      techStack: 'OpenCart, PHP, MySQL, Docker'
    },
    {
      id: 6,
      position: 'Senior FullStack Developer (Freelance)',
      company: 'Gulf Communication Corporation',
      location: 'Egypt',
      period: 'January 2020 - September 2020',
      responsibilities: [
        'Developed and maintained an accounting system that efficiently managed financial aspects across the organization, integrating with five different applications.',
        'Successfully reduced manual workloads for over 100 team members by automating financial operations.'
      ],
      techStack: 'PHP, Laravel, MySQL, OpenStreetMap'
    },
    {
      id: 7,
      position: 'Senior FullStack Developer',
      company: 'Learnovia',
      location: 'Egypt',
      period: 'January 2019 - December 2021',
      responsibilities: [
        'Developed and maintained Moodle web applications and mobile applications.',
        'Led a team of software engineers in the development and design of a complex software system from scratch.'
      ],
      techStack: 'PHP, Moodle, Laravel, MySQL, Docker, Angular, Ionic'
    },
    {
      id: 8,
      position: 'FullStack Developer',
      company: 'Squnity',
      location: 'Egypt',
      period: 'June 2016 - January 2019',
      responsibilities: [
        'Conducted rigorous penetration testing and code reviews, identifying and remedying critical vulnerabilities.',
        'Served as a technical speaker, training intern engineers, and delivering 10 talks at different events.'
      ],
      techStack: 'PHP, Laravel, Android Pentesting, Web Pentesting'
    },
    {
      id: 9,
      position: 'FullStack Developer (Freelancer)',
      company: 'Freelance Projects',
      location: 'Egypt',
      period: '2016 - Present',
      responsibilities: [
        'Worked on numerous freelance projects including Turbo EG, Ufelix, PLUEME, and Arab Organizers – for Conference Management.',
        'Successfully delivered more than 15 applications for various clients and industries.'
      ],
      techStack: 'Various technologies based on project requirements'
    }
  ];

  // Helper function to split tech stack string into individual technologies
  const splitTechStack = (techStack) => {
    // Handle multiple separators: comma with space, comma, or just space
    return techStack.split(/,\s*|\s*,\s*|\s+/)
      .filter(tech => tech.trim() !== ''); // Remove any empty strings
  };

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                <span className="text-sm text-gray-500 font-medium mt-1 sm:mt-0">{exp.period}</span>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800">{exp.company}</h4>
                <p className="text-gray-600">{exp.location}</p>
              </div>
              
              <ul className="mb-4 space-y-2">
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h5 className="text-sm font-semibold text-gray-600 mb-2">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {splitTechStack(exp.techStack).map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 