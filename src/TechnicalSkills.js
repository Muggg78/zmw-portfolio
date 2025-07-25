import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGitAlt, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
const skillsData = [
  { id: 1, name: 'HTML5', icon: <FaHtml5 /> },
  { id: 2, name: 'CSS3', icon: <FaCss3Alt /> },
  { id: 3, name: 'JavaScript', icon: <IoLogoJavascript /> },
  { id: 4, name: 'React', icon: <FaReact /> },
  { id: 5, name: 'Node.js', icon: <FaNodeJs /> },
  { id: 6, name: 'Python', icon: <FaPython /> },
  { id: 7, name: 'SQL/NoSQL', icon: <FaDatabase /> },
  { id: 8, name: 'Git & GitHub', icon: <FaGitAlt /> },
  { id: 9, name: 'Bootstrap', icon: <FaBootstrap /> },
  { id: 10, name: 'WordPress', icon: <i className="bi bi-wordpress"></i> },
];

function TechnicalSkills() {
  return (
    <section id="technical-skills" className="technical-skills-section py-5">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center" data-aos="fade-up">
          <div className="col-lg-8">
            <p className="section-label text-uppercase fw-bold mb-2">My Arsenal</p>
            <h2 className="fw-bold mb-0 position-relative d-inline-block">Technical Skills</h2>
          </div>
        </div>
        <div className="row g-4 justify-content-center skill-grid">
          {skillsData.map((skill, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex" key={skill.id} data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="skill-card-tech w-100 text-center p-3 rounded d-flex flex-column align-items-center justify-content-center">
                <div className="tech-icon mb-2">
                  {skill.icon}
                </div>
                <h6 className="tech-name fw-semibold mb-0">{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;
