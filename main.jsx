import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const css = `
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Inter, Arial, sans-serif; background: #f5f7f8; color: #142013; }
  a { color: inherit; text-decoration: none; }
  button, input { font: inherit; }

  .page {
    min-height: 100vh;
    background:
      radial-gradient(circle at top right, rgba(22,163,74,0.10), transparent 30%),
      linear-gradient(180deg, #ffffff 0%, #f5f7f8 100%);
  }

  .header {
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.92);
    border-bottom: 1px solid #e3e8e5;
  }

  .wrap {
    width: min(1120px, calc(100% - 32px));
    margin: 0 auto;
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0;
    gap: 20px;
  }

  .brand-title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .brand-sub {
    margin: 4px 0 0;
    font-size: 0.78rem;
    color: #17803d;
    font-weight: 600;
  }

  .btn {
    border: 0;
    border-radius: 14px;
    padding: 13px 18px;
    cursor: pointer;
    transition: 0.2s ease;
    font-weight: 700;
  }

  .btn-primary {
    background: linear-gradient(135deg, #16a34a, #15803d);
    color: white;
    box-shadow: 0 10px 24px rgba(22,163,74,0.24);
  }

  .btn-primary:hover { transform: translateY(-1px); }

  .btn-secondary {
    background: white;
    color: #1f2937;
    border: 1px solid #d8dfdb;
  }

  .hero {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 32px;
    align-items: center;
    padding: 56px 0 44px;
  }

  .eyebrow {
    display: inline-block;
    padding: 8px 12px;
    border-radius: 999px;
    background: #ebf8ef;
    color: #17803d;
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .hero h2 {
    margin: 0;
    font-size: clamp(2.3rem, 5vw, 4.6rem);
    line-height: 0.98;
    letter-spacing: -0.04em;
  }

  .hero p.lead {
    font-size: 1.08rem;
    line-height: 1.75;
    color: #475569;
    max-width: 640px;
    margin: 20px 0 0;
  }

  .bullet-list {
    margin: 22px 0 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 10px;
    color: #233224;
  }

  .bullet-list li::before {
    content: "✓";
    color: #16a34a;
    font-weight: 800;
    margin-right: 10px;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 28px;
  }

  .panel {
    background: linear-gradient(180deg, #f2fbf4 0%, #ffffff 100%);
    border: 1px solid #dcecdf;
    border-radius: 28px;
    padding: 26px;
    box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
  }

  .panel h3 {
    margin: 0;
    font-size: 1.15rem;
  }

  .panel p {
    color: #52616f;
    line-height: 1.6;
  }

  .stat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-top: 18px;
  }

  .stat {
    background: white;
    border: 1px solid #e4ece6;
    border-radius: 18px;
    padding: 18px;
  }

  .stat-label {
    font-size: 0.82rem;
    color: #17803d;
    font-weight: 700;
  }

  .stat-value {
    font-size: 1.9rem;
    font-weight: 800;
    margin-top: 6px;
    letter-spacing: -0.03em;
  }

  .trust-bar {
    margin: 6px 0 34px;
    background: #16361f;
    color: white;
    border-radius: 24px;
    padding: 18px 22px;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    flex-wrap: wrap;
    align-items: center;
  }

  .trust-items {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
    color: rgba(255,255,255,0.86);
    font-size: 0.95rem;
  }

  .section {
    padding: 28px 0 50px;
  }

  .section-title {
    margin: 0 0 8px;
    font-size: 2rem;
    letter-spacing: -0.03em;
  }

  .section-copy {
    margin: 0 0 24px;
    color: #52616f;
    max-width: 700px;
    line-height: 1.7;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .card {
    background: white;
    border: 1px solid #e4ece6;
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 10px 28px rgba(15,23,42,0.04);
  }

  .card h4 {
    margin: 0 0 10px;
    font-size: 1.12rem;
  }

  .card p {
    margin: 0;
    color: #5b6977;
    line-height: 1.7;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .step-num {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #eaf7ee;
    color: #17803d;
    font-weight: 800;
    margin-bottom: 14px;
  }

  .form-shell {
    max-width: 760px;
    margin: 44px auto;
    background: white;
    border: 1px solid #e4ece6;
    border-radius: 28px;
    padding: 28px;
    box-shadow: 0 18px 40px rgba(15,23,42,0.08);
  }

  .back-link {
    color: #17803d;
    background: none;
    border: 0;
    padding: 0;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 18px;
  }

  .step-copy {
    color: #5b6977;
    margin: 8px 0 22px;
  }

  .field-grid {
    display: grid;
    gap: 12px;
  }

  .input {
    width: 100%;
    border-radius: 14px;
    border: 1px solid #cfd8d2;
    padding: 14px 15px;
    background: #fff;
  }

  .input:focus {
    outline: 2px solid rgba(22,163,74,0.15);
    border-color: #16a34a;
  }

  .step-actions {
    display: flex;
    justify-content: space-between;
    gap: 14px;
    margin-top: 22px;
  }

  .review-box {
    background: #f3faf5;
    border: 1px solid #dcecdf;
    border-radius: 18px;
    padding: 18px;
    color: #364152;
  }

  @media (max-width: 920px) {
    .hero,
    .cards,
    .steps,
    .main-grid,
    .stat-grid {
      grid-template-columns: 1fr;
    }
    .hero { padding-top: 34px; }
  }
`;

