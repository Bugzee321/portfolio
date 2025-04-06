import React from 'react';

const Education = () => {
  const educationData = {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Computers and Information - Helwan University",
    year: "2019",
    grade: "Very Good"
  };

  const certifications = [
    {
      id: 1,
      title: "Software Engineer Certificate",
      issuer: "HackerRank",
      date: "July 2024",
      link: "https://www.hackerrank.com/certificates/5bd58dc00f32"
    },
    {
      id: 2,
      title: "System Design Interview Guide for Software Architecture",
      issuer: "Udemy",
      date: "May 2024",
      link: null
    },
    {
      id: 3,
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      issuer: "Udemy",
      date: "April 2023",
      link: "https://ude.my/UC-6b309de5-6042-40bd-8da5-14a921d06f3b"
    }
  ];

  return (
    <section id="education" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            
            <div className="p-4">
              <h4 className="text-xl font-semibold text-dark">{educationData.degree}</h4>
              <p className="text-gray-700 mt-2">{educationData.institution}</p>
              <p className="text-gray-600 mt-1">Graduation Year: {educationData.year}</p>
              <p className="text-gray-600">Grade: {educationData.grade}</p>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-primary">Certifications</h3>
            
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-dark">{cert.title}</h4>
                  <p className="text-gray-700 mt-1">Issuer: {cert.issuer}</p>
                  <p className="text-gray-600 mt-1">Date: {cert.date}</p>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline mt-2 inline-block"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 