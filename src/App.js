import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Make sure this is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// === ICON LIBRARIES WAPAS ADD KI GAYI HAIN (Yahan) ===


// Image Imports
import heroImage from './portone.jpeg';
import aboutImage from './cb5d85b8-ff52-406c-a507-efbc9208d1ff.jpeg';
import signatureImage from './sc.png';


import news1 from './ai.jpg';
import news2 from './perfomse.jpg';
import news3 from './mobile (1).jpg';
import Sara from './sara.jpg';
import Maria from './maria.jpg';
import Ahmed from './ahmad.jpg';
import Emily from './emily.jpeg';
import Kenjal from './kenjal.jpeg';
import Fatima from './fatima.jpg';
import Liam from './laim.jpeg';
import david from './david.jpeg';

import portfolio1 from './portfolio1.png'
import portfolio2 from './portfolio2.png'
import portfolio3 from './prtfolio3.png'
import portfolio4 from './urban4.png'
import portfolio5 from './sksport5.png'
import portfolio6 from './alennp6.png'



// Data for testimonials
const testimonialsData = [
  {
    id: 1,
    name: 'Sarah haseeb',
    location: 'karachi, pakistan',
    service: 'E-commerce Website',
    rating: 5,
    review: 'They delivered a high-quality, fast, and visually stunning e-commerce platform. Our sales have increased by 40% since the launch!',
    image: Sara
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'London, UK',
    service: 'Corporate Portfolio',
    rating: 5,
    review: 'The entire process was seamless. The communication was excellent, and they perfectly captured our brand identity. Highly recommended.',
    image: david
  },
  {
    id: 3,
    name: 'Maria Hassan',
    location: 'karachi, Pakistan',
    service: 'React App Development',
    rating: 5,
    review: 'An incredibly talented team. They tackled complex technical challenges with ease and delivered a robust application on time and within budget.',
    image: Maria
  },
  {
    id: 4,
    name: 'Ahmed Khan',
    location: 'Sahiwal,pakistan',
    service: 'Website Maintenance',
    rating: 4,
    review: 'Very reliable and responsive for ongoing support. They handle all our updates quickly, keeping our site secure and running smoothly.',
    image: Ahmed
  },
  {
    id: 5,
    name: 'Emily vich',
    location: 'Toronto, CAN',
    service: 'UI/UX Design & Dev',
    rating: 5,
    review: 'From design mockups to the final product, their attention to detail was impeccable. Our users love the new, intuitive interface.',
    image: Emily
  },
  {
    id: 6,
    name: 'Kenjal Tanaka',
    location: 'Tokyo, JPN',
    service: 'Performance Optimization',
    rating: 5,
    review: 'Our website loading speed was very slow. They optimized it brilliantly, and now it loads in under a second. Fantastic work!',
    image: Kenjal
  },
  {
    id: 7,
    name: 'Fatima Al-Sayed',
    location: 'Lahore,pakistan',
    service: 'Full Stack Project',
    rating: 5,
    review: 'A true one-stop-shop for all web needs. They handled our front-end, back-end, and deployment with exceptional skill.',
    image: Fatima
  },
  {
    id: 8,
    name: 'Liam O\'Connell',
    location: 'Dublin, IRE',
    service: 'WordPress Development',
    rating: 5,
    review: 'They transformed our old WordPress site into a modern, fast, and easy-to-manage masterpiece. I couldn\'t be happier with the result.',
    image: Liam
  }
];

