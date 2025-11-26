import Header from '../Components/header/page';
import Footer from '../Components/footer/page';
import Link from 'next/link';

export default function CoachingPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen flex flex-col items-center px-6 py-24 font-sans" style={{ backgroundColor: '#1f1f1f' }}>
        <main className="max-w-4xl w-full text-center space-y-6 text-white">

          {/* Title */}
          <h1 className="text-4xl font-semibold">
            Unlock Your Potential
          </h1>
          <div className="w-1/3 h-0.5 bg-[#DDAD11] rounded-full mx-auto"></div>
          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed opacity-90 p-2">
            Book a one-on-one coaching session designed to support executive parents in navigating leadership,
            career demands, and personal well-being with clarity and confidence.
          </p>

          {/* Button to scheduling page */}
          <Link href="/coaching/scheduling">
            <button className="px-8 py-3 text-lg font-medium rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:bg-white hover:text-black transition-all duration-300 ease-out">
              Schedule Now
            </button>
          </Link>

        </main>
      </div>

      <Footer />
    </>
  );
}
