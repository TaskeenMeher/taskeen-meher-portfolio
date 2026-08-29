import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { setupParallax } from "./parallax";

const experience = [
  {
    company: "Wiro",
    partner: "Shopify Premier Partner",
    role: "Technical Project Manager",
    period: "June 2025 to present",
    summary:
      "I manage Shopify and Shopify Plus work from the first technical conversation through launch and ongoing growth.",
    points: [
      "Own technical scoping, onboarding, solution planning, sprint delivery, QA, UAT and launch coordination.",
      "Prioritise 15 to 20+ concurrent retainer tickets across enhancements, CRO initiatives and performance optimisation.",
      "Coordinate developers, designers, QA, CRO and GA4 specialists while tracking financials, risks, KPIs and client decisions.",
      "Maintain a 100% on-time and within-budget delivery record with zero escalations, including work for Kick Game and Drip Moda.",
    ],
    tags: ["Shopify Plus", "Technical scoping", "Retainers", "CRO"],
  },
  {
    company: "Tenovia",
    partner: "Shopify Plus agency",
    role: "Project Manager",
    period: "September 2024 to June 2025",
    summary:
      "I led enterprise and B2B Shopify Plus delivery, with a focus on process control, client retention and site performance.",
    points: [
      "Ran requirement gathering, scope documentation and risk mitigation to keep timelines stable and reduce change requests.",
      "Introduced SOPs, process tracking and automated performance monitoring to improve delivery consistency.",
      "Contributed to a 2% CVR improvement and a 75% average lift in site speed scores through data-led prioritisation.",
      "Maintained 4.5/5 average CSAT and a 5/5 KPI scorecard across Bestseller, Health & Glow, Pavers England, Baggit and Union Home B2B.",
    ],
    tags: ["Enterprise", "SOPs", "Performance", "B2B"],
  },
  {
    company: "Marmeto",
    partner: "Shopify Platinum Partner",
    role: "Project Manager",
    period: "October 2022 to August 2024",
    summary:
      "I was the day-to-day client lead for a broad portfolio of high-growth ecommerce brands and Shopify B2B work.",
    points: [
      "Defined scopes, objectives and deliverables with stakeholders, then identified risks and put mitigation plans in place.",
      "Led developers, designers and QA through delivery, ran design workshops and kept clients aligned on project decisions.",
      "Maintained an average CSAT of 4.5/5 and consistently achieved a 5/5 KPI scorecard while identifying relevant upsell opportunities.",
      "Managed accounts including boAt, Slurrp Farm, Enamor, Durex, Urban Monkey, Superkicks, FableStreet, Nasher Miles, Reise Moto and Power Gummies.",
    ],
    tags: ["Client leadership", "Risk", "Workshops", "Upsell"],
  },
  {
    company: "Growth99",
    partner: "Health-tech growth platform",
    role: "Project Manager",
    period: "March 2022 to September 2022",
    summary:
      "I helped shape the delivery process while managing both the Project and SSM teams.",
    points: [
      "Worked across the project lifecycle, from business planning and onboarding through issue resolution and task prioritisation.",
      "Helped develop assembly-line procedures and removed team roadblocks, increasing delivery speed by 2x.",
      "Supported start-ups with smoother onboarding and practical steps for scaling their business.",
    ],
    tags: ["Team leadership", "Process", "Onboarding"],
  },
  {
    company: "QuickMove Technologies",
    partner: "Business technology services",
    role: "Business Development Executive",
    period: "May 2021 to February 2022",
    summary:
      "My first commercial role built the client and growth foundation I now bring to project delivery.",
    points: [
      "Created lead-generation and referral processes, scheduled product demonstrations and supported deal closure.",
      "Structured sales plans, proposals and contracts that contributed to a 30% increase in sales.",
    ],
    tags: ["Sales", "Growth", "Proposals"],
  },
];

const impact = [
  {
    number: "01",
    metric: "+2%",
    metricLabel: "conversion rate improvement",
    title: "CRO and site performance",
    copy: "Used performance data to prioritise Shopify Plus improvements that increased CVR by 2% and lifted average site speed scores by 75%.",
    tags: ["Shopify Plus", "CRO", "Performance"],
    className: "impact-card-lilac",
  },
  {
    number: "02",
    metric: "100%",
    metricLabel: "on time and within budget",
    title: "Wiro delivery record",
    copy: "Delivered Shopify and Shopify Plus work on schedule and within budget, with zero escalations recorded in the resume period.",
    tags: ["Delivery", "UAT", "Risk"],
    className: "impact-card-blue",
  },
  {
    number: "03",
    metric: "2x",
    metricLabel: "faster project delivery",
    title: "Project and SSM operations",
    copy: "Managed Project and SSM teams, strengthened onboarding and removed operational blockers so work could move twice as fast.",
    tags: ["Operations", "Teams", "Process"],
    className: "impact-card-coral",
  },
  {
    number: "04",
    metric: "15 to 20+",
    metricLabel: "concurrent retainer tickets",
    title: "Retainer backlog management",
    copy: "Balanced enhancements, CRO initiatives and technical work across high-volume retainer backlogs without losing sight of merchant goals.",
    tags: ["Retainers", "Prioritisation", "Growth"],
    className: "impact-card-yellow",
  },
];