// Data for portfolio projects
const portfolioData = [
  {
    id: 1,
    title: 'FitLife Gym Management',
    image: portfolio1,
    description: 'A comprehensive platform for gym owners to manage memberships, schedules, and trainers, with a client-facing portal.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'EduVoyage Platform',
    image: portfolio2,
    description: 'An interactive platform for discovering educational courses and booking related travel packages, featuring user reviews.',
    tech: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'ChainSecure Ledger',
    image: portfolio3,
    description: 'A decentralized application for secure asset tracking and verification using blockchain technology and smart contracts.',
    tech: ['Solidity', 'Hardhat', 'React', 'IPFS'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 4,
    title: 'Urban Jungle E-Commerce Experience',
    image: portfolio4,
    description: 'Crafted a beautiful and serene e-commerce experience for a boutique plant store. The site features a seamless shopping flow, from product discovery to a secure checkout',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 5,
    title: 'Global B2B Clothing Export Portal',
    image: portfolio5,
    description: 'Developed a comprehensive corporate portal for a leading name in second-hand clothing import/export.',
    tech: ['WordPress', 'WooCommerce', 'PHP'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 6,
    title: 'Corporate Security Solutions Website',
    image: portfolio6,
    description: 'Designed a strong and trustworthy digital presence for a premier security services provider.',
    tech: ['React', 'D3.js', 'Node.js', 'GraphQL'],
    liveLink: '#',
    githubLink: '#'
  }
];

function SkillMarquee() {
  const skills = [
    'React.js Development',
    'Full-Stack Solutions',
    'Node.js & Express',
    'WordPress Expertise',
    'UI/UX Design',
    'Performance Optimization',
    'E-Commerce Stores',
    'Responsive Web Design',
    'MongoDB Databases',
    'Modern JavaScript (ES6+)',
    'API Integration'
  ];

  const marqueeContent = [...skills, ...skills];

  return (
    <section id="skills-marquee" className="skills-marquee-section py-4" data-aos="fade-up">
      <div className="marquee-container">
        <div className="marquee-content">
          {marqueeContent.map((skill, index) => (
            <div className="marquee-item" key={index}>
              <i className="bi bi-star-fill"></i>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function App() {
  const [theme, setTheme] = useState('light');
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const skillsWrapperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    document.body.className = ''; // Reset classes
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.progress-bar');
            const skillPercentages = entry.target.querySelectorAll('.skill-percent-value');
            skillBars.forEach((bar) => { bar.style.width = bar.getAttribute('aria-valuenow') + '%'; });
            skillPercentages.forEach((percent) => {
              const target = +percent.getAttribute('data-target');
              let current = 0;
              const increment = target / 100;
              const updateCount = () => {
                if (current < target) {
                  current += increment;
                  percent.innerText = Math.ceil(current) + '%';
                  requestAnimationFrame(updateCount);
                } else {
                  percent.innerText = target + '%';
                }
              };
              updateCount();
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 }
    );
    const currentRef = skillsWrapperRef.current;
    if (currentRef) { observer.observe(currentRef); }
    return () => { if (currentRef) { observer.unobserve(currentRef); } };
  }, []);

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className="App-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light py-3 fixed-top shadow-sm" data-aos="fade-down">
        <div className="container">
          <a className="navbar-brand logo-text-brand" href="/">
            <div className="logo-text-container">
              <span className="logo-main-text">ZMW</span>
              <span className="logo-sub-text">WEB DEVELOPER</span>
            </div>
          </a>
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center gy-5 gy-lg-0">
            <div className="col-lg-6 order-lg-1 order-2 text-center text-lg-start">
              <h1 className="display-4 fw-bolder mb-3 text-image-clip lh-sm" data-aos="fade-right">
                Senior <span className="highlight-designer">Designer</span><br />
                & <span className="highlight-developer">Developer</span>
              </h1>
              <p className="lead text-muted mb-4" data-aos="fade-right" data-aos-delay="200">
                Hi, I'm Zohaib Mughal. A passionate Senior Designer and Full Stack Web Developer based In Okara Punjab, Pakistan
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start mt-5" data-aos="fade-up" data-aos-delay="400">
                <div className="me-3 software-text"><small className="text-muted">High knowledge on<br />softwares</small></div>
                <div className="skill-icons d-flex gap-3">
                  <a href="/" className="skill-icon html5-icon"><i className="bi bi-filetype-html"></i></a>
                  <a href="/" className="skill-icon css3-icon"><i className="bi bi-filetype-css"></i></a>
                  <a href="/" className="skill-icon js-icon"><i className="bi bi-filetype-js"></i></a>
                  <a href="/" className="skill-icon bootstrap-icon"><i className="bi bi-bootstrap-fill"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1" data-aos="zoom-in-up" data-aos-delay="200">
              <div className="image-container position-relative">
                <div className="blob"></div>
                <img src={heroImage} alt="Zohaib Mughal Portrait" className="profile-image img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section py-5">
        <div className="container">
            <div className="text-center text-lg-start mb-4" data-aos="fade-up">
                <p className="section-label text-uppercase fw-bold">About Me</p>
            </div>
            <div className="row align-items-center justify-content-center gy-5 gy-lg-0">
                <div className="col-lg-5 text-center" data-aos="fade-right">
                    <div className="about-image-container position-relative d-inline-block">
                        <img src={aboutImage} alt="About Zohaib Mughal" className="img-fluid rounded shadow-sm about-profile-image"/>
                        <div className="experience-badge">
                            <div className="badge-circle d-flex flex-column justify-content-center align-items-center">
                                <span className="years">7</span>
                                <span className="badge-text text-uppercase">Years of Best and<br/>Successful Work<br/>Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1" data-aos="fade-left">
                    <h3 className="fw-bold mb-3 mt-0">
                        Full Stack Developer based In Pakistan
                    </h3>
                    <p className="text-muted mb-4 lh-lg">
                        I am passionate Senior Designer, and I'm very passionate and dedicated to my work. With 7 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.
                    </p>
                    <img src={signatureImage} alt="Zohaib Mughal Signature" className="signature-image img-fluid mb-4"/>
                    <a href="#your-cv-link" className="btn btn-download-cv fw-medium px-4 py-2" download>Download CV</a>
                </div>
            </div>
        </div>
      </section>

      <SkillMarquee />

      <section className="services-section py-5" id="services">
          <div className="container">
              <div className="row align-items-center gy-5">
                  <div className="col-lg-6" data-aos="fade-right">
                      <p className="services-label text-uppercase fw-bold mb-2">Services</p>
                      <h2 className="fw-bold mb-4">I offer a Full-cycle of Web<br />Development Services</h2>
                      <p className="text-muted mb-5">
                          For more than 7 years our experts have been accomplishing enough with modern Web Development, new generation programming language, and Full Stack developers to deliver cost-effective solutions.
                      </p>
                      <div className="skills-wrapper" ref={skillsWrapperRef}>
                          <div className="skill-item mb-4">
                              <div className="d-flex justify-content-between mb-1">
                                  <span className="skill-name">HTML & CSS</span>
                                  <span className="skill-percent fw-medium"><span className="skill-percent-value" data-target="95">0%</span></span>
                              </div>
                              <div className="progress" style={{ height: '8px' }}><div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div></div>
                          </div>
                           <div className="skill-item mb-4">
                              <div className="d-flex justify-content-between mb-1">
                                  <span className="skill-name">JavaScript</span>
                                  <span className="skill-percent fw-medium"><span className="skill-percent-value" data-target="80">0%</span></span>
                              </div>
                              <div className="progress" style={{ height: '8px' }}><div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div></div>
                          </div>
                          <div className="skill-item mb-4">
                              <div className="d-flex justify-content-between mb-1">
                                  <span className="skill-name">WordPress</span>
                                  <span className="skill-percent fw-medium"><span className="skill-percent-value" data-target="90">0%</span></span>
                              </div>
                              <div className="progress" style={{ height: '8px' }}><div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div></div>
                          </div>
                          <div className="skill-item mb-4">
                              <div className="d-flex justify-content-between mb-1">
                                  <span className="skill-name">React Development</span>
                                  <span className="skill-percent fw-medium"><span className="skill-percent-value" data-target="85">0%</span></span>
                              </div>
                              <div className="progress" style={{ height: '8px' }}><div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="row g-4">
                          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100"><div className="service-card text-center p-4 rounded shadow-sm h-100"><i className="fa-brands fa-sketch fa-2x mb-3"></i><h5 className="fw-bold mb-0">Design</h5></div></div>
                          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200"><div className="service-card text-center p-4 rounded shadow-sm h-100"><i className="fa-solid fa-laptop-code fa-2x mb-3"></i><h5 className="fw-bold mb-0">Development</h5></div></div>
                          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300"><div className="service-card text-center p-4 rounded shadow-sm h-100"><i className="fa-solid fa-tools fa-2x mb-3"></i><h5 className="fw-bold mb-0">Maintain</h5></div></div>
                          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="400"><div className="service-card text-center p-4 rounded shadow-sm h-100"><i className="fa-solid fa-shield-alt fa-2x mb-3"></i><h5 className="fw-bold mb-0">Quality</h5></div></div>
                          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="500"><div className="service-card text-center p-4 rounded shadow-sm h-100"><i className="fa-solid fa-clipboard-list fa-2x mb-3"></i><h5 className="fw-bold mb-0">Client Strategy</h5></div></div>
                          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="600"><div className="service-card text-center p-4 rounded shadow-sm h-100"><i className="fa-solid fa-headset fa-2x mb-3"></i><h5 className="fw-bold mb-0">Support & Growth</h5></div></div>
                          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="700"><div className="service-card text-center p-4 rounded shadow-sm h-100"><i className="fa-solid fa-rocket fa-2x mb-3"></i><h5 className="fw-bold mb-0">SEO Optimization</h5></div></div>
                          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="800"><div className="service-card text-center p-4 rounded shadow-sm h-100"><i className="fa-solid fa-gauge-high fa-2x mb-3"></i><h5 className="fw-bold mb-0">High Performance</h5></div></div>
                          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="900"><div className="service-card text-center p-4 rounded shadow-sm h-100"><i className="fa-solid fa-mobile-screen-button fa-2x mb-3"></i><h5 className="fw-bold mb-0">Responsive Design</h5></div></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="process" className="working-process-section py-5">
        <div className="container">
            <div className="row mb-5 justify-content-center text-center" data-aos="fade-up">
                <div className="col-lg-8">
                    <p className="section-label text-uppercase fw-bold mb-2">Working Process</p>
                    <h2 className="fw-bold mb-0 position-relative d-inline-block">A Simple, Yet Effective 4-Step Process</h2>
                </div>
            </div>
            <div className="row g-4 text-center justify-content-center">
                <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="100">
                    <div className="process-card p-4 rounded shadow-sm w-100">
                        <div className="process-icon mb-3">
                            <i className="bi bi-search-heart-fill"></i>
                        </div>
                        <h5 className="fw-bold mb-2">01. Discovery</h5>
                        <p className="text-muted mb-0">We start by understanding your business goals, target audience, and project requirements in detail.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="200">
                    <div className="process-card p-4 rounded shadow-sm w-100">
                        <div className="process-icon mb-3">
                            <i className="bi bi-palette2"></i>
                        </div>
                        <h5 className="fw-bold mb-2">02. Design</h5>
                        <p className="text-muted mb-0">We create intuitive UI/UX wireframes and mockups that capture your brand and engage your users.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="300">
                    <div className="process-card p-4 rounded shadow-sm w-100">
                        <div className="process-icon mb-3">
                            <i className="bi bi-code-slash"></i>
                        </div>
                        <h5 className="fw-bold mb-2">03. Development</h5>
                        <p className="text-muted mb-0">Using clean, efficient code, I bring the designs to life, building a responsive and fast website.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="400">
                    <div className="process-card p-4 rounded shadow-sm w-100">
                        <div className="process-icon mb-3">
                            <i className="bi bi-rocket-takeoff-fill"></i>
                        </div>
                        <h5 className="fw-bold mb-2">04. Launch</h5>
                        <p className="text-muted mb-0">After rigorous testing for performance and bugs, we deploy your project and go live.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-v2-section py-5">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center" data-aos="fade-up">
            <div className="col-lg-8">
              <p className="section-label portfolio-label text-uppercase fw-bold mb-2">Portfolio</p>
              <h2 className="fw-bold mb-0 position-relative d-inline-block">My Creative Works & Case Studies</h2>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {portfolioData.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="project-card h-100 d-flex flex-column">
                  <div className="project-image-preview">
                    <img src={project.image} alt={project.title} className="img-fluid" />
                  </div>
                  <div className="project-card-content p-4 d-flex flex-column flex-grow-1">
                    <h5 className="project-title fw-bold mb-2">{project.title}</h5>
                    <p className="project-description text-muted small flex-grow-1">{project.description}</p>
                    <div className="project-tech-stack mb-4">
                      {project.tech.map(tag => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-links mt-auto d-flex gap-2">
                      <a href={project.liveLink} className="btn btn-project-primary w-100" target="_blank" rel="noopener noreferrer">Live Demo</a>
                      <a href={project.githubLink} className="btn btn-project-secondary w-100" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonial-multi-section py-5">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center" data-aos="fade-up">
            <div className="col-lg-8">
                <p className="section-label text-uppercase fw-bold mb-2">Testimonials</p>
                <h2 className="fw-bold mb-0 position-relative d-inline-block">
                    What Our Clients Say
                </h2>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {testimonialsData.map((testimonial, index) => (
              <div className="col-lg-6 mb-4" key={testimonial.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="testimonial-wrapper d-flex flex-column flex-sm-row align-items-center h-100">
                    <div className="testimonial-image-container flex-shrink-0 mb-4 mb-sm-0 me-sm-4">
                        {testimonial.image && <img src={testimonial.image} alt={testimonial.name} className="img-fluid rounded shadow-sm testimonial-client-img"/>}
                    </div>
                    <div className="testimonial-card p-4 rounded shadow-sm position-relative w-100 flex-grow-1">
                        <div className="background-quotes display-1 position-absolute bottom-0 end-0" aria-hidden="true">
                            <i className="bi bi-quote"></i>
                        </div>
                        <div className="rating-stars mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (<i className="bi bi-star-fill" key={`star-fill-${testimonial.id}-${i}`}></i>))}
                            {[...Array(5 - testimonial.rating)].map((_, i) => (<i className="bi bi-star" key={`star-empty-${testimonial.id}-${i}`}></i>))}
                        </div>
                        <p className="testimonial-text mb-4 position-relative">"{testimonial.review}"</p>
                        <div className="testimonial-author position-relative">
                            <h5 className="author-name fw-bold mb-1">{testimonial.name}</h5>
                            <small className="author-details text-muted">{testimonial.location} | {testimonial.service}</small>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-me" className="why-me-section py-5">
          <div className="container">
              <div className="row align-items-center justify-content-center gy-5">
                  <div className="col-lg-5 col-md-8" data-aos="fade-right">
                      <div className="why-me-image-container text-center">
                          <img src={aboutImage} alt="Why partner with me" className="img-fluid rounded shadow-lg"/>
                      </div>
                  </div>
                  <div className="col-lg-6 offset-lg-1" data-aos-delay="100" data-aos="fade-left">
                      <p className="vnm section-label text-uppercase fw-bold mb-2">The ZMW Advantage</p>
                      <h2 className="fw-bold mb-4">More Than a Developer, A Partner in Your Success.</h2>
                      <p className="text-muted mb-4">
                          Choosing a developer is choosing a partner for your digital journey. I am committed to not just delivering a product, but to building a solution that drives real value for your business.
                      </p>
                      <div className="benefit-list mt-4">
                          <div className="benefit-card d-flex align-items-start mb-3">
                              <div className="benefit-icon flex-shrink-0 me-3">
                                  <i className="bi bi-graph-up-arrow"></i>
                              </div>
                              <div>
                                  <h5 className="fw-bold mb-1">Business-First Approach</h5>
                                  <p className="text-muted mb-0">I focus on your business goals to ensure the final product delivers a real return on investment.</p>
                              </div>
                          </div>
                          <div className="benefit-card d-flex align-items-start mb-3">
                              <div className="benefit-icon flex-shrink-0 me-3">
                                  <i className="bi bi-gem"></i>
                              </div>
                              <div>
                                  <h5 className="fw-bold mb-1">Commitment to Quality</h5>
                                  <p className="text-muted mb-0">From pixel-perfect design to clean, scalable code, I never compromise on quality.</p>
                              </div>
                          </div>
                          <div className="benefit-card d-flex align-items-start">
                              <div className="benefit-icon flex-shrink-0 me-3">
                                  <i className="bi bi-headset"></i>
                              </div>
                              <div>
                                  <h5 className="fw-bold mb-1">Transparent & Supportive</h5>
                                  <p className="text-muted mb-0">You'll get clear, consistent communication and dedicated support throughout our partnership.</p>
                              </div>
                          </div>
                      </div>
                       <a href="#contact" className="btn btn-primary mt-4">Let's Build Together</a>
                  </div>
              </div>
          </div>
      </section>

      <section id="news" className="news-section py-5">
        <div className="container">
          <div className="row mb-4 mb-lg-5" data-aos="fade-up">
            <div className="col-12 text-center text-lg-start">
              <div className="row">
                <div className="col-12">
                  <p className="news-label-text text-uppercase fw-bold mb-1">News & Insights</p>
                  <h2 className="news-main-headline fw-bolder display-5">
                    Exploring the Forefront of
                    <br className="d-none d-md-block" />
                    Modern Web Development
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="news-card h-100">
                <a href="#post-link-1" className="text-decoration-none d-block">
                  <img src={news1} alt="AI assisting in web development" className="news-card-img img-fluid" />
                  <div className="news-card-body">
                    <p className="news-card-meta text-muted mb-1">August 28, 2024 <span className="mx-1">•</span> Future of Code</p>
                    <h5 className="news-card-title fw-bold mb-0">How AI is Becoming the Developer's Most Powerful Co-Pilot</h5>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="news-card h-100">
                <a href="#post-link-2" className="text-decoration-none d-block">
                  <img src={news2} alt="WebAssembly performance chart" className="news-card-img img-fluid" />
                  <div className="news-card-body">
                    <p className="news-card-meta text-muted mb-1">July 19, 2024 <span className="mx-1">•</span> Performance</p>
                    <h5 className="news-card-title fw-bold mb-0">WebAssembly: Unlocking Near-Native Speed for Complex Web Apps</h5>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="news-card h-100">
                <a href="#post-link-3" className="text-decoration-none d-block">
                  <img src={news3} alt="Progressive Web App on a mobile device" className="news-card-img img-fluid" />
                  <div className="news-card-body">
                    <p className="news-card-meta text-muted mb-1">June 05, 2024 <span className="mx-1">•</span> UI/UX Trends</p>
                    <h5 className="news-card-title fw-bold mb-0">The Rise of the 'App-like' Web: PWAs Redefining User Experience</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section py-5">
        <div className="container">
          <div className="row mb-5 text-center" data-aos="fade-up">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <p className="section-label contact-label text-uppercase fw-bold mb-2">Contact</p>
              <h2 className="fw-bold mb-0">Feel free to contact me if any<br className="d-none d-sm-block" /> assistance is needed in the future</h2>
            </div>
          </div>
          <div className="row g-4 g-lg-5 justify-content-center mb-5">
            <div className="col-md-6 col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="100"><div className="contact-item-icon flex-shrink-0 me-3"><i className="bi bi-geo-alt"></i></div><div className="contact-item-text"><h5 className="contact-item-label fw-bold mb-1">Location</h5><p className="contact-item-detail text-muted mb-0">Okara Punjab, Pakistan</p></div></div>
            <div className="col-md-6 col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="200"><div className="contact-item-icon flex-shrink-0 me-3"><i className="bi bi-telephone"></i></div><div className="contact-item-text"><h5 className="contact-item-label fw-bold mb-1">Phone</h5><a href="tel:+923440740774" className="contact-item-detail text-muted text-decoration-none mb-0">+92 344 074 0774</a></div></div>
            <div className="col-md-6 col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="300"><div className="contact-item-icon flex-shrink-0 me-3"><i className="bi bi-envelope"></i></div><div className="contact-item-text"><h5 className="contact-item-label fw-bold mb-1">Mail</h5><a href="mailto:zmwwebdevelopment@gmail.com" className="contact-item-detail text-muted text-decoration-none mb-0">zmwwebdevelopment@gmail.com</a></div></div>
          </div>
          <div className="row g-5">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="contact-form-area p-4 p-md-5 rounded shadow-sm">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6"><input type="text" className="form-control custom-form-control" placeholder="Your Name" required/></div>
                    <div className="col-md-6"><input type="email" className="form-control custom-form-control" placeholder="Your Email" required/></div>
                    <div className="col-12"><input type="text" className="form-control custom-form-control" placeholder="Subject" required/></div>
                    <div className="col-12"><textarea className="form-control custom-form-control" rows="6" placeholder="Your Message" required></textarea></div>
                    <div className="col-12"><button type="submit" className="btn btn-send-message rounded-pill fw-medium">Send Message</button></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
                <div className="map-placeholder h-100 rounded shadow-sm">
                    <iframe
                      title="Google Maps Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109444.61908287514!2d73.38575674069796!3d30.799792019777927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922081d3325492b%3A0xde74c980365b934!2sOkara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1678886543210!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-downgrade">
                    </iframe>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER AAPKE CODE MEIN PEHLE SE THA, YAHAN BILKUL WAISE HI HAI === */}
      <footer className="site-footer" data-aos="fade-up">
          <div className="container">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <div className="text-center text-md-start mb-3 mb-md-0"><small className="copyright-text">Copyright © 2025. All rights with ZMW</small></div>
                  <div className="social-icons text-center text-md-end">
                      <a href="/" aria-label="Facebook" className="social-icon-link me-3"><i className="bi bi-facebook"></i></a>
                      <a href="/" aria-label="Twitter" className="social-icon-link me-3"><i className="bi bi-twitter"></i></a>
                      <a href="/" aria-label="Instagram" className="social-icon-link me-3"><i className="bi bi-instagram"></i></a>
                      <a href="/" aria-label="Dribbble" className="social-icon-link me-3"><i className="bi bi-dribbble"></i></a>
                      <a href="/" aria-label="TikTok" className="social-icon-link"><i className="bi bi-tiktok"></i></a>
                  </div>
              </div>
          </div>
      </footer>

      <div className="settings-container position-fixed" style={{ top: '150px', right: '20px', zIndex: 1050 }}>
          <div className="floating-icon settings-icon" onClick={() => setShowThemeOptions(!showThemeOptions)} aria-haspopup="true" aria-expanded={showThemeOptions} role="button" tabIndex="0" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowThemeOptions(!showThemeOptions); }}>
            <i className="bi bi-gear-fill"></i>
          </div>
          {showThemeOptions && (
            <div className="theme-options shadow-lg rounded" data-aos="fade-left" data-aos-duration="300">
              <button className={`theme-option-btn ${theme === 'light' ? 'active' : ''}`} onClick={() => toggleTheme('light')}><i className="bi bi-sun-fill me-2"></i> Light Mode</button>
              <button className={`theme-option-btn ${theme === 'dark' ? 'active' : ''}`} onClick={() => toggleTheme('dark')}><i className="bi bi-moon-stars-fill me-2"></i> Dark Mode</button>
            </div>
          )}
      </div>
      <div className="floating-icons-group">
          <div className="floating-icon chat-icon" role="button" tabIndex="0" aria-label="Open Chat"><i className="bi bi-chat-right-text-fill"></i></div>
          <a href="https://wa.me/+923440740774" className="floating-icon whatsapp-icon" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><i className="fab fa-whatsapp"></i></a>
      </div>
    </div>
  );
}

export default App;