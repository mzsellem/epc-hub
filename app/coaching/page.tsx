import Header from '../Components/header/page';
import Footer from '../Components/footer/page';
import Link from 'next/link';


export default function CoachingPage() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans bg-[#1f1f1f] text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="grow flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl w-full space-y-12">
        <h1 className="text-4xl font-semibold">
          Coaching
        </h1>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-[#967000] rounded-full mx-auto"></div>

        {/* Sections */}
        <section className="w-full space-y-16 pt-20">

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Executive Coaching for Balanced Leadership & Legacy</h2>
            <p className="text-base md:text-lg opacity-85">
              This unique coaching system develops sustainable excellence and integrated leadership across 
              the three domains – relationships at work, home, and with oneself. Examples of coaching 
              outcomes that align and accentuate whole-life goals include:
            </p>
            <ul className="space-y-2 opacity-80 pl-6">
              <li>• Work: Reputation optimization, professional relationship management, boundary setting</li>
              <li>• Home: Multidirectional communication, enhanced listening, formal success measures</li>
              <li>• Self: Values identification and alignment, emotional awareness, improved vitality</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Professional and Personal Coaching Qualifications</h2>
            <ul className="space-y-2 opacity-80">
              <li>• Wall Street Executive with Big Four and Cross-Industry Strategic Experience</li>
              <li>• Certified Executive Coach</li>
              <li>• Qualified Financial Expert</li>
              <li>• Harvard Business School Alumnus</li>
              <li>• Governing Board and Committee Member</li>
              <li>• University Lecturer</li>
              <li>• Published Author</li>
              <li>• Multicultural and Multilingual</li>
              <li>• Whole-life Leader and Balanced Legacy Builder</li>
              <li>• Values Driven and People-Centered</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Client Commitment</h2>
            <ul className="space-y-2 opacity-80">
              <li>• Develop and integrate excellence across the three domains</li>
              <li>• Diligently identify and remediate gaps sustainably</li>
              <li>• Model self-awareness, critical challenge, and ongoing development of others</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Return on Investment</h2>
            <p className="text-base md:text-lg opacity-85">
              Each Coaching Module Includes:
            </p>
            <ul className="space-y-2 opacity-80">
              <li>• Five (5) intensive hourlong executive coaching sessions</li>
              <li>• Whole-life goals setting</li>
              <li>• Success metrics setup and monitoring</li>
              <li>• Skills optimization and integration across domains</li>
              <li>• Personal Sustainability Assessment</li>
              <li>• Email and text support between sessions</li>
            </ul>
            <p className="text-base md:text-lg opacity-85">
              Add-ons after two (2) modules:
            </p>
            <ul className="space-y-2 opacity-80">
              <li>• Full-day strategy session and workshop (virtual or in-person)</li>
              <li>• Eligible family member or business partner sessions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Investment in Leadership and Legacy</h2>
            <p className="text-base md:text-lg opacity-85">
              Confirm your unwavering commitment to elevated, integrated leadership, the
              enriched life you envision, and the lives you influence. Your life and legacy
              will be measured, not by invested time or effort, but by whole-life outcomes:
            </p>
            <ul className="space-y-2 opacity-80">
              <li>• 10-week Balanced Leadership and Legacy Intensive - $8,500</li>
            </ul>
            <p className="text-base md:text-lg opacity-85">
              Entry Option:
            </p>
            <ul className="space-y-2 opacity-80 mb-8">
              <li>• Diagnostic and Readiness Assessment for Balanced Leadership and Legacy - $1,875</li>
            </ul>
            <p className="text-base md:text-lg opacity-85 font-extrabold">Custom engagements including joint or team sessions available upon request.</p>
            {/* Divider */}
            <div className="w-24 h-0.5 bg-[#967000] rounded-full mx-auto mt-10"></div>
          </div>
        </section>

        {/* Call-to-action Section */}
          <section className="relative w-full py-24 header bg-[#1f1f1f]">
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(31,31,31,1) 70%)",
              }}
            />
            <div className="relative w-full max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
              <h1 className="text-2xl md:text-xl font-semibold">
                “You owe it to yourself and to those who depend on you to become who you’re capable of becoming.”
                <p className='mt-5'>- Abraham Maslow</p>
              </h1>
              {/* Button */}
              <Link href="/coaching/scheduling">
                <button className="px-8 py-3 text-lg font-medium rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:bg-[#DDAD11] hover:text-black transition-all duration-300 ease-out">
                  Schedule
                </button>
              </Link>
            </div>
          </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
