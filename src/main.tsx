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

const caseStudies = [
  {
    number: "01",
    client: "Kick Game",
    type: "Relaunch and ongoing growth",
    period: "Three-month pre/post review",
    source: "Performance review · 8 July 2026",
    title: "Improving conversion while acquisition changed around the business.",
    intro:
      "The relaunch went live as Kick Game faced a sharp drop in acquisition after losing exclusivity on a major product range. My focus was to keep the build and retainer moving while the team improved the experience for the traffic that remained.",
    responsibilities: [
      "Technical scoping, sprint planning and launch coordination",
      "Developer, design, QA, CRO and data-team alignment",
      "UAT, risk tracking, client decisions and the post-launch backlog",
    ],
    metrics: [
      { value: "+213%", label: "Conversion rate", detail: "0.29% to 0.91%" },
      { value: "+4.5%", label: "Purchases", detail: "4,288 to 4,479" },
      { value: "−18.8%", label: "Bounce rate", detail: "60.25% to 48.91%" },
      { value: "+77%", label: "Flow efficiency", detail: "Revenue per recipient" },
    ],
    context:
      "The review also records sessions down 66.4% and revenue down 14.8%, driven by acquisition, assortment and budget pressure. The useful result was a site that converted the available demand far more efficiently.",
    tags: ["Delivery", "CRO", "GA4", "Klaviyo"],
  },
  {
    number: "02",
    client: "DripModa",
    type: "Platform rebuild and CRO",
    period: "Matched 90-day windows",
    source: "Performance review · 7 July 2026",
    title: "Rebuilding a high-volume mobile journey around discovery and conversion.",
    intro:
      "The previous store carried a heavy app stack, duplicate tracking, 13MB-plus product pages and bundle issues. The programme rebuilt the experience on a more maintainable foundation and concentrated delivery around mobile discovery, product confidence and checkout.",
    responsibilities: [
      "Coordinated a modular, GitHub-based rebuild and leaner app stack",
      "Aligned navigation, search, PDP, cart and bundle work across teams",
      "Managed launch, retainer priorities and CRO testing handoffs",
    ],
    metrics: [
      { value: "+34%", label: "Add-to-cart rate", detail: "5.97% to 8.01%" },
      { value: "+4.7pt", label: "Checkout completion", detail: "51.9% to 56.6%" },
      { value: "+28%", label: "Mobile conversion", detail: "1.65% to 2.12%" },
      { value: "+76%", label: "Search usage", detail: "5.1% to 9.0%" },
    ],
    context:
      "The report estimates that the checkout-completion improvement represented roughly 1,350 additional completed orders, worth about £125K, across the review period. Flow revenue also grew 156% alongside the rebuild and retainer programme.",
    tags: ["Rebuild", "Mobile", "Search", "Experimentation"],
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
  { name: "Enamor", className: "brand-enamor" },
  { name: "TBOF", className: "brand-tbof" },
  { name: "Superkicks", className: "brand-superkicks" },
  { name: "Pavers England", className: "brand-pavers" },
  { name: "Slurrp Farm", className: "brand-slurrp" },
  { name: "FableStreet", className: "brand-fable" },
  { name: "YAGI", className: "brand-yagi" },
  { name: "Revitive", className: "brand-revitive" },
  { name: "Kick Game", className: "brand-kick" },
  { name: "DripModa", className: "brand-drip" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function CaseVisual({ variant }: { variant: "kick" | "drip" }) {
  const isKick = variant === "kick";

  return (
    <div className={`case-visual case-visual-${variant}`} aria-hidden="true" data-parallax="0.006">
      <div className="case-visual-top">
        <span>{isKick ? "Kick Game / product spotlight" : "DripModa / mobile-first system"}</span>
        <span>{isKick ? "01" : "02"}</span>
      </div>
      {isKick ? (
        <svg viewBox="0 0 520 230" role="presentation">
          <path className="shoe-fill" d="M48 124c44-7 86-27 119-70l72 29c31 12 65 42 111 52l92 20c20 5 31 17 30 33-2 20-22 31-53 31H105c-49 0-76-16-82-43-5-22 5-43 25-52Z" />
          <path className="shoe-outline" d="M48 124c44-7 86-27 119-70l72 29c31 12 65 42 111 52l92 20c20 5 31 17 30 33-2 20-22 31-53 31H105c-49 0-76-16-82-43-5-22 5-43 25-52Z" />
          <path className="shoe-detail" d="m168 55 18 76m-2-54 81 35m-66-18 84 36m-65-17 78 34M44 154c81 24 205 34 399 18M111 121c35 10 63 11 93 0" />
          <path className="shoe-accent" d="M270 116c24 8 42 20 58 36-38-3-70-10-96-23 11-6 24-10 38-13Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 520 230" role="presentation">
          <g className="shoe-stack shoe-stack-back">
            <path d="M61 120c43-9 74-24 103-61l62 28c28 13 55 34 92 43l74 18c21 5 31 17 29 32-3 18-20 27-47 27H113c-44 0-70-14-76-37-5-20 4-39 24-50Z" />
            <path d="m166 61 12 67m8-47 68 31m-52-13 68 31M59 150c72 20 177 26 332 13" />
          </g>
          <g className="shoe-stack shoe-stack-front">
            <path d="M151 99c38-7 66-21 91-52l57 24c25 10 51 31 84 39l66 15c18 5 27 15 25 28-2 16-18 24-42 24H199c-39 0-62-13-67-33-4-17 3-34 19-45Z" />
            <path d="m243 48 13 58m5-41 57 26m-44-11 58 26m-177 19c61 17 154 22 292 11" />
          </g>
        </svg>
      )}
      <div className="case-visual-rail">
        {(isKick ? ["NEW", "UK 06", "UK 08", "AUTHENTIC"] : ["MOBILE", "SEARCH", "CART", "CHECKOUT"]).map((label) => <span key={label}>{label}</span>)}
      </div>
    </div>
  );
}

function BrandGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined}>
      {[0, 1].map((cycle) => (
        brands.map((brand) => (
          <span
            className={`brand-logo ${brand.className}`}
            key={`${cycle}-${brand.name}`}
            aria-hidden={hidden || cycle > 0 || undefined}
            aria-label={!hidden && cycle === 0 ? brand.name : undefined}
          >
            <b>{brand.name}</b>
            {brand.sharkTank && <small>Shark Tank India</small>}
          </span>
        ))
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
            <span>Measured delivery outcomes</span>
          </div>
          <div className="case-heading" data-reveal>
            <div>
              <span className="mini-label">Recent client work</span>
              <h2>Project stories,<br />backed by <em>evidence.</em></h2>
            </div>
            <p>A closer look at two recent delivery programmes: what changed, what I coordinated and how the outcomes were measured.</p>
          </div>
          <div className="case-grid">
            {caseStudies.map((study) => (
              <article className={`case-card case-card-${study.client === "Kick Game" ? "kick" : "drip"}`} key={study.number} data-reveal>
                <div className="case-top">
                  <span>{study.number} / {study.client}</span>
                  <span>{study.period}</span>
                </div>
                <div className="case-main">
                  <div className="case-story">
                    <p className="case-type">{study.type}</p>
                    <h3>{study.title}</h3>
                    <p>{study.intro}</p>
                  </div>
                  <div className="case-side">
                    <CaseVisual variant={study.client === "Kick Game" ? "kick" : "drip"} />
                    <div className="case-role">
                      <p>My delivery scope</p>
                      <ul>
                        {study.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="case-metrics" aria-label={`${study.client} measured outcomes`}>
                  {study.metrics.map((metric) => (
                    <div className="case-metric" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                      <small>{metric.detail}</small>
                    </div>
                  ))}
                </div>
                <div className="case-bottom">
                  <p>{study.context}</p>
                  <div>
                    <div className="case-tags">{study.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <small className="case-source">{study.source}</small>
                  </div>
                </div>
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
