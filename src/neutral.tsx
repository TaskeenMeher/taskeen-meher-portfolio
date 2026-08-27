import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./neutral.css";

const outcomes = [
  {
    metric: "+2%",
    label: "Conversion-rate impact",
    title: "Performance-led delivery",
    copy: "Structured Shopify Plus optimisation around evidence, technical feasibility and merchant impact—while lifting average site-speed scores by 75%.",
  },
  {
    metric: "100%",
    label: "On time and within budget",
    title: "Controlled execution",
    copy: "Delivered end-to-end Shopify work with zero escalations through clear scope, visible risks and disciplined decision-making.",
  },
  {
    metric: "2×",
    label: "Faster delivery",
    title: "Better operating rhythm",
    copy: "Strengthened onboarding, prioritisation and team processes to remove roadblocks and double delivery speed.",
  },
];

const experience = [
  {
    company: "Wiro",
    role: "Technical Project Manager",
    period: "Jun 2025 — Present",
    copy: "Leading Shopify and Shopify Plus delivery from technical discovery and solution planning through agile execution, UAT and retainer growth.",
  },
  {
    company: "Tenovia",
    role: "Project Manager",
    period: "Sep 2024 — Jun 2025",
    copy: "Delivered enterprise Shopify Plus programs, introduced stronger delivery systems and drove measurable performance gains.",
  },
  {
    company: "Marmeto",
    role: "Project Manager",
    period: "Oct 2022 — Aug 2024",
    copy: "Owned scope, risk, delivery workshops and client relationships across a portfolio of high-growth ecommerce brands.",
  },
  {
    company: "Growth99",
    role: "Project Manager",
    period: "Mar 2022 — Sep 2022",
    copy: "Managed Project and SSM teams, improved onboarding and reduced operational blockers across delivery.",
  },
  {
    company: "QuickMove Technologies",
    role: "Business Development Executive",
    period: "May 2021 — Feb 2022",
    copy: "Built lead-generation and referral processes, developed sales strategy and contributed to 30% sales growth.",
  },
];

