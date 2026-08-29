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
      "I manage technical builds and growth retainers from the first client conversation through launch and ongoing optimisation.",
    points: [
      "Lead technical scoping, onboarding and solution architecture across pre-sales and delivery phases.",
      "Prioritise 15 to 20+ concurrent retainer tickets across enhancements, CRO initiatives and performance optimisation.",
      "Run sprint planning, stand-ups, demos, QA and UAT while keeping scope, dependencies and decisions visible.",
      "Coordinate developers, designers, QA, CRO and GA4 specialists to improve conversion, AOV and site performance.",
      "Use AI tools to speed up SOW creation, requirement documentation and early risk analysis.",
      "Track financials, risks and KPIs, strengthen client relationships and support retainer renewals.",
      <>Maintain a 100% on-time and within-budget delivery record with zero escalations, including work for <strong>Kick Game</strong> and <strong>DripModa</strong>.</>,
    ],
    tags: ["Shopify Plus", "Technical scoping", "Retainers", "CRO"],
  },
  {
    company: "Tenovia",
    partner: "Shopify Plus agency",
    role: "Project Manager",
    period: "September 2024 to June 2025",
    summary:
      "I led enterprise and B2B ecommerce delivery, with a focus on process control, client retention and site performance.",
    points: [
      "Delivered Shopify Plus projects with strong timeline adherence and high client retention.",
      "Ran requirement gathering, scope documentation and risk mitigation to keep timelines stable and reduce change requests.",
      "Introduced SOPs, process tracking and automated performance monitoring to improve delivery consistency.",
      "Improved website performance through structured optimisation initiatives and automated monitoring workflows.",
      "Contributed to a 2% CVR improvement and a 75% average lift in site speed scores through data-led prioritisation.",
      "Maintained an average CSAT of 4.5/5 and achieved a 5/5 KPI scorecard.",
      <>Managed enterprise and B2B accounts including <strong>Bestseller</strong> brands <strong>Jack & Jones</strong>, <strong>Vero Moda</strong> and <strong>ONLY</strong>, plus <strong>Health & Glow</strong>, <strong>Pavers England</strong>, <strong>Baggit</strong> and <strong>Union Home B2B</strong>.</>,
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
      "Coordinated developers, designers and QA teams to keep project delivery efficient and responsibilities clear.",
      "Acted as the main point of contact for clients, handled day-to-day questions and maintained alignment with project goals.",
      "Ran design workshops and used data to guide conversion and website speed improvements.",
      "Maintained an average CSAT of 4.5/5 and consistently achieved a 5/5 KPI scorecard.",
      "Identified relevant opportunities to extend accounts into other agency services.",
      "Worked hands-on with Shopify B2B environments.",
      <>Managed accounts including <strong>boAt</strong>, <strong>Slurrp Farm</strong>, <strong>Enamor</strong>, <strong>Durex</strong>, <strong>Urban Monkey</strong>, <strong>4700 BC</strong>, <strong>Superkicks</strong>, <strong>TBOF</strong>, <strong>FableStreet</strong>, <strong>Nasher Miles</strong>, <strong>Black Tulip</strong>, <strong>Rihaa</strong>, <strong>PinkFort</strong>, <strong>March Jewellery</strong>, <strong>Nestroots</strong>, <strong>Reise Moto</strong> and <strong>Power Gummies</strong>.</>,
    ],
    tags: ["Client leadership", "Risk", "Workshops", "Upsell"],
  },
  {
    company: "Growth99",
    partner: "Health-tech growth platform",
    role: "Project Manager",
    period: "March 2022 to September 2022",
    summary:
      "I helped shape the operating process while managing two teams across project delivery and client support.",
    points: [
      "Contributed to business planning, strategy formulation and process development across the project lifecycle.",
      "Helped formulate assembly-line procedures to improve consistency and operational efficiency.",
      "Worked with cross-functional departments to resolve project issues and prioritise and assign tasks.",
      "Created a smoother client onboarding experience and supported start-ups as they scaled their business.",
      "Managed two teams with minimal roadblocks and increased project delivery speed by 2x.",
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
      "Developed lead-generation processes and built a referral programme.",
      "Handled cold outreach, scheduled product demonstrations and supported deal closure.",
      "Structured sales strategies and drafted business proposals and contracts.",
      "Contributed to a 30% increase in sales.",
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
    copy: "Delivered technical builds and retainer work on schedule and within budget, with zero escalations recorded in the resume period.",
    tags: ["Delivery", "UAT", "Risk"],
    className: "impact-card-blue",
  },
  {
    number: "03",
    metric: "2x",
    metricLabel: "faster project delivery",
    title: "Two-team delivery operations",
    copy: "Managed two teams across project delivery and client support, improved onboarding and removed operational blockers so work could move twice as fast.",
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

const brands = [
  { name: "boAt", className: "brand-boat" },
  { name: "Bestseller", className: "brand-bestseller" },
  { name: "Health & Glow", className: "brand-health" },
  { name: "Durex", className: "brand-durex" },
  { name: "Urban Monkey", className: "brand-urban", sharkTank: true },
  { name: "Nasher Miles", className: "brand-nasher", sharkTank: true },
  { name: "Kick Game", className: "brand-kick" },
  { name: "DripModa", className: "brand-drip" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function BrandGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined}>
      {brands.map((brand) => (
        <span className={`brand-logo ${brand.className}`} key={brand.name} aria-label={hidden ? undefined : brand.name}>
          <b>{brand.name}</b>
          {brand.sharkTank && <small>Shark Tank India</small>}
        </span>
      ))}
    </div>
  );
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
            <span className="pill pill-yellow">◫ Digital delivery</span>
            <span className="pill pill-coral">↗ Operations &amp; growth</span>
            <span className="pill pill-blue">⌁ Bangalore</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy-block" data-parallax="0.018">
              <p className="hero-kicker">Hello, I&apos;m</p>
              <h1><span>Taskeen</span><span>Meher</span></h1>
              <h2>Technical Project Manager<br />for digital delivery and growth.</h2>
              <p className="hero-intro">
                I turn complex requirements into practical delivery plans, aligned cross-functional teams and clear outcomes. My experience covers one-time builds, ongoing programmes, process improvement, client growth and performance-led ecommerce work.
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
            <BrandGroup />
            <BrandGroup hidden />
          </div>
        </section>

        <section className="section profile shell" id="about">
          <div className="section-head" data-reveal>
            <p>01 / Profile</p>
            <span>Transferable project leadership</span>
          </div>
          <div className="profile-grid">
            <div className="profile-title" data-reveal>
              <h2>From business brief<br />to reliable<br /><em>delivery.</em></h2>
            </div>
            <div className="profile-copy" data-reveal>
              <p className="lead">I work where business goals, technical delivery and stakeholder expectations meet.</p>
              <p>Agency work has made Shopify and Shopify Plus a strong part of my technical background, but the core of my role is broader. I shape requirements, plan the approach with developers and designers, manage scope and risk, and keep stakeholders informed. On one-time builds, I help brainstorm the technical stack and delivery plan before work begins. On ongoing programmes, I manage priorities, performance improvements and client growth.</p>
              <div className="profile-principles">
                <span>Scope and onboarding</span>
                <span>Sprints, QA and UAT</span>
                <span>Retainers, CRO and growth</span>
                <span>One-time builds and tech planning</span>
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
              <h2>Delivery,<br />operations and<br /><em>growth.</em></h2>
              <p>My experience spans technical project management, client services, process improvement and business development. Each role strengthened how I plan work, lead teams and deliver commercial results.</p>
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
                      {item.points.map((point, pointIndex) => <li key={`${item.company}-${pointIndex}`}>{point}</li>)}
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
              <p>A practical mix of project control, platform knowledge, performance thinking and client management.</p>
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
                <p>Coursera Digital Certificate Program · 2021</p>
                <ul className="certification-list">
                  <li>Foundations of Project Management</li>
                  <li>Project Initiation: Starting a Successful Project</li>
                  <li>Project Planning: Putting It All Together</li>
                  <li>Project Execution: Running the Project</li>
                  <li>Agile Project Management</li>
                  <li>Capstone: Applying Project Management in the Real World</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact shell" id="contact" data-reveal>
          <p className="contact-kicker">Let&apos;s connect</p>
          <h2>Have a complex project<br />that needs <em>clear ownership?</em></h2>
          <div className="contact-bottom">
            <p>I&apos;d be glad to discuss technical project management, digital delivery, operations, client programmes and growth roles across industries.</p>
            <div className="contact-actions">
              <a className="button button-dark" href="mailto:taskeenmeher13@gmail.com">Email me <Arrow /></a>
              <a className="button button-paper" href="https://www.linkedin.com/in/taskeen-meher-3aa365194" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <a className="mark mark-small" href="#top" aria-label="Back to top"><span>TM</span></a>
        <p>Technical Project Manager · Digital delivery and growth</p>
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
