
function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-green-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold">Novidea UK</h1>
            <p className="text-xs text-green-600">High-Risk Payments • Global Coverage</p>
          </div>
          <button onClick={onStart} className="rounded-xl bg-green-600 px-4 py-2 text-white">
            Start Application
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold">Get high-risk merchants approved fast</h2>
          <p className="mt-6 text-gray-600">
            92% approval rate • Multi-jurisdiction acquiring • Global coverage
          </p>

          <ul className="mt-6 space-y-2">
            <li>✔ CBD, Forex, Adult, Gaming supported</li>
            <li>✔ Ecommerce & POS</li>
            <li>✔ Fast onboarding (24–48 hours)</li>
          </ul>

          <button onClick={onStart} className="mt-8 rounded-xl bg-green-600 px-6 py-3 text-white">
            Apply Now
          </button>
        </div>

        <div className="rounded-2xl bg-green-50 p-6">
          <h3 className="font-semibold">Quick Start</h3>
          <p className="text-sm text-gray-600">Begin your KYC application in minutes</p>
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
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8">
        <button onClick={onBack} className="mb-4 text-sm text-green-600">
          ← Back
        </button>

        <h2 className="text-2xl font-bold">KYC Application</h2>
        <p className="text-sm text-gray-600">
          Step {step + 1} of {steps.length}
        </p>

        <div className="mt-6">
          {step === 0 && (
            <div>
              <input className="mb-3 w-full rounded border p-3" placeholder="Company Name" />
              <input className="w-full rounded border p-3" placeholder="Website" />
            </div>
          )}

          {step === 1 && (
            <div>
              <input className="mb-3 w-full rounded border p-3" placeholder="Director Name" />
              <input className="w-full rounded border p-3" placeholder="Email" />
            </div>
          )}

          {step === 2 && (
            <div>
              <input className="mb-3 w-full rounded border p-3" placeholder="Monthly Volume" />
              <input className="w-full rounded border p-3" placeholder="Average Ticket" />
            </div>
          )}

          {step === 3 && (
            <div>
              <input className="mb-3 w-full rounded border p-3" placeholder="Bank Name" />
              <input className="w-full rounded border p-3" placeholder="IBAN" />
            </div>
          )}

          {step === 4 && <p className="text-gray-700">Review your details and submit.</p>}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="rounded border px-4 py-2"
          >
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="rounded bg-green-600 px-4 py-2 text-white"
            >
              Next
            </button>
          ) : (
            <button className="rounded bg-green-600 px-4 py-2 text-white">Submit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showKYC, setShowKYC] = useState(false);

  return showKYC ? (
    <KYCForm onBack={() => setShowKYC(false)} />
  ) : (
    <LandingPage onStart={() => setShowKYC(true)} />
  );
}
