import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type PointerEvent } from "react";

import workAudio from "../assets/work-audio.jpg";
import workHealthcare from "../assets/work-healthcare.jpg";
import workProperty from "../assets/work-property.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4NDS Network | UK Digital Solutions" },
      { name: "description", content: "4NDS connects development, design, branding and growth into one digital network for ambitious UK organisations." },
      { property: "og:title", content: "4NDS Network | UK Digital Solutions" },
      { property: "og:description", content: "Build, design, brand and grow with one connected digital team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

type Service = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  capabilities: string[];
  tone: string;
};

const services: Service[] = [
  { id: "01", title: "BUILD", kicker: "Development", description: "Robust digital products engineered around real operational needs.", capabilities: ["Web development", "Web applications", "Software", "Mobile apps", "eCommerce"], tone: "service-cyan" },
  { id: "02", title: "DESIGN", kicker: "Experience", description: "Useful interfaces and digital experiences with clarity at every touchpoint.", capabilities: ["UI / UX", "Website design", "Graphic design", "Digital experiences"], tone: "service-lime" },
  { id: "03", title: "BRAND", kicker: "Identity", description: "Distinctive systems that make organisations recognisable and consistent.", capabilities: ["Brand identity", "Strategy", "Visual systems", "Packaging", "Creative"], tone: "service-pink" },
  { id: "04", title: "GROW", kicker: "Marketing", description: "Search, content and performance insight that feeds the whole system.", capabilities: ["SEO", "Digital marketing", "Content", "Performance", "Analytics"], tone: "service-violet" },
];

const projects = [
  { number: "01", name: "Meddipop", industry: "Healthcare", services: "Digital product / Development", year: "Selected work", image: workHealthcare, width: 1408, height: 1008, className: "project-wide" },
  { number: "02", name: "SIMO Property Group", industry: "Real estate", services: "Brand system / Digital", year: "Selected work", image: workProperty, width: 1200, height: 1504, className: "project-tall" },
  { number: "03", name: "Skifonix Sounds", industry: "Entertainment", services: "Experience / Development", year: "Selected work", image: workAudio, width: 1408, height: 960, className: "project-wide project-offset" },
];

const processSteps = [
  ["01", "DISCOVER", "Gather the information, context and constraints that shape the work."],
  ["02", "PLAN", "Turn ambition into a clear programme, structure and delivery path."],
  ["03", "DESIGN", "Create the visual system and interactions around real user needs."],
  ["04", "BUILD", "Engineer the product with performance and longevity in mind."],
  ["05", "TEST", "Validate across devices, journeys and technical requirements."],
  ["06", "GROW", "Learn from performance and feed insight back into the network."],
];

const industries = ["HEALTHCARE", "LEGAL", "INSURANCE", "REAL ESTATE", "FINANCE", "ECOMMERCE", "TELECOM", "EDUCATION", "ENTERTAINMENT", "MANUFACTURING", "RESTAURANTS", "TRANSPORT"];

function Mark() {
  return <span className="brand-mark" aria-label="4NDS Network"><b>4</b>NDS<span>•</span></span>;
}

