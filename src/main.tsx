import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { setupParallax } from "./parallax";

const experience = [
  {
    company: "Wiro",
    role: "Technical Project Manager",
    period: "Jun 2025 — Present",
    summary:
      "Leading end-to-end Shopify and Shopify Plus delivery across technical scoping, solution planning, agile execution, UAT, and retainer growth.",
    tags: ["Shopify Plus", "Technical scoping", "Retainers", "CRO"],
  },
  {
    company: "Tenovia",
    role: "Project Manager",
    period: "Sep 2024 — Jun 2025",
    summary:
      "Delivered enterprise Shopify Plus programs, introduced stronger delivery systems, and drove measurable conversion and site-speed gains.",
    tags: ["Enterprise", "SOPs", "Performance", "B2B"],
  },
  {
    company: "Marmeto",
    role: "Project Manager",
    period: "Oct 2022 — Aug 2024",
    summary:
      "Owned scope, delivery, risk, design workshops, and client relationships for a broad portfolio of high-growth ecommerce brands.",
    tags: ["Client leadership", "Risk", "Workshops", "Upsell"],
  },
  {
    company: "Growth99",
    role: "Project Manager",
    period: "Mar 2022 — Sep 2022",
    summary:
      "Managed Project and SSM teams, improved onboarding, and helped double delivery speed by reducing operational roadblocks.",
    tags: ["Team leadership", "Process", "Onboarding"],
  },
  {
    company: "QuickMove Technologies",
    role: "Business Development Executive",
    period: "May 2021 — Feb 2022",
    summary:
      "Built lead-generation processes and referral programs, developed sales strategy, and contributed to 30% sales growth.",
    tags: ["Sales", "Growth", "Proposals"],
  },
];

