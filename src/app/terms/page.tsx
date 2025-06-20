// src/app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-blue-700">Terms of Service</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By accessing and using our website or services, you agree to be bound by these Terms of Service.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Services</h2>
        <p className="text-gray-700">
          We offer a variety of services including domain & hosting, IT consultancy, business setup, and more. We reserve
          the right to modify or discontinue any service without notice.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
        <p className="text-gray-700">
          You agree to provide accurate information and use our services legally. We reserve the right to suspend your
          access for any misuse or breach of terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
        <p className="text-gray-700">
          We are not liable for any indirect or consequential loss resulting from use of our services.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-10">Last updated: June 2025</p>
    </main>
  )
}
