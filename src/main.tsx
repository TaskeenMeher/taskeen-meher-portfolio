import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

function App() {
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
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
      { threshold: 0.12 },
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
          <a className="mark" href="#top" aria-label="Taskeen Meher, home">TM</a>
          <div className="nav-center">
            <a href="#impact">Impact</a>
            <a href="#experience">Experience</a>
            <a href="#capabilities">Capabilities</a>
          </div>
          <a className="nav-link" href="mailto:taskeenmeher13@gmail.com">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-top">
            <p className="eyebrow"><span /> Bangalore · Shopify ecosystem</p>
            <p className="hero-index">Portfolio / 2026</p>
          </div>

          <h1>Complex Shopify <span>delivery,</span><br /><em>made calm.</em></h1>

          <div className="hero-bottom">
            <div>
              <p className="hero-copy">
                I&apos;m Taskeen, a Technical Project Manager aligning people, scope, and growth goals across Shopify &amp; Shopify Plus.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#impact">See my impact <span aria-hidden="true">↓</span></a>
                <a className="button button-text" href={`${base}Taskeen-Meher-Resume.pdf`} download>
                  Download résumé <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="delivery-loop" aria-label="Taskeen's delivery approach">
              <p>My delivery loop</p>
              <ol>
                <li><span>01</span> Scope the right problem</li>
                <li><span>02</span> Align the right people</li>
                <li><span>03</span> Ship with control</li>
                <li><span>04</span> Learn, then grow</li>
              </ol>
            </div>
          </div>

          <div className="proof" aria-label="Career highlights">
            <div><strong>4+</strong><span>years in agency delivery</span></div>
            <div><strong>100%</strong><span>on-time delivery at Wiro</span></div>
            <div><strong>+2%</strong><span>conversion rate impact</span></div>
            <div><strong>4.5/5</strong><span>average client satisfaction</span></div>
          </div>
        </section>

        <section className="brand-strip" aria-label="Selected brands">
          <p>Selected brand experience</p>
          <div className="brand-track">
            <div>
              <span>boAt</span><i>✦</i><span>Bestseller</span><i>✦</i><span>Health &amp; Glow</span><i>✦</i><span>Pavers England</span><i>✦</i><span>Durex</span><i>✦</i><span>Superkicks</span><i>✦</i><span>Kickgame</span><i>✦</i><span>Drip Moda</span><i>✦</i>
            </div>
            <div aria-hidden="true">
              <span>boAt</span><i>✦</i><span>Bestseller</span><i>✦</i><span>Health &amp; Glow</span><i>✦</i><span>Pavers England</span><i>✦</i><span>Durex</span><i>✦</i><span>Superkicks</span><i>✦</i><span>Kickgame</span><i>✦</i><span>Drip Moda</span><i>✦</i>
            </div>
          </div>
        </section>

        <section className="section about shell" id="about">
          <div className="section-label" data-reveal>
            <span>01</span>
            <p>Profile</p>
          </div>

          <div className="about-grid">
            <div className="about-copy" data-reveal>
              <h2>Turning moving parts<br />into <em>momentum.</em></h2>
              <p className="lead">
                The best project management feels almost invisible: teams know what matters, clients know what&apos;s next, and delivery keeps moving.
              </p>
              <p>
                Across premier Shopify agencies, I&apos;ve led cross-functional teams through scoping, design, build, QA, launch, and ongoing optimisation. I bring commercial context to technical conversations and structure to fast-moving ecommerce work.
              </p>
              <div className="principles">
                <p><span>Clear over clever</span> Translate complexity into decisions people can act on.</p>
                <p><span>Proactive over reactive</span> Surface risk before it becomes an escalation.</p>
                <p><span>Outcomes over output</span> Connect every sprint to merchant growth.</p>
              </div>
            </div>

            <figure className="portrait" data-reveal>
              <div className="portrait-frame">
                <img src={`${base}taskeen-meher.jpg`} alt="Taskeen Meher, Technical Project Manager" />
                <span className="portrait-tag">Based in Bangalore</span>
              </div>
              <figcaption>
                <span>Current</span>
                Technical Project Manager · Wiro
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section impact" id="impact">
          <div className="shell">
            <div className="section-label section-label-light" data-reveal>
              <span>02</span>
              <p>Selected impact</p>
            </div>

            <div className="impact-intro" data-reveal>
              <h2>Proof over<br /><em>promises.</em></h2>
              <p>Selected outcomes across ecommerce delivery, growth, and team operations.</p>
            </div>

            <div className="impact-grid">
              <article className="impact-card impact-card-featured" data-reveal>
                <div className="impact-meta"><span>01 / Performance</span><span>Shopify Plus</span></div>
                <div className="metric-row"><strong>+2%</strong><span>CVR</span></div>
                <div className="metric-row"><strong>+75%</strong><span>site speed score</span></div>
                <div className="impact-copy">
                  <h3>Performance-led delivery</h3>
                  <p>Used data-informed prioritisation and structured optimisation to improve conversion and average site-speed scores.</p>
                </div>
              </article>

              <article className="impact-card" data-reveal>
                <div className="impact-meta"><span>02 / Delivery</span><span>Wiro</span></div>
                <div className="single-metric"><strong>100%</strong><span>on time · within budget</span></div>
                <div className="impact-copy">
                  <h3>Control without friction</h3>
                  <p>Delivered end-to-end Shopify work with zero escalations through clear scoping, agile rituals, and disciplined risk management.</p>
                </div>
              </article>

              <article className="impact-card" data-reveal>
                <div className="impact-meta"><span>03 / Operations</span><span>Growth99</span></div>
                <div className="single-metric"><strong>2×</strong><span>delivery speed</span></div>
                <div className="impact-copy">
                  <h3>Less drag, more flow</h3>
                  <p>Managed two teams and reduced roadblocks by strengthening process, prioritisation, and onboarding.</p>
                </div>
              </article>

              <article className="impact-card impact-card-accent" data-reveal>
                <div className="impact-meta"><span>04 / Retainers</span><span>Always-on</span></div>
                <div className="single-metric"><strong>15–20+</strong><span>concurrent tickets</span></div>
                <div className="impact-copy">
                  <h3>Momentum after launch</h3>
                  <p>Balance enhancements, CRO initiatives, and performance work across fast-moving retainer backlogs.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section experience shell" id="experience">
          <div className="section-label" data-reveal>
            <span>03</span>
            <p>Experience</p>
          </div>

          <div className="experience-layout">
            <div className="experience-heading" data-reveal>
              <h2>Built inside the<br /><em>Shopify ecosystem.</em></h2>
              <p>Four years across premier and Plus agencies, from growth-stage merchants to enterprise and B2B programs.</p>
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
                    <div className="tags">
                      {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="shell">
            <div className="section-label" data-reveal>
              <span>04</span>
              <p>Capabilities</p>
            </div>
            <div className="capabilities-heading" data-reveal>
              <h2>What I bring<br />to the <em>table.</em></h2>
              <p>Equal parts delivery discipline, technical curiosity, and client empathy.</p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability-card" key={capability.number} data-reveal>
                  <span>{capability.number}</span>
                  <h3>{capability.title}</h3>
                  <ul>
                    {capability.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
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
          <div className="contact-kicker"><span /> Available for the right conversation</div>
          <h2>Need someone who can hold<br />the plan <em>and</em> the room?</h2>
          <div className="contact-bottom">
            <p>Let&apos;s talk about ambitious Shopify delivery, strong client relationships, and growth that can be measured.</p>
            <div className="contact-actions">
              <a className="button button-dark" href="mailto:taskeenmeher13@gmail.com">Email me <span aria-hidden="true">↗</span></a>
              <a className="button button-outline" href="https://www.linkedin.com/in/taskeen-meher-3aa365194" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <p>© 2026 Taskeen Meher</p>
        <p>Technical Project Manager · Shopify ecosystem</p>
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
