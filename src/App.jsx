import { useState } from "react";
import { Cards, List, ListChecks, Stack, X } from "@phosphor-icons/react";

const navItems = [
  ["How It Works", "#how-it-works"],
  ["Pricing", "#pricing"],
  ["For clinicians", "#clinicians"],
  ["Resources", "#resources"],
  ["Contact us", "#contact"],
];

function StartButton({ className = "" }) {
  return (
    <a className={`button ${className}`} href="#pricing">
      Start your journey
    </a>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">HOW IT WORKS</p>
      <h2>{children}</h2>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#top" className="brand" aria-label="Threadline home">
          <img src="/assets/threadline-logo.svg" alt="Threadline" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={28} /> : <List size={30} />}
        </button>
        <nav id="site-navigation" className={open ? "site-nav is-open" : "site-nav"}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <StartButton className="nav-cta" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero content-rail" aria-labelledby="hero-title">
      <h1 id="hero-title">Accelerate your child&apos;s<br className="desktop-break" /> ADHD assessment.</h1>
      <p>Everything your child&apos;s clinician needs, organised in<br className="desktop-break" /> one place before your appointment.</p>
    </section>
  );
}

function AssessmentVisual() {
  const guidelineItems = [
    "Based on Australia's national ADHD Clinical Practice Guidelines",
    "Approved by Australia's National Health and Medical Research Council (NHMRC)",
    "Endorsed by Australia's leading medical, psychology and allied health organisations",
  ];

  return (
    <section className="assessment-section" id="clinicians" aria-label="Clinical guidelines">
      <div className="assessment-visual content-rail">
        <img className="assessment-background" src="/assets/feature-background.png" alt="" />
        <div className="report-frame">
          <img src="/assets/assessment-report.png" alt="Example Threadline assessment evidence report" />
        </div>
      </div>
      <div className="guidelines content-rail">
        {guidelineItems.map((item) => <p key={item}>{item}</p>)}
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="comparison content-rail" id="how-it-works">
      <SectionHeading>
        A complete Assessment Package,<br className="desktop-break" /> ready for your child&apos;s clinician.
      </SectionHeading>
      <div className="comparison-grid">
        <article className="comparison-card comparison-card--problem">
          <h3>Too often, families don&apos;t know where to start.</h3>
          <ul>
            <li>Struggle to gather information</li>
            <li>Face months of waiting</li>
            <li>Repeat their story again and again</li>
          </ul>
        </article>
        <article className="comparison-card comparison-card--solution">
          <h3>Everything your child&apos;s<br className="desktop-break" /> clinician needs.</h3>
          <ul>
            <li>Guided evidence collection</li>
            <li>Clinically validated tests</li>
            <li>Arrive assessment-ready</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

const steps = [
  { Icon: Cards, text: "Know exactly what information is needed" },
  { Icon: ListChecks, text: "Reduce delays caused by missing evidence" },
  { Icon: Stack, text: "Avoid repeating your child's story" },
];

function Steps() {
  return (
    <section className="steps content-rail" id="resources">
      <SectionHeading>
        Everything organise for your<br className="desktop-break" /> child&apos;s clinician appointment.
      </SectionHeading>
      <div className="steps-panel">
        <img src="/assets/steps-background.jpg" alt="" />
        <div className="steps-grid">
          {steps.map(({ Icon, text }) => (
            <article className="step-card" key={text}>
              <Icon size={70} weight="thin" aria-hidden="true" />
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing content-rail" id="pricing" aria-label="Assessment preparation pricing">
      <article className="pricing-card pricing-card--thread">
        <h2>Your Thread</h2>
        <p>Together they become your child&apos;s Thread, a record you own that grows in value with every step of your child&apos;s journey.</p>
      </article>
      <article className="pricing-card pricing-card--offer">
        <div>
          <p className="eyebrow">ASSESSMENT PREPARATION</p>
          <div className="price"><span>$395</span> one-off</div>
        </div>
        <StartButton />
      </article>
    </section>
  );
}

function Important() {
  return (
    <section className="important">
      <div className="important-inner">
        <p className="important-label">Important</p>
        <p className="important-copy">Threadline prepares a complete Assessment Package. It does not diagnose ADHD or replace your clinician. Your child&apos;s clinician conducts the clinical assessment and determines whether a diagnosis is appropriate. Consultation fees are charged by your clinician separately.</p>
      </div>
    </section>
  );
}

function Footer() {
  const exploreLinks = [
    ["Overview", "#top"],
    ["How It Works", "#how-it-works"],
    ["Pricing", "#pricing"],
    ["For Clinician", "#clinicians"],
    ["Resources", "#resources"],
    ["About us", "#top"],
    ["Contact us", "#contact"],
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-pitch">
          <h2>Threadline</h2>
          <p>Together they become your child&apos;s Thread,<br className="desktop-break" /> a record you own that grows in value with every step.</p>
          <StartButton />
        </div>
        <div className="footer-links">
          <div>
            <p>Explore</p>
            {exploreLinks.map(([label, href]) => (
              <a href={href} key={label}>{label}</a>
            ))}
          </div>
          <div>
            <p>Social</p>
            <a href="#contact">Instagram</a>
            <a href="#contact">LinkedIn</a>
            <a href="#contact">X</a>
            <a href="#contact">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Threadline All rights reserved.</p>
        <div><a href="#contact">Privacy Policy</a><a href="#contact">Terms of Service</a></div>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <div className="page" id="top">
      <Header />
      <main>
        <Hero />
        <AssessmentVisual />
        <Comparison />
        <Steps />
        <Pricing />
        <Important />
      </main>
      <Footer />
    </div>
  );
}