const impact = [
  {
    number: "01",
    metric: "+2%",
    metricLabel: "conversion-rate impact",
    title: "Performance-led delivery",
    copy: "Turned optimisation priorities into a controlled Shopify Plus delivery plan—improving conversion while lifting average site-speed scores by 75%.",
    tags: ["Shopify Plus", "CRO", "Performance"],
    className: "impact-card-lilac",
  },
  {
    number: "02",
    metric: "100%",
    metricLabel: "on time & within budget",
    title: "Control without friction",
    copy: "Delivered end-to-end Shopify work with zero escalations through clear scoping, agile rituals and proactive risk management.",
    tags: ["Delivery", "UAT", "Risk"],
    className: "impact-card-blue",
  },
  {
    number: "03",
    metric: "2×",
    metricLabel: "faster team delivery",
    title: "Less drag. More flow.",
    copy: "Managed Project and SSM teams, strengthened onboarding and removed operational blockers so work could move twice as fast.",
    tags: ["Operations", "Teams", "Process"],
    className: "impact-card-coral",
  },
  {
    number: "04",
    metric: "15–20+",
    metricLabel: "tickets in motion",
    title: "Momentum after launch",
    copy: "Balanced enhancements, CRO initiatives and technical work across high-volume retainer backlogs without losing sight of merchant goals.",
    tags: ["Retainers", "Prioritisation", "Growth"],
    className: "impact-card-yellow",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Delivery control",
    items: ["Agile & Scrum", "Sprint planning", "UAT cycles", "Risk mitigation"],
  },
  {
    number: "02",
    title: "Technical clarity",
    items: ["Technical scoping", "Solution planning", "SOW creation", "Shopify B2B"],
  },
  {
    number: "03",
    title: "Growth thinking",
    items: ["CRO strategy", "GA4 collaboration", "Microsoft Clarity", "Performance optimisation"],
  },
  {
    number: "04",
    title: "Commercial trust",
    items: ["Stakeholder management", "Retainer growth", "Financial tracking", "Escalation management"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const cleanupParallax = setupParallax();
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      cleanupParallax();
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="mark" href="#top" aria-label="Taskeen Meher, home"><span>TM</span></a>
          <div className="nav-center">
            <a href="#impact">Impact</a>
            <a href="#experience">Experience</a>
            <a href="#capabilities">Capabilities</a>
          </div>
          <a className="nav-cta" href="mailto:taskeenmeher13@gmail.com">Get in touch <Arrow /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-pills" aria-label="Professional focus" data-parallax="0.012">
            <span className="pill pill-lilac">✦ Technical PM</span>
            <span className="pill pill-yellow">◫ Shopify Plus</span>
            <span className="pill pill-coral">↗ Ecommerce</span>
            <span className="pill pill-blue">⌁ Bangalore</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy-block" data-parallax="0.018">
              <p className="hero-kicker">Hello, I&apos;m</p>
              <h1><span>Taskeen</span><span>Meher</span></h1>
              <h2>Technical Project Manager<br />in the Shopify ecosystem.</h2>
              <p className="hero-intro">
                I turn complex ecommerce builds into clear plans, aligned teams and measurable launches—without the delivery drama.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#impact">See my impact <span aria-hidden="true">↓</span></a>
                <a className="button button-paper" href={`${base}Taskeen-Meher-Resume.pdf`} download>Download résumé <Arrow /></a>
              </div>
            </div>

            <figure className="hero-portrait" data-parallax="0.028">
              <div className="portrait-shadow portrait-shadow-one" aria-hidden="true" />
              <div className="portrait-shadow portrait-shadow-two" aria-hidden="true" />
              <div className="portrait-image-wrap">
                <img src={`${base}taskeen-meher.jpg`} alt="Taskeen Meher, Technical Project Manager" />
              </div>
              <figcaption>
                <span className="status-dot" />
                Open to the right opportunity
              </figcaption>
            </figure>
          </div>

          <div className="proof" aria-label="Career highlights" data-parallax="0.01">
            <div className="proof-lilac"><strong>4+</strong><span>years leading digital delivery</span></div>
            <div className="proof-blue"><strong>100%</strong><span>on-time delivery at Wiro</span></div>
            <div className="proof-coral"><strong>4.5/5</strong><span>average client satisfaction</span></div>
            <div className="proof-yellow"><strong>+75%</strong><span>average site-speed score</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Selected brand experience">
          <div className="ticker-track">
            <div>
              <span>boAt</span><i>✦</i><span>Bestseller</span><i>✦</i><span>Health &amp; Glow</span><i>✦</i><span>Pavers England</span><i>✦</i><span>Durex</span><i>✦</i><span>Superkicks</span><i>✦</i><span>Kickgame</span><i>✦</i><span>Drip Moda</span><i>✦</i>
            </div>
            <div aria-hidden="true">
              <span>boAt</span><i>✦</i><span>Bestseller</span><i>✦</i><span>Health &amp; Glow</span><i>✦</i><span>Pavers England</span><i>✦</i><span>Durex</span><i>✦</i><span>Superkicks</span><i>✦</i><span>Kickgame</span><i>✦</i><span>Drip Moda</span><i>✦</i>
            </div>
          </div>
        </section>

        <section className="section profile shell" id="about">
          <div className="section-head" data-reveal>
            <p>01 / Profile</p>
            <span>Strategy ↔ Execution</span>
          </div>
          <div className="profile-grid">
            <div className="profile-title" data-reveal>
              <h2>I make complex<br />delivery feel <em>simple.</em></h2>
            </div>
            <div className="profile-copy" data-reveal>
              <p className="lead">The best project management feels almost invisible.</p>
              <p>Teams know what matters. Clients know what&apos;s next. Risks surface early, decisions stay documented, and every sprint connects back to a merchant outcome.</p>
              <div className="profile-principles">
                <span>Clear over clever</span>
                <span>Proactive over reactive</span>
                <span>Outcomes over output</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section impact" id="impact">
          <div className="shell">
            <div className="section-head section-head-light" data-reveal>
              <p>02 / Selected impact</p>
              <span>Numbers tell the story</span>
            </div>
            <div className="impact-heading" data-reveal>
              <h2>Work that moved<br />the <em>needle.</em></h2>
              <p>Selected outcomes across ecommerce delivery, performance, growth and team operations.</p>
            </div>
            <div className="impact-grid">
              {impact.map((item) => (
                <article className={`impact-card ${item.className}`} key={item.number} data-reveal>
                  <div className="impact-topline"><span>{item.number}</span><span>Selected outcome</span></div>
                  <div className="impact-metric"><strong data-parallax="0.012">{item.metric}</strong><span>{item.metricLabel}</span></div>
                  <div className="impact-copy">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <div className="impact-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience shell" id="experience">
          <div className="section-head" data-reveal>
            <p>03 / Experience</p>
            <span>2021 — Present</span>
          </div>
          <div className="experience-layout">
            <div className="experience-intro" data-reveal>
              <span className="mini-label">Shopify ecosystem</span>
              <h2>Four years.<br />One clear<br /><em>through-line.</em></h2>
              <p>Bring structure to fast-moving ecommerce teams while keeping the client, the commercial goal and the customer experience in view.</p>
            </div>

            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item" key={item.company} data-reveal>
                  <div className="timeline-number">0{index + 1}</div>
                  <div className="timeline-content">
                    <div className="timeline-top">
                      <div>
                        <h3>{item.role}</h3>
                        <p>{item.company}</p>
                      </div>
                      <time>{item.period}</time>
                    </div>
                    <p className="timeline-summary">{item.summary}</p>
                    <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="shell">
            <div className="section-head" data-reveal>
              <p>04 / Capabilities</p>
              <span>The operating system</span>
            </div>
            <div className="capabilities-heading" data-reveal>
              <h2>What I bring<br />to the <em>table.</em></h2>
              <p>Equal parts delivery discipline, technical curiosity and client empathy.</p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability, index) => (
                <article className={`capability-card capability-${index + 1}`} key={capability.number} data-reveal>
                  <span>{capability.number}</span>
                  <h3>{capability.title}</h3>
                  <ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>

            <div className="education" data-reveal>
              <div>
                <p className="education-kicker">Education</p>
                <h3>MBA, Project Management</h3>
                <p>Jain University · SGPA 9+ · 2022–2024</p>
              </div>
              <div>
                <p className="education-kicker">Foundation</p>
                <h3>BBA (Honours)</h3>
                <p>CMR University · CGPA 9.5 · 2018–2021</p>
              </div>
              <div>
                <p className="education-kicker">Certification</p>
                <h3>Google Project Management</h3>
                <p>Digital Certificate Program · 2021</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact shell" id="contact" data-reveal>
          <p className="contact-kicker">Let&apos;s connect</p>
          <h2>Need someone who can<br />hold the plan <em>and</em> the room?</h2>
          <div className="contact-bottom">
            <p>Let&apos;s talk about ambitious Shopify delivery, strong client relationships and growth that can be measured.</p>
            <div className="contact-actions">
              <a className="button button-dark" href="mailto:taskeenmeher13@gmail.com">Email me <Arrow /></a>
              <a className="button button-paper" href="https://www.linkedin.com/in/taskeen-meher-3aa365194" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <a className="mark mark-small" href="#top" aria-label="Back to top"><span>TM</span></a>
        <p>Technical Project Manager · Shopify ecosystem</p>
        <p>© 2026 Taskeen Meher</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
