import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-green-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold">Novidea UK</h1>
            <p className="text-xs text-green-600">High-Risk Payments • Global Coverage</p>
          </div>
          <button
            onClick={onStart}
            className="rounded-xl bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
          >
            Start Application
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Get high-risk merchants approved fast
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            92% approval rate • Multi-jurisdiction acquiring • Global coverage
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ CBD, Forex, Adult, Gaming supported</li>
            <li>✔ Ecommerce &amp; POS</li>
            <li>✔ Fast onboarding (24–48 hours)</li>
          </ul>

          <button
            onClick={onStart}
            className="mt-8 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Apply Now
          </button>
        </div>

        <div className="rounded-2xl bg-green-50 p-6 shadow-sm ring-1 ring-green-100">
          <h3 className="font-semibold">Quick Start</h3>
          <p className="mt-2 text-sm text-gray-600">Begin your KYC application in minutes.</p>
          <div className="mt-6 space-y-3">
            <div className="rounded-xl bg-white p-4 ring-1 ring-green-100">
              <p className="text-sm text-green-700">Approval rate</p>
              <p className="mt-1 text-2xl font-bold">92%</p>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-green-100">
              <p className="text-sm text-green-700">Coverage</p>
              <p className="mt-1 text-2xl font-bold">Global</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function KYCForm({ onBack }) {
  const [step, setStep] = useState(0);
  const steps = ["Business", "Owner", "Processing", "Bank", "Review"];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-green-100">
        <button
          onClick={onBack}
          className="mb-4 text-sm font-medium text-green-600 hover:text-green-700"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold">KYC Application</h2>
        <p className="mt-1 text-sm text-gray-600">
          Step {step + 1} of {steps.length} — {steps[step]}
        </p>

        <div className="mt-6">
          {step === 0 && (
            <div>
              <input
                className="mb-3 w-full rounded border border-gray-300 p-3"
                placeholder="Company Name"
              />
              <input className="w-full rounded border border-gray-300 p-3" placeholder="Website" />
            </div>
          )}

          {step === 1 && (
            <div>
              <input
                className="mb-3 w-full rounded border border-gray-300 p-3"
                placeholder="Director Name"
              />
              <input className="w-full rounded border border-gray-300 p-3" placeholder="Email" />
            </div>
          )}

          {step === 2 && (
            <div>
              <input
                className="mb-3 w-full rounded border border-gray-300 p-3"
                placeholder="Monthly Volume"
              />
              <input
                className="w-full rounded border border-gray-300 p-3"
                placeholder="Average Ticket"
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <input className="mb-3 w-full rounded border border-gray-300 p-3" placeholder="Bank Name" />
              <input className="w-full rounded border border-gray-300 p-3" placeholder="IBAN" />
            </div>
          )}

          {step === 4 && (
            <div className="rounded-xl bg-green-50 p-4 ring-1 ring-green-100">
              <p className="text-gray-700">Review your details and submit.</p>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="rounded border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-50"
          >
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="rounded bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
            >
              Next
            </button>
          ) : (
            <button className="rounded bg-green-600 px-4 py-2 text-white transition hover:bg-green-700">
              Submit
            </button>
          )}
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

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