const caseStudySlots = [
  {
    number: "01",
    type: "Shopify Plus delivery",
    title: "Build or migration",
    fields: ["Business context", "My responsibility", "Delivery decisions", "Launch result"],
  },
  {
    number: "02",
    type: "CRO and performance",
    title: "Growth programme",
    fields: ["Performance baseline", "Prioritisation", "Team coordination", "Measured result"],
  },
  {
    number: "03",
    type: "Ongoing account growth",
    title: "Retainer programme",
    fields: ["Merchant goal", "Backlog approach", "Client cadence", "Commercial result"],
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
            <a href="#case-studies">Case studies</a>
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
                I manage Shopify and Shopify Plus projects from technical scoping through launch and ongoing growth. I keep delivery clear for clients, developers, designers, QA, CRO and GA4 teams.
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
                Wiro, Shopify Premier Partner
              </figcaption>
            </figure>
          </div>

          <div className="proof" aria-label="Career highlights" data-parallax="0.01">
            <div className="proof-lilac"><strong>4+</strong><span>years in agency project delivery</span></div>
            <div className="proof-blue"><strong>100%</strong><span>on time and within budget at Wiro</span></div>
            <div className="proof-coral"><strong>4.5/5</strong><span>average client satisfaction</span></div>
            <div className="proof-yellow"><strong>15 to 20+</strong><span>concurrent retainer tickets</span></div>
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
            <span>Scope, delivery and growth</span>
          </div>
          <div className="profile-grid">
            <div className="profile-title" data-reveal>
              <h2>Shopify delivery,<br />from brief to<br /><em>ongoing growth.</em></h2>
            </div>
            <div className="profile-copy" data-reveal>
              <p className="lead">I work where merchant goals, technical delivery and client expectations meet.</p>
              <p>I turn business requests into workable scope, give each specialist the context they need, and keep clients informed before a risk becomes an escalation. My experience covers technical discovery, solution planning, sprints, QA, UAT, Shopify B2B, retainers, CRO and performance optimisation.</p>
              <div className="profile-principles">
                <span>Scope and onboarding</span>
                <span>Sprints, QA and UAT</span>
                <span>Retainers, CRO and growth</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section impact" id="impact">
          <div className="shell">
            <div className="section-head section-head-light" data-reveal>
              <p>02 / Selected impact</p>
              <span>Figures from my resume</span>
            </div>
            <div className="impact-heading" data-reveal>
              <h2>Results, with<br />the <em>context.</em></h2>
              <p>Delivery, performance and operational outcomes, explained clearly enough to understand in a quick review.</p>
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
            <span>May 2021 to present</span>
          </div>
          <div className="experience-layout">
            <div className="experience-intro" data-reveal>
              <span className="mini-label">Professional experience</span>
              <h2>Shopify delivery,<br /><em>in detail.</em></h2>
              <p>Company names lead each entry. The responsibilities, results and brand experience below come from my resume.</p>
            </div>

            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item" key={item.company} data-reveal>
                  <div className="timeline-number">0{index + 1}</div>
                  <div className="timeline-content">
                    <div className="timeline-top">
                      <div>
                        <div className="timeline-company-row">
                          <h3>{item.company}</h3>
                          <span>{item.partner}</span>
                        </div>
                        <p className="timeline-role">{item.role}</p>
                      </div>
                      <time>{item.period}</time>
                    </div>
                    <p className="timeline-summary">{item.summary}</p>
                    <ul className="timeline-points">
                      {item.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                    <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section case-studies shell" id="case-studies">
          <div className="section-head" data-reveal>
            <p>04 / Case studies</p>
            <span>Structure ready for Wiro work</span>
          </div>
          <div className="case-heading" data-reveal>
            <div>
              <span className="mini-label">Next content update</span>
              <h2>Space for the work<br />behind the <em>results.</em></h2>
            </div>
            <p>These are the three case-study formats prepared for the Wiro material you are sending. The final portfolio will show the real project brief, your decisions, the delivery process and approved outcomes.</p>
          </div>
          <div className="case-grid">
            {caseStudySlots.map((study) => (
              <article className="case-card" key={study.number} data-reveal>
                <div className="case-top"><span>{study.number}</span><span>Content reserved</span></div>
                <p>{study.type}</p>
                <h3>{study.title}</h3>
                <div className="case-fields">
                  {study.fields.map((field) => <span key={field}>{field}</span>)}
                </div>
                <small>Ready for your source material</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="shell">
            <div className="section-head" data-reveal>
              <p>05 / Capabilities</p>
              <span>Skills used in delivery</span>
            </div>
            <div className="capabilities-heading" data-reveal>
              <h2>Skills I use<br />to run the <em>work.</em></h2>
              <p>A practical mix of project control, Shopify knowledge, performance thinking and client management.</p>
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
                <p>Jain University · SGPA above 9 · 2022 to 2024</p>
              </div>
              <div>
                <p className="education-kicker">Foundation</p>
                <h3>BBA (Honours)</h3>
                <p>CMR University · CGPA 9.5 · 2018 to 2021</p>
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
          <h2>Have a Shopify project<br />management role <em>in mind?</em></h2>
          <div className="contact-bottom">
            <p>I&apos;d be glad to discuss Shopify delivery, technical project management, client relationships and ecommerce growth.</p>
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
