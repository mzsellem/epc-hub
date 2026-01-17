import Header from '../Components/header/page';
import Footer from '../Components/footer/page';
import Link from 'next/link';

export default function CoachingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#1f1f1f] text-white">
      <Header />

      <main className="grow w-full px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* Page Title */}
          <header className="flex  flex-col items-center space-y-6">
            <h1 className="text-4xl font-semibold">
              Coaching
            </h1>
            <div className="w-24 h-0.5 bg-[#967000] rounded-full" />
            <p className="max-w-3xl text-lg opacity-85 text-center">
              Executive coaching designed to cultivate integrated leadership, sustainable excellence,
              and a legacy aligned across work, home, and self.
            </p>
          </header>

          {/* Sections */}
          <section className="space-y-16">

            {/* Section Block */}
            <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl p-10 space-y-6 text-left">
              <h2 className="text-2xl font-semibold">
                Executive Coaching for Balanced Leadership & Legacy
              </h2>
              <p className="text-base md:text-lg opacity-85 max-w-3xl">
                This coaching system develops sustainable excellence across three core domains,
                ensuring alignment between ambition, responsibility, and personal vitality.
              </p>
              <ul className="space-y-3 pl-5 list-disc opacity-80">
                <li>Work: Reputation optimization, relationship management, boundary setting</li>
                <li>Home: Multidirectional communication, listening mastery, success metrics</li>
                <li>Self: Values alignment, emotional intelligence, vitality and resilience</li>
              </ul>
            </div>

          <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl p-10 space-y-6 text-left">
              <h2 className="text-2xl font-semibold">
                Professional & Personal Qualifications
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 pl-5 list-disc opacity-80">
                <li>Wall Street Executive (Big Four & Cross-Industry)</li>
                <li>Certified Executive Coach</li>
                <li>Qualified Financial Expert</li>
                <li>Harvard Business School Alumnus</li>
                <li>Governing Board & Committee Member</li>
                <li>University Lecturer</li>
                <li>Published Author</li>
                <li>Multicultural & Multilingual</li>
                <li>Values-Driven, People-Centered Leader</li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl p-10 space-y-6 text-left">
              <h2 className="text-2xl font-semibold">
                Client Commitment
              </h2>
              <ul className="space-y-3 pl-5 list-disc opacity-80 max-w-3xl">
                <li>Develop integrated excellence across all life domains</li>
                <li>Identify and close leadership gaps sustainably</li>
                <li>Model self-awareness, challenge, and growth for others</li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl p-10 space-y-6 text-left">
              <h2 className="text-2xl font-semibold">
                Return on Investment
              </h2>
              <p className="text-base md:text-lg opacity-85">
                Each coaching module includes:
              </p>
              <ul className="space-y-3 pl-5 list-disc opacity-80 max-w-3xl">
                <li>Five (5) intensive hour-long executive coaching sessions</li>
                <li>Whole-life goal setting and success metrics</li>
                <li>Skills integration across work, home, and self</li>
                <li>Personal Sustainability Assessment</li>
                <li>Email and text support between sessions</li>
              </ul>

              <p className="text-base md:text-lg opacity-85 pt-4">
                Add-ons available after two modules:
              </p>
              <ul className="space-y-3 pl-5 list-disc opacity-80 max-w-3xl">
                <li>Full-day strategy session (virtual or in-person)</li>
                <li>Eligible family member or business partner sessions</li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl p-10 space-y-6 text-left">
              <h2 className="text-2xl font-semibold">
                Investment in Leadership & Legacy
              </h2>
              <p className="text-base md:text-lg opacity-85 max-w-3xl">
                Your commitment is measured not by effort alone, but by whole-life outcomes
                and the legacy you leave behind.
              </p>
              <ul className="space-y-3 pl-5 list-disc opacity-80">
                <li>10-week Balanced Leadership & Legacy Intensive — $8,500</li>
                <li>Diagnostic & Readiness Assessment — $1,875</li>
              </ul>
              <p className="text-base md:text-lg font-semibold opacity-90 pt-4">
                Custom engagements available upon request.
              </p>
            </div>

          </section>

          {/* CTA */}
          <section className="relative py-24 mt-24 rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(31,31,31,1) 70%)',
              }}
            />
            <div className="relative max-w-3xl mx-auto text-center space-y-8 px-6">
              <p className="text-xl font-semibold">
                “You owe it to yourself and to those who depend on you to become who you’re capable of becoming.”
              </p>
              <p className="opacity-75">— Abraham Maslow</p>
              <Link href="/coaching/scheduling">
                <button className="px-8 py-3 text-lg font-medium rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:bg-[#DDAD11] hover:text-black transition-all duration-300 ease-out">
                  Schedule
                </button>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
