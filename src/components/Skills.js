import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      name: 'Programming Languages',
      skills: ['PHP', 'Ruby', 'JavaScript', 'TypeScript', 'GoLang']
    },
    {
      id: 2,
      name: 'Frameworks',
      skills: ['Laravel', 'Symfony', 'Ruby on Rails', 'React', 'Angular', 'Ionic', 'OpenCart', 'Moodle']
    },
    {
      id: 3,
      name: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      id: 4,
      name: 'DevOps & Infrastructure',
      skills: ['Docker', 'Kubernetes', 'AWS', 'DigitalOcean', 'CI/CD', 'GitHub Actions']
    },
    {
      id: 5,
      name: 'Security',
      skills: ['Penetration Testing', 'Security Vulnerability Assessments', 'Code Reviews', 'Web Security']
    },
    {
      id: 6,
      name: 'Soft Skills',
      skills: ['Team Leadership', 'Mentoring', 'Problem Solving', 'Project Management', 'Agile Methodologies']
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 