function LandingPage({ onStart }) {
  return (
    <div className="page">
      <style>{css}</style>
      <header className="header">
        <div className="wrap header-inner">
          <div>
            <h1 className="brand-title">Novidea UK</h1>
            <p className="brand-sub">High-Risk Payments • Global Coverage • Multi-Jurisdiction Acquiring</p>
          </div>
          <button onClick={onStart} className="btn btn-primary">Start Application</button>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div>
            <span className="eyebrow">High-risk payment specialists</span>
            <h2>Get high-risk merchants approved fast.</h2>
            <p className="lead">
              Novidea UK supports partners and merchants with ecommerce and POS payment solutions for high-risk sectors, with global coverage and multi-jurisdiction acquiring options.
            </p>

            <ul className="bullet-list">
              <li>92% approval rate</li>
              <li>Fast onboarding in as little as 24–48 hours</li>
              <li>CBD, Forex, Adult, Gaming and other high-risk verticals supported</li>
              <li>Global coverage for ecommerce and POS merchants</li>
            </ul>

            <div className="cta-row">
              <button onClick={onStart} className="btn btn-primary">Apply Now</button>
              <button className="btn btn-secondary">Speak to an expert</button>
            </div>
          </div>

          <div className="panel">
            <h3>Quick Start</h3>
            <p>Begin your merchant KYC application in minutes and move straight into onboarding.</p>
            <div className="stat-grid">
              <div className="stat">
                <div className="stat-label">Approval rate</div>
                <div className="stat-value">92%</div>
              </div>
              <div className="stat">
                <div className="stat-label">Coverage</div>
                <div className="stat-value">Global</div>
              </div>
              <div className="stat">
                <div className="stat-label">Onboarding</div>
                <div className="stat-value">24–48h</div>
              </div>
              <div className="stat">
                <div className="stat-label">Setup</div>
                <div className="stat-value">Multi-jurisdiction</div>
              </div>
            </div>
          </div>
        </section>

        <div className="trust-bar">
          <strong>Built for complex merchants, fast-moving partners, and specialist acquiring setups.</strong>
          <div className="trust-items">
            <span>Global coverage</span>
            <span>Multi-jurisdiction acquiring</span>
            <span>Ecommerce & POS</span>
          </div>
        </div>

        <section className="section">
          <h3 className="section-title">What we deliver</h3>
          <p className="section-copy">
            A commercial setup designed to generate leads, position credibility, and move approved merchants into onboarding quickly.
          </p>
          <div className="cards">
            <div className="card">
              <h4>High-Risk Merchant Accounts</h4>
              <p>Access to specialist acquiring options for merchants operating in higher-risk and harder-to-place sectors.</p>
            </div>
            <div className="card">
              <h4>Ecommerce & POS Solutions</h4>
              <p>Support for online card acceptance, in-person payments, and blended merchant models across multiple jurisdictions.</p>
            </div>
            <div className="card">
              <h4>Partner-Led Growth</h4>
              <p>Built for introducers, brokers, and partners who need a credible front-end and a smoother onboarding journey.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title">How it works</h3>
          <p className="section-copy">
            A simple flow that moves merchants from enquiry to application without friction.
          </p>
          <div className="steps">
            <div className="card">
              <div className="step-num">1</div>
              <h4>Apply</h4>
              <p>Submit initial details and start the KYC process in a few minutes.</p>
            </div>
            <div className="card">
              <div className="step-num">2</div>
              <h4>Review</h4>
              <p>Your profile is assessed against the right acquiring and underwriting route.</p>
            </div>
            <div className="card">
              <div className="step-num">3</div>
              <h4>Go Live</h4>
              <p>Move approved merchants toward onboarding, setup, and live processing.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function KYCForm({ onBack }) {
  const [step, setStep] = useState(0);
  const steps = ["Business", "Owner", "Processing", "Bank", "Review"];

  return (
    <div className="page">
      <style>{css}</style>
      <div className="form-shell">
        <button onClick={onBack} className="back-link">← Back to homepage</button>
        <h2 className="section-title" style={{ marginBottom: 0 }}>KYC Application</h2>
        <p className="step-copy">Step {step + 1} of {steps.length} — {steps[step]}</p>

        <div className="field-grid">
          {step === 0 && (
            <>
              <input className="input" placeholder="Company Name" />
              <input className="input" placeholder="Website" />
              <input className="input" placeholder="Country of Incorporation" />
            </>
          )}

          {step === 1 && (
            <>
              <input className="input" placeholder="Director Name" />
              <input className="input" placeholder="Email" />
              <input className="input" placeholder="Ownership Percentage" />
            </>
          )}

          {step === 2 && (
            <>
              <input className="input" placeholder="Monthly Volume" />
              <input className="input" placeholder="Average Ticket" />
              <input className="input" placeholder="Industry Type" />
            </>
          )}

          {step === 3 && (
            <>
              <input className="input" placeholder="Bank Name" />
              <input className="input" placeholder="IBAN / Account Number" />
              <input className="input" placeholder="Settlement Currency" />
            </>
          )}

          {step === 4 && (
            <div className="review-box">
              Review your details and submit the merchant application for onboarding.
            </div>
          )}
        </div>

        <div className="step-actions">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="btn btn-secondary"
          >
            Back
          </button>

          <button
            onClick={() => setStep((s) => (step === steps.length - 1 ? s : s + 1))}
            className="btn btn-primary"
          >
            {step === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showKYC, setShowKYC] = useState(false);
  return showKYC ? <KYCForm onBack={() => setShowKYC(false)} /> : <LandingPage onStart={() => setShowKYC(true)} />;
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
