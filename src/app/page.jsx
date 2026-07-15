import Image from "next/image";
import assessmentReport from "../../public/assets/assessment-report.png";
import featureBackground from "../../public/assets/feature-background.png";
import stepsBackground from "../../public/assets/steps-background.jpg";
import { SiteHeader } from "../components/SiteHeader";
import { StartButton } from "../components/StartButton";
import { StepIcon } from "../components/StepIcon";

function SectionHeading({ children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">HOW IT WORKS</p>
      <h2>{children}</h2>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero content-rail" aria-labelledby="hero-title">
      <h1 id="hero-title">
        Accelerate your child&apos;s
        <br className="desktop-break" /> ADHD assessment.
      </h1>
      <p>
        Everything your child&apos;s clinician needs, organised in
        <br className="desktop-break" /> one place before your appointment.
      </p>
    </section>
  );
}

function AssessmentVisual() {
  const guidelineItems = [
    {
      label: "Based on",
      text: "Australia's national ADHD Clinical Practice Guidelines",
    },
    {
      label: "Approved by",
      text: "Australia's National Health and Medical Research Council (NHMRC)",
    },
    {
      label: "Endorsed by",
      text: "Australia's leading medical, psychology and allied health organisations",
    },
  ];

  return (
    <section
      className="assessment-section"
      id="clinicians"
      aria-label="Clinical guidelines"
    >
      <div className="assessment-visual content-rail">
        <Image
          className="assessment-background"
          src={featureBackground}
          alt=""
          fill
          loading="eager"
          sizes="(max-width: 860px) 100vw, calc(100vw - 128px)"
        />
        <div className="report-frame">
          <Image
            src={assessmentReport}
            alt="Example Threadline assessment evidence report"
            loading="eager"
            sizes="(max-width: 860px) 100vw, 1024px"
          />
        </div>
      </div>
      <div className="guidelines content-rail">
        {guidelineItems.map((item) => (
          <article className="guideline" key={item.label}>
            <p className="guideline-label">{item.label}</p>
            <p className="guideline-copy">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="comparison content-rail" id="how-it-works">
      <SectionHeading>
        A complete Assessment Package,
        <br className="desktop-break" /> ready for your child&apos;s clinician.
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
          <h3>
            Everything your child&apos;s
            <br className="desktop-break" /> clinician needs.
          </h3>
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
  { icon: "cards", text: "Know exactly what information is needed" },
  { icon: "checklist", text: "Reduce delays caused by missing evidence" },
  { icon: "stack", text: "Avoid repeating your child's story" },
];

function Steps() {
  return (
    <section className="steps content-rail" id="resources">
      <SectionHeading>
        Everything organise for your
        <br className="desktop-break" /> child&apos;s clinician appointment.
      </SectionHeading>
      <div className="steps-panel">
        <Image
          src={stepsBackground}
          alt=""
          fill
          sizes="(max-width: 860px) 100vw, calc(100vw - 128px)"
        />
        <div className="steps-grid">
          {steps.map(({ icon, text }) => (
            <article className="step-card" key={text}>
              <StepIcon name={icon} />
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
    <section
      className="pricing content-rail"
      id="pricing"
      aria-label="Assessment preparation pricing"
    >
      <article className="pricing-card pricing-card--thread">
        <h2>Your Thread</h2>
        <p>
          Together they become your child&apos;s Thread, a record you own that
          grows in value with every step of your child&apos;s journey.
        </p>
      </article>
      <article className="pricing-card pricing-card--offer">
        <div>
          <p className="eyebrow">ASSESSMENT PREPARATION</p>
          <div className="price">
            <span>$395</span> one-off
          </div>
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
        <p className="important-copy">
          Threadline prepares a complete Assessment Package. It does not
          diagnose ADHD or replace your clinician. Your child&apos;s clinician
          conducts the clinical assessment and determines whether a diagnosis
          is appropriate. Consultation fees are charged by your clinician
          separately.
        </p>
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
          <p>
            Together they become your child&apos;s Thread,
            <br className="desktop-break" /> a record you own that grows in
            value with every step.
          </p>
          <StartButton />
        </div>
        <div className="footer-links">
          <div>
            <p>Explore</p>
            {exploreLinks.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
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
        <div>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="page" id="top">
      <SiteHeader />
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
