"use client";

import { useEffect, useState } from "react";

const education = [
  {
    title: "XIMB (2026 - 2028)",
    subtitle: "MBA in Business Management",
    status: "Current Program",
  },
  {
    title: "Symbiosis Law School, Pune (2021 - 2026)",
    subtitle: "BA LLB (Hons.)",
    detail: "CGPA: 7.71",
  },
  {
    title: "Delhi Public School, Vadodara",
    subtitle: "Class XII: 91.2% | Class X: 94.6%",
  },
];

const internships = [
  {
    company: "Vishwa Samudra Holdings",
    summary:
      "Worked on contract review, trademark licensing, and arbitration research, while analyzing insolvency matters under the IBC.",
  },
  {
    company: "Jindal Stainless Limited",
    summary:
      "Conducted legal research on environmental regulations and industrial compliance frameworks relevant to manufacturing operations.",
  },
  {
    company: "NALCO",
    summary:
      "Worked extensively on mining law, contract law, arbitration, RTI compliance, and legislative competence under constitutional provisions.",
  },
  {
    company: "K Law",
    summary:
      "Assisted in drafting Share Subscription Agreements, Share Purchase Agreements, and due diligence reports along with stamp duty analysis.",
  },
  {
    company: "Parashurami Legal",
    summary:
      "Engaged in legislative analysis, legal drafting, and case law research using structured legal methodologies.",
  },
];

const achievements = [
  "Speaker, Nanavati Memorial Moot Court Competition",
  "Researcher, Ignatius National Trial Competition",
  "Semi-finalist, Surana & Surana NUSRL Criminal Law Moot Court Competition",
  "Awarded Third Best Memorial for legal drafting and argument structuring",
  "Top 5 Merit Holder, IDIA Memorial Drafting Competition",
];

const positions = [
  "Head Girl (Junior)",
  "Senior Deputy Cultural Secretary",
  "Senior Member, Mental Health Champions",
  "Hospitality & Transport Committee, Symbhav",
];

const legalSkills = [
  "Legal Research",
  "Contract Drafting",
  "Due Diligence",
  "Compliance Analysis",
  "Arbitration Research",
  "Case Law Analysis",
];

const businessSkills = [
  "Strategic Thinking",
  "Leadership",
  "Public Speaking",
  "Team Coordination",
  "Analytical Thinking",
  "Research Writing",
  "Time Management",
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(
      "Message received. I appreciate you reaching out — I will respond soon."
    );
    event.currentTarget.reset();
  };

  return (
    <main className="portfolio-shell">
      <div className="page-frame">
        <header className="topbar">
          <div className="brand-mark">
            <span className="brand-initial">S</span>
            <span className="brand-label">MAHAPATRA</span>
          </div>
          <nav className="top-actions">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#contact" className="nav-link nav-cta">
              Contact
            </a>
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              aria-label="Toggle light and dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </nav>
        </header>

        <section id="hero" className="hero-panel reveal-up">
          <div className="hero-copy">
            <span className="eyebrow">Law Graduate | MBA Candidate | Business & Strategy Enthusiast</span>
            <h1>
              Sweekruti <span className="text-gold">Mahapatra</span>
            </h1>
            <p className="hero-intro">
              A law graduate transitioning into management, with a strong foundation in corporate and business law,
              and interested in finance, strategy, and operations. Passionate about building solutions at the
              intersection of law and business.
            </p>
            <div className="hero-actions">
              <a href="#about" className="btn btn-primary">
                About Me
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-core glass-card">
              <p className="visual-label">Legal Strategy</p>
              <h2>Compliance, Growth & Strategy</h2>
              <p>
                Combining analytical legal rigour with management insight to deliver structured business outcomes.
              </p>
              <div className="visual-pill-row">
                <span>Compliance</span>
                <span>Leadership</span>
                <span>Strategy</span>
              </div>
            </div>
            <div className="hero-decoration" />
          </div>
        </section>

        <section id="about" className="section-panel reveal-up">
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2>Multidisciplinary growth through law and management</h2>
          </div>
          <p>
            A law graduate with an academic foundation rooted in legal research, compliance, and corporate law, now
            pursuing an MBA in Business Management to deepen expertise in finance, strategy, and organizational
            leadership. My journey from science to law and now management reflects adaptability, curiosity and a
            multidisciplinary approach to problem-solving.
          </p>
        </section>

        <section id="education" className="section-panel reveal-up">
          <div className="section-header">
            <span className="section-label">Education Timeline</span>
            <h2>Academic milestones shaped for leadership</h2>
          </div>
          <div className="timeline">
            {education.map((item, index) => (
              <div key={item.title} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>
                  {item.detail ? <p className="timeline-detail">{item.detail}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section-panel reveal-up">
          <div className="section-header">
            <span className="section-label">Internship Experience</span>
            <h2>Professional exposure across legal and corporate domains</h2>
          </div>
          <div className="cards-grid">
            {internships.map((item) => (
              <article key={item.company} className="glass-card experience-card">
                <h3>{item.company}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="section-panel reveal-up">
          <div className="section-header">
            <span className="section-label">Mooting & Drafting</span>
            <h2>Achievements that showcase advocacy, research and precision</h2>
          </div>
          <div className="highlight-card glass-card">
            <p>
              Celebrated for legal research, drafting precision, oral advocacy, argument building, and analytical
              reasoning.
            </p>
            <ul>
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="leadership" className="section-panel reveal-up">
          <div className="section-header">
            <span className="section-label">Leadership & Responsibility</span>
            <h2>Roles that reflect coordination, engagement and influence</h2>
          </div>
          <div className="cards-grid leadership-grid">
            {positions.map((item) => (
              <article key={item} className="glass-card position-card">
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-panel reveal-up">
          <div className="section-header">
            <span className="section-label">Skills</span>
            <h2>Capabilities at the intersection of law and business</h2>
          </div>
          <div className="skill-grid">
            <div className="skill-block">
              <h3>Legal Skills</h3>
              <div className="skill-chip-row">
                {legalSkills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-block">
              <h3>Business & Professional Skills</h3>
              <div className="skill-chip-row">
                {businessSkills.map((skill) => (
                  <span key={skill} className="skill-chip skill-chip-soft">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="interests" className="section-panel reveal-up">
          <div className="section-header">
            <span className="section-label">Extra-Curricular & Interests</span>
            <h2>Creative expression and cultural engagement</h2>
          </div>
          <div className="split-panel">
            <article className="interest-card glass-card">
              <h3>Dance</h3>
              <ul>
                <li>Odissi — 1.5 years</li>
                <li>Bharatanatyam — 6 years (Upanya Visharad)</li>
              </ul>
            </article>
            <article className="interest-card glass-card">
              <h3>Interests</h3>
              <ul>
                <li>Reading fiction</li>
                <li>Nature photography</li>
                <li>Organizing cultural activities</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="contact" className="section-panel contact-section reveal-up">
          <div className="section-header">
            <span className="section-label">Contact</span>
            <h2>Connect for collaboration, mentorship, or opportunity</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card glass-card">
              <h3>Let's connect</h3>
              <p>
                Feel free to reach out! <br />
                Would love to connect with everyone ✨
              </p>
              <div className="contact-list">
                <a href="mailto: sweekruti1708@gmail.com "> sweekruti1708@gmail.com </a>
                <a href="https://www.linkedin.com/in/sweekruti-mahapatra" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" required placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} required placeholder="How can we collaborate?"></textarea>
              </label>
              <button type="submit" className="btn btn-primary contact-submit">
                Send message
              </button>
              {status ? <p className="form-status">{status}</p> : null}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
