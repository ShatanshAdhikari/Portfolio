import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Brain, Globe, Cpu, Database, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -60; // Offset for fixed navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const projects = [
    {
      title: "ChestDx",
      subtitle: "AI/ML Based Chest X-ray Classification",
      description: "Developed an intelligent diagnostic system using deep learning to classify chest X-rays into COVID-19, Pneumonia, and Normal categories. Implemented CNN model training, testing, and evaluation using TensorFlow and Keras, achieving strong accuracy and interpretability. Integrated a Django-based web interface for real-time prediction and patient data management.",
      tech: ["Python", "TensorFlow", "Keras", "Django", "Deep Learning"],
      highlights: ["Real-time prediction", "Patient data management", "High accuracy classification"]
    },
    {
      title: "Expense Tracker",
      subtitle: "Full-Stack Web Application",
      description: "Built a comprehensive expense tracking application with React frontend and Django backend. Features include expense categorization, budget management, data visualization, and detailed financial reports.",
      tech: ["React", "Django", "SQL", "REST API", "JavaScript"],
      highlights: ["Real-time tracking", "Data visualization", "Expense categorization"]
    },
    {
      title: "TrekNepal",
      subtitle: "Web-based Trek Information Platform",
      description: "Designed and developed a responsive website using HTML, CSS, and JavaScript to provide trekking routes, preparation tips, and safety information for adventure enthusiasts in Nepal. Focused on clean UI, responsive design, and interactive content delivery.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      highlights: ["Interactive UI", "Comprehensive trek info", "Mobile-friendly"]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "C", "C++", "SQL"],
    "Web Development": ["HTML", "CSS", "JavaScript", "Django", "React"],
    "Mobile Development": ["Flutter", "Dart"],
    "Tools & Technologies": ["TensorFlow", "Scikit-learn", "Git", "AWS", "IoT Systems"],
    "Soft Skills": ["Communication", "Problem Solving", "Time Management", "Adaptability", "Team Collaboration"]
  };

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialId: "AWS-SA-123456",
      description: "Gained knowledge of cloud architecture, deployment, and service management using AWS"
    },
    {
      title: "Certificate of Completion of Python and Data Science Training",
      issuer: "Sipalaya Infotech",
      date: "2025",
      credentialId: "PDS-789012",
      description: "Gained valuable insights on data handling and various AI/ML models related to data processing"
    }
  ];

  const workshops = [
    {
      title: "Python and Data Science Training",
      organizer: "Sipalaya Infotech",
      duration: "3 Months",
      date: "August 20 - November 20, 2025",
      description: "Understood the concepts and working of various Python libraries, SQL Workbench and AI/ML models and libraries"
    },
    {
      title: "IoT Workshop",
      organizer: "NCIT",
      duration: "3 Days",
      date: "June 2-4, 2025",
      description: "Worked with sensors, microcontrollers, and IoT data communication systems"
    },
    {
      title: "Django Workshop",
      organizer: "Nepal Tek Community",
      duration: "3 Days",
      date: "May 2-4, 2025",
      description: "Built dynamic web applications with backend integration and authentication"
    },
    {
      title: "Flutter Workshop",
      organizer: "Nepal Tek Community",
      duration: "2 Days",
      date: "February 2-3, 2025",
      description: "Developed cross-platform mobile apps using Flutter and Dart"
    }
  ];

  const interests = [
    { icon: <Brain className="w-6 h-6" />, title: "Artificial Intelligence" },
    { icon: <Code className="w-6 h-6" />, title: "Computer Vision" },
    { icon: <Globe className="w-6 h-6" />, title: "Web Systems" },
    { icon: <Cpu className="w-6 h-6" />, title: "IoT & Embedded Systems" },
    { icon: <Database className="w-6 h-6" />, title: "Database" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Data Science" }
  ];

   return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">Shatansh Adhikari</h1>

          <div className="nav-links">
            {["home", "about", "projects", "skills", "certifications", "training"].map(
              (section) => (
                <button
                  key={section}
                  className={`nav-link ${
                    activeSection === section ? "active" : ""
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </button>
              )
            )}
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {["home", "about", "projects", "skills", "certifications", "training"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </button>
              )
            )}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <h2 className="hero-title">Hi, I'm Shatansh</h2>
        <p className="hero-subtitle">
          IT Student | AI Enthusiast | Web Developer | Data Science Enthusiast | Cloud Practitioner 
        </p>
        <p className="hero-text">
          Passionate about solving real-world problems using AI, Web
          Technologies, and Software Engineering.
        </p>

        <div className="hero-actions">
          <a href="mailto:shatanshadh@gmail.com" className="primary-btn">
            <Mail size={18} /> Contact Me
          </a>
          <button
            className="secondary-btn"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-dark">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-2">
          <div className="card">
            <h3>Education</h3>
            <p>
              <strong>BE in Information Technology</strong>
            </p>
            <p>NCIT, Pokhara University</p>
            <p>Expected Graduation: 2026</p>
          </div>

          <div className="card">
            <h3>Contact</h3>
            <p>
              <a href="mailto:shatanshadh@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}><Mail size={16} /> shatanshadh@gmail.com</a>
            </p>
            <p>
              <Phone size={16} /> 9841429613
            </p>
            <p>
              <MapPin size={16} /> Kathmandu, Nepal
            </p>
          </div>
        </div>

        <div className="grid grid-3 interests-grid">
          {interests.map((item, i) => (
            <div key={i} className="card">
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-3">
          {projects.map((project, i) => (
            <div key={i} className="card">
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <p>{project.description}</p>

              <div className="tags">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="list">
                {project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-dark">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-2">
          {Object.entries(skills).map(([key, values], i) => (
            <div key={i} className="card">
              <h3>{key}</h3>
              <div className="tags">
                {values.map((v, idx) => (
                  <span key={idx} className="tag">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section section-dark">
        <h2 className="section-title">Certifications</h2>

        {certifications.map((cert, i) => (
          <div key={i} className="card">
            <h3>{cert.title}</h3>
            <p><strong>{cert.issuer}</strong> • {cert.date}</p>
            <p>Credential ID: {cert.credentialId}</p>
            <p>{cert.description}</p>
          </div>
        ))}
      </section>

      {/* EXPERIENCE */}
      <section id="training" className="section">
        <h2 className="section-title">Trainings & Workshops</h2>

        {workshops.map((w, i) => (
          <div key={i} className="card">
            <h3>{w.title}</h3>
            <p>{w.organizer}</p>
            <p>{w.duration} • {w.date}</p>
            <p>{w.description}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Let's build something amazing together 🚀</p>

        <div className="footer-icons">
          <a href="mailto:shatanshadh@gmail.com">
            <Mail />
          </a>
          <a href="https://github.com/ShatanshAdhikari">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/shatansh-adhikari-792657343/">
            <Linkedin />
          </a>
        </div>

        <p>© 2026 Shatansh Adhikari</p>
      </footer>
    </div>
  );
};

export default Portfolio;