import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "#f9fafb",
    color: "#111827",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderBottom: "1px solid #e5e7eb",
    background: "#ffffff",
  },
  button: {
    background: "#16a34a",
    color: "white",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
  main: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  },
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  }
};

function LandingPage({ onStart }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1>Novidea UK</h1>
          <p style={{ color: "#16a34a" }}>High-Risk Payments • Global Coverage</p>
        </div>
        <button style={styles.button} onClick={onStart}>Start Application</button>
      </div>

      <div style={styles.main}>
        <div>
          <h2>Get high-risk merchants approved fast</h2>
          <p>92% approval rate • Multi-jurisdiction acquiring • Global coverage</p>

          <ul>
            <li>CBD, Forex, Adult, Gaming supported</li>
            <li>Ecommerce & POS</li>
            <li>Fast onboarding (24–48 hours)</li>
          </ul>

          <button style={styles.button} onClick={onStart}>Apply Now</button>
        </div>

        <div style={styles.card}>
          <h3>Quick Start</h3>
          <p>Begin your KYC application in minutes</p>
        </div>
      </div>
    </div>
  );
}

function KYCForm({ onBack }) {
  const [step, setStep] = useState(0);

  return (
    <div style={styles.container}>
      <div style={{ maxWidth: "600px", margin: "40px auto", ...styles.card }}>
        <button onClick={onBack}>← Back</button>

        <h2>KYC Application</h2>

        {step === 0 && (
          <>
            <input style={styles.input} placeholder="Company Name" />
            <input style={styles.input} placeholder="Website" />
          </>
        )}

        {step === 1 && (
          <>
            <input style={styles.input} placeholder="Director Name" />
            <input style={styles.input} placeholder="Email" />
          </>
        )}

        {step === 2 && (
          <>
            <input style={styles.input} placeholder="Monthly Volume" />
            <input style={styles.input} placeholder="Average Ticket" />
          </>
        )}

        {step === 3 && (
          <>
            <input style={styles.input} placeholder="Bank Name" />
            <input style={styles.input} placeholder="IBAN" />
          </>
        )}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={() => setStep(Math.max(0, step - 1))}>Back</button>
          <button style={styles.button} onClick={() => setStep(step + 1)}>
            {step === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showKYC, setShowKYC] = useState(false);
  return showKYC ? (
    <KYCForm onBack={() => setShowKYC(false)} />
  ) : (
    <LandingPage onStart={() => setShowKYC(true)} />
  );
}

const root = document.getElementById("root");
createRoot(root).render(<App />);
