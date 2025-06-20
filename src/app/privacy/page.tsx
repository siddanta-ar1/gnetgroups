// src/app/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-blue-700">Privacy Policy</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p className="text-gray-700">
          We collect personal information such as your name, email, and usage data when you use our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. How We Use Information</h2>
        <p className="text-gray-700">
          Your information helps us improve our services, communicate with you, and fulfill your requests.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Data Protection</h2>
        <p className="text-gray-700">
          We take appropriate security measures to protect your data and prevent unauthorized access.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Third-party Sharing</h2>
        <p className="text-gray-700">
          We do not sell your data. We may share it with third parties only to operate or improve our services with
          appropriate safeguards.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Your Rights</h2>
        <p className="text-gray-700">
          You have the right to request access to your data, ask for corrections, or request deletion at any time.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-10">Last updated: June 2025</p>
    </main>
  )
}