const capabilities = [
  "Shopify Plus",
  "Technical scoping",
  "Agile delivery",
  "Stakeholder management",
  "Risk management",
  "UAT",
  "CRO strategy",
  "Retainer growth",
  "Shopify B2B",
  "SOW creation",
  "Financial tracking",
  "Team leadership",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function NeutralPortfolio() {
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="n-skip" href="#main">Skip to content</a>
      <header className="n-header">
        <nav className="n-shell n-nav" aria-label="Primary navigation">
          <a className="n-wordmark" href="#top" aria-label="Taskeen Meher, home">
            <span>Taskeen</span><span>Meher.</span>
          </a>
          <div className="n-links">
            <a href="#about">About</a>
            <a href="#work">Selected impact</a>
            <a href="#experience">Experience</a>
          </div>
          <a className="n-button n-button-solid" href={`${base}Taskeen-Meher-Resume.pdf`} download>
            Résumé <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="n-hero n-shell" id="top">
          <div className="n-hero-copy">
            <div className="n-hero-left">
              <p className="n-eyebrow">Hello, I&apos;m</p>
              <h1>Taskeen<br />Meher.</h1>
            </div>
            <div className="n-hero-right">
              <p className="n-role">Technical Project Manager<br />Shopify ecosystem</p>
              <p className="n-intro">I align people, scope and growth goals to turn complex ecommerce programs into calm, measurable delivery.</p>
              <div className="n-hero-actions">
                <a href="#work">Explore my impact <span aria-hidden="true">→</span></a>
                <a href="mailto:taskeenmeher13@gmail.com">Start a conversation <Arrow /></a>
              </div>
            </div>
          </div>

          <div className="n-portrait-stage" aria-label="Taskeen Meher and career highlights">
            <div className="n-shape n-shape-one" aria-hidden="true" />
            <div className="n-shape n-shape-two" aria-hidden="true" />
            <img src={`${base}taskeen-meher.jpg`} alt="Taskeen Meher, Technical Project Manager" />
            <div className="n-stat n-stat-left"><strong>4+</strong><span>Years leading<br />digital delivery</span></div>
            <div className="n-stat n-stat-right"><strong>100%</strong><span>On-time delivery<br />at Wiro</span></div>
            <p className="n-availability"><span /> Bangalore · Open to the right opportunity</p>
          </div>
        </section>

        <section className="n-brand-strip" aria-label="Selected brand experience">
          <div className="n-shell">
            <p>Selected brand experience</p>
            <div><span>boAt</span><span>Bestseller</span><span>Health &amp; Glow</span><span>Pavers England</span><span>Durex</span><span>Superkicks</span></div>
          </div>
        </section>

        <section className="n-section n-about n-shell" id="about">
          <div className="n-section-label" data-reveal><span>01</span><p>What I do</p></div>
          <div className="n-about-grid">
            <div data-reveal>
              <p className="n-kicker">Strategy, translated into action.</p>
              <h2>From ambiguity<br />to a launch plan<br />people trust.</h2>
            </div>
            <div className="n-about-copy" data-reveal>
              <p className="n-lead">I work where business goals, technical delivery and client expectations meet.</p>
              <p>Across premier Shopify agencies, I&apos;ve led cross-functional teams through discovery, scoping, design, build, QA, launch and ongoing optimisation.</p>
              <ul>
                <li><span>01</span> Make ownership and decisions visible</li>
                <li><span>02</span> Surface risk before it becomes escalation</li>
                <li><span>03</span> Connect every sprint to merchant value</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="n-section n-work" id="work">
          <div className="n-shell">
            <div className="n-section-label n-section-label-light" data-reveal><span>02</span><p>Selected impact</p></div>
            <div className="n-work-heading" data-reveal>
              <h2>Outcomes first.</h2>
              <p>A concise view of the delivery results a recruiter should understand in thirty seconds.</p>
            </div>
            <div className="n-outcome-grid">
              {outcomes.map((outcome, index) => (
                <article className="n-outcome" key={outcome.metric} data-reveal>
                  <div className="n-outcome-index">0{index + 1}</div>
                  <strong>{outcome.metric}</strong>
                  <p className="n-outcome-label">{outcome.label}</p>
                  <div className="n-outcome-copy">
                    <h3>{outcome.title}</h3>
                    <p>{outcome.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="n-section n-experience n-shell" id="experience">
          <div className="n-section-label" data-reveal><span>03</span><p>Experience</p></div>
          <div className="n-experience-grid">
            <div className="n-experience-title" data-reveal>
              <p className="n-kicker">Built inside the Shopify ecosystem.</p>
              <h2>A career in<br />making work<br />move.</h2>
            </div>
            <div className="n-timeline">
              {experience.map((item, index) => (
                <article key={`${item.company}-${item.period}`} data-reveal>
                  <span className="n-time-index">0{index + 1}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="n-company">{item.company}</p>
                    <p className="n-time-copy">{item.copy}</p>
                  </div>
                  <time>{item.period}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="n-section n-capabilities" id="capabilities">
          <div className="n-shell">
            <div className="n-section-label" data-reveal><span>04</span><p>Capabilities</p></div>
            <div className="n-capabilities-grid">
              <div data-reveal>
                <p className="n-kicker">The working toolkit</p>
                <h2>Calm delivery<br />is a system.</h2>
              </div>
              <div className="n-skill-list" data-reveal>
                {capabilities.map((capability, index) => <span key={capability}><i>{String(index + 1).padStart(2, "0")}</i>{capability}</span>)}
              </div>
            </div>
            <div className="n-education" data-reveal>
              <div><span>Education</span><strong>MBA, Project Management</strong><p>Jain University · 2022–2024</p></div>
              <div><span>Foundation</span><strong>BBA (Honours)</strong><p>CMR University · 2018–2021</p></div>
              <div><span>Certification</span><strong>Google Project Management</strong><p>Digital Certificate Program · 2021</p></div>
            </div>
          </div>
        </section>

        <section className="n-contact n-shell" data-reveal>
          <p>Have a complex Shopify program?</p>
          <h2>Let&apos;s make it<br />feel manageable.</h2>
          <div>
            <a className="n-button n-button-light" href="mailto:taskeenmeher13@gmail.com">Email me <Arrow /></a>
            <a className="n-button n-button-outline" href="https://www.linkedin.com/in/taskeen-meher-3aa365194" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="n-footer n-shell">
        <a className="n-wordmark" href="#top"><span>Taskeen</span><span>Meher.</span></a>
        <p>Technical Project Manager · Shopify ecosystem</p>
        <p>© 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NeutralPortfolio />
  </StrictMode>,
);