function NetworkField() {
  const ref = useRef<HTMLDivElement>(null);
  const handlePointer = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  };
  return (
    <div ref={ref} className="network-field" aria-hidden="true" onPointerMove={handlePointer}>
      <svg viewBox="0 0 1000 700" preserveAspectRatio="none">
        <path d="M40 90 L260 170 L390 70 L580 230 L760 100 L950 190" />
        <path d="M80 550 L240 410 L430 540 L600 390 L800 520 L940 390" />
        <path d="M260 170 L240 410 M580 230 L600 390 M760 100 L800 520 M390 70 L430 540" />
        {[ [40,90], [260,170], [390,70], [580,230], [760,100], [950,190], [80,550], [240,410], [430,540], [600,390], [800,520], [940,390] ].map(([cx,cy], i) => <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 10 : 6} />)}
      </svg>
      <span className="network-label label-a">[ NODE 04 ]</span>
      <span className="network-label label-b">[ UK / GLOBAL ]</span>
      <span className="network-label label-c">[ SYSTEM ONLINE ]</span>
      <span className="cursor-node" />
    </div>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [sent, setSent] = useState(false);
  const [cursor, setCursor] = useState({ x: -80, y: -80, label: "" });

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    const onPointer = (event: globalThis.PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-cursor]") : null;
      setCursor({ x: event.clientX, y: event.clientY, label: target?.dataset.cursor ?? "" });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main id="top">
      <div className={`custom-cursor ${cursor.label ? "is-active" : ""}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true"><span>{cursor.label}</span></div>
      <div className="top-ticker" aria-label="4NDS network status"><div className="ticker-track"><span>4NDS NETWORK — DIGITAL SOLUTIONS — UK + WORLDWIDE — EST. 2010 — </span><span aria-hidden="true">4NDS NETWORK — DIGITAL SOLUTIONS — UK + WORLDWIDE — EST. 2010 — </span></div></div>
      <header className={`site-header ${compact ? "is-compact" : ""}`}>
        <a className="logo-link" href="#top" aria-label="4NDS Network home"><Mark /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#process">Process</a><a href="https://4nds.com/blog/" target="_blank" rel="noreferrer">Insights</a>
        </nav>
        <a className="brutal-button header-cta" href="#contact" data-cursor="START">Start a project <ArrowDownRight size={18} /></a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          {[ ["Work", "#work"], ["Services", "#services"], ["About", "#about"], ["Process", "#process"], ["Start a project", "#contact"] ].map(([label, href], i) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><small>0{i + 1}</small>{label}<ArrowRight /></a>)}
        </nav>
      </header>

      <section className="hero section-grid" aria-labelledby="hero-title">
        <NetworkField />
        <div className="hero-meta meta"><span>[ DIGITAL / 01 ]</span><span>STATUS: ONLINE <i /></span></div>
        <h1 id="hero-title"><span>BUILD THE</span><span>DIGITAL</span><span className="word-network">NETWORK</span><span>AROUND YOUR</span><span>BUSINESS.</span></h1>
        <div className="hero-bottom">
          <p>Web. Apps. Brands. Growth.<br /><strong>One connected digital partner.</strong></p>
          <div className="hero-actions"><a className="brutal-button" href="#contact" data-cursor="START">Start a project <ArrowDownRight /></a><a className="text-link" href="#work" data-cursor="VIEW">Explore our work <ArrowDownRight /></a></div>
        </div>
        <div className="scroll-note meta">SCROLL TO CONNECT <ArrowDownRight size={15} /></div>
      </section>

      <section id="services" className="services-section" aria-labelledby="services-title">
        <div className="section-intro section-grid reveal">
          <p className="meta">[ THE NETWORK / 02 ]</p>
          <h2 id="services-title">ONE NETWORK.<br /><span>FOUR SPECIALISMS.</span></h2>
          <p className="intro-copy">Development supports design. Design gives branding a system. Marketing returns live data to the product. Nothing works in isolation.</p>
        </div>
        <div className="service-system">
          {services.map((service, index) => (
            <button key={service.id} type="button" className={`service-panel ${service.tone} ${activeService === index ? "is-active" : ""}`} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} onClick={() => setActiveService(index)} aria-expanded={activeService === index} data-cursor="EXPLORE">
              <div className="service-head"><span className="service-number">{service.id}</span><span className="meta">{service.kicker}</span><ArrowDownRight /></div>
              <div className="service-body"><h3>{service.title}</h3><p>{service.description}</p><ul>{service.capabilities.map(item => <li key={item}>{item}</li>)}</ul></div>
              <span className="node-status"><i /> NODE ACTIVE</span>
            </button>
          ))}
        </div>
        <div className="connection-rail" aria-hidden="true"><span>BUILD</span><i /><span>DESIGN</span><i /><span>BRAND</span><i /><span>GROW</span></div>
      </section>

      <div className="marquee-band"><div className="marquee-inner">BUILD <b>→</b> DESIGN <b>→</b> BRAND <b>→</b> GROW <b>→</b> BUILD <b>→</b> DESIGN <b>→</b> BRAND <b>→</b> GROW <b>→</b></div></div>

      <section id="work" className="work-section" aria-labelledby="work-title">
        <div className="work-heading section-grid reveal"><p className="meta">[ SELECTED WORK / 03 ]</p><h2 id="work-title">SYSTEMS IN<br />THE WILD.</h2><p>Selected collaborations from the 4NDS network. Each project connects multiple disciplines around one outcome.</p></div>
        <div className="projects">
          {projects.map(project => (
            <article className={`project ${project.className}`} key={project.name} tabIndex={0} data-cursor="VIEW PROJECT">
              <div className="project-image"><img src={project.image} alt={`Editorial visual representing ${project.name} digital work`} loading="lazy" width={project.width} height={project.height} /></div>
              <div className="project-info"><span className="project-number">{project.number}</span><div><h3>{project.name}</h3><p>{project.industry} / {project.services}</p></div><span className="project-year">{project.year}</span><ArrowDownRight /></div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="process-section" aria-labelledby="process-title">
        <div className="process-head section-grid"><p className="meta">[ PROCESS / 04 ]</p><h2 id="process-title">FROM FIRST IDEA<br />TO LIVE SYSTEM.</h2><span className="meta">06 CONNECTED STEPS</span></div>
        <div className="process-track" role="list">
          {processSteps.map(([number, title, description]) => <article role="listitem" key={number} className="process-step" tabIndex={0}><span>{number}</span><h3>{title}</h3><p>{description}</p><ArrowRight /></article>)}
        </div>
      </section>

      <section className="why-section" aria-labelledby="why-title">
        <p className="meta">[ WHY 4NDS / 05 ]</p>
        <h2 id="why-title"><span>ONE <em>TEAM.</em></span><span>CONNECTED <em>THINKING.</em></span><span>BUILT AROUND <em>YOUR GOALS.</em></span></h2>
        <div className="why-note"><Mark /><p>Four disciplines. One feedback loop.<br />One team accountable for the whole journey.</p></div>
      </section>

      <section className="industries-section" aria-labelledby="industries-title">
        <div className="industry-head"><p className="meta">[ INDUSTRIES / 06 ]</p><h2 id="industries-title">CONTEXT CHANGES.<br />THE SYSTEM ADAPTS.</h2></div>
        <div className="industry-wall">{industries.map((industry, index) => <button key={industry} type="button" data-cursor="EXPLORE"><span>{String(index + 1).padStart(2, "0")}</span>{industry}<ArrowDownRight /></button>)}</div>
      </section>

      <section className="audit-section" aria-labelledby="audit-title">
        <div className="audit-copy"><p className="meta">[ SEO AUDIT / 07 ]</p><h2 id="audit-title">YOUR WEBSITE.<br /><span>UNDER THE</span><br />MICROSCOPE.</h2><p>Start with the URL. The 4NDS audit reviews the signals that shape search visibility and digital performance.</p></div>
        <div className="audit-console">
          <div className="console-bar"><span>4NDS / AUDIT OS</span><span><i /> READY</span></div>
          <form action="https://4nds.com/services/audits-and-reporting/" method="get">
            <label htmlFor="audit-url">Website address</label>
            <div className="audit-input"><input id="audit-url" name="website" type="url" placeholder="https://yourwebsite.com" required /><button type="submit" data-cursor="ANALYSE">Analyse <ArrowRight /></button></div>
          </form>
          <div className="audit-grid">
            {["TECHNICAL SEO", "CONTENT", "PERFORMANCE", "ACCESSIBILITY", "CRAWLABILITY", "SCHEMA", "SOCIAL"].map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b><div className="meter"><i style={{ width: `${22 + i * 8}%` }} /></div><small>AWAITING URL</small></div>)}
          </div>
          <p className="console-note">Analysis continues on the current 4NDS audit service. No score is generated until a website is reviewed.</p>
        </div>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="about-sticky"><p className="meta">[ ABOUT / 08 ]</p><h2 id="about-title">DREAM.<br />SEEK.<br /><span>ACHIEVE.</span></h2><p>A digital solutions network built to connect strategy, creativity, technology and growth.</p></div>
        <div className="timeline">
          <article><strong>2010</strong><div><span>01 / FOUNDATION</span><h3>THE NETWORK BEGINS.</h3><p>A foundation in digital craft and enduring client relationships.</p></div></article>
          <article><strong>→</strong><div><span>02 / GROWTH</span><h3>DISCIPLINES CONNECT.</h3><p>Development, design, brand and marketing become one joined-up system.</p></div></article>
          <article><strong>UK</strong><div><span>03 / NOW</span><h3>UK + WORLDWIDE.</h3><p>Digital solutions for ambitious organisations across markets and time zones.</p></div></article>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-heading"><p className="meta">[ START / 09 ]</p><h2 id="contact-title">LET'S BUILD<br />SOMETHING<br /><span>CONNECTED.</span></h2></div>
        {sent ? <div className="confirmation" role="status"><span>✓</span><h3>BRIEF CAPTURED.</h3><p>This front-end prototype has not transmitted your details. Live enquiry delivery will be connected with the contact page.</p><button type="button" onClick={() => setSent(false)}>Start again <ArrowRight /></button></div> : <form className="contact-form" onSubmit={submitContact}>
          <label><span>01 / Name</span><input name="name" autoComplete="name" required /></label>
          <label><span>02 / Company</span><input name="company" autoComplete="organization" /></label>
          <label><span>03 / Email</span><input name="email" type="email" autoComplete="email" required /></label>
          <label><span>04 / What are you building?</span><textarea name="brief" rows={3} required /></label>
          <label><span>05 / Project scope</span><select name="scope" defaultValue=""><option value="" disabled>Select a range</option><option>£5k–£15k</option><option>£15k–£40k</option><option>£40k+</option><option>Not sure yet</option></select></label>
          <button className="brutal-button contact-submit" type="submit" data-cursor="SEND">Send project <ArrowRight /></button>
        </form>}
      </section>

      <footer id="footer" className="site-footer">
        <div className="footer-top"><div><Mark /><p>DREAM.<br />SEEK.<br />ACHIEVE.</p></div><div><span>Navigate</span><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div><div><span>Network</span><a href="https://4nds.com/" target="_blank" rel="noreferrer">4nds.com ↗</a><a href="https://www.linkedin.com/company/4ndsnetwork" target="_blank" rel="noreferrer">LinkedIn ↗</a><p>UK + INTERNATIONAL</p></div><div className="footer-status"><span className="meta">STATUS</span><strong><i /> NETWORK ONLINE</strong><p>© 4NDS NETWORK 2026</p></div></div>
        <div className="footer-marquee"><div>BUILD / DESIGN / BRAND / GROW / BUILD / DESIGN / BRAND / GROW /</div></div>
      </footer>
    </main>
  );
}
