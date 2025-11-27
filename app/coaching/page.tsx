import Header from '../Components/header/page';
import Footer from '../Components/footer/page';
import Link from 'next/link';

export default function CoachingPage() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans bg-[#1f1f1f]">
      <Header />
      {/* Main Content */}
      <main className="grow flex flex-col items-center justify-center px-6 py-24 max-w-4xl w-full text-center space-y-6 text-white">
        <h1 className="text-4xl font-semibold">
          Schedule A Session
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed opacity-90 p-2">
          Book a one-on-one coaching session designed to support executive parents in navigating leadership,
          career demands, and personal well-being with clarity and confidence.
        </p>

 {/* Divider */}
        <div className="w-24 h-0.5 bg-[#967000] rounded-full mx-auto"></div>

        {/* Button to scheduling page */}
        <Link href="/coaching/scheduling">
          <button className="px-8 py-3 text-lg font-medium rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:bg-[#DDAD11] hover:text-black transition-all duration-300 ease-out">
            Schedule Now
          </button>
        </Link>

      </main>

      <Footer />
    </div>
  );
}
