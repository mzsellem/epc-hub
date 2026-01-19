import Header from '../Components/header/page';
import Footer from '../Components/footer/page';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      {/* Main content */}
      <main className="grow w-full px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto flex flex-col space-y-10">
          <h1 className="text-4xl font-semibold header mb-4 text-center">
            About
          </h1>          
          <div className="w-24 sm:w-32 md:w-40 h-0.5 bg-[#DDAD11] mx-auto rounded-full"></div>

{/* Image */}
<img
  src="/kenyada.png"
  alt="Kenyada"
  className="w-48 md:w-56 mx-auto rounded-lg shadow-lg object-cover"
/>

{/* Stacked Roman Sections */}
<div className="flex flex-col space-y-10 w-full max-w-3xl mx-auto text-left px-2 sm:px-0">

  {/* Section I */}
  <section className="space-y-6">
    <header className="text-xl sm:text-2xl font-bold">
      I. What is The Executive Parent Company &  Who is the Founder?
    </header>

    <div className="space-y-4">
      <p className="text-base sm:text-lg leading-relaxed paragraph">
        <span className="font-extrabold">Kenyada Meadows</span> is the founder of
        The Executive Parent Company, an ecosystem devoted to helping
        high-performing professionals rebalance their lives and lead with
        vulnerability to unlock durable power and lasting influence.
      </p>

      <p className="text-base sm:text-lg leading-relaxed paragraph">
        He developed The Balanced Leadership Institute framework to help
        individuals redefine strength and success through emotional intelligence,
        humility, and balance across three domains: work, home, and self.
      </p>

      <p className="text-base sm:text-lg leading-relaxed paragraph">
        Kenyada is a global finance executive, governance expert, and board member
        focused on organizations that meaningfully enhance the human experience
        through education and wellness.
      </p>

      <p className="text-base sm:text-lg leading-relaxed paragraph">
        His coaching is distinguished by the way it fuses governance discipline
        with deep human insight - translating complexity into clear, confident
        action.
      </p>
    </div>
  </section>

  {/* Section II */}
  <section className="space-y-6">
    <header className="text-xl sm:text-2xl font-bold">
      II. The Executive Parent Company: An Urgent Need
    </header>

    <div className="space-y-4">
      <p className="text-base sm:text-lg leading-relaxed paragraph">
        Despite decades in leadership roles at some of the most recognized and
        respected companies in the world, I maintained a separation between
        professional association and personal identity. I recognized that even
        the most senior and tenured leaders often have little lasting control 
        over the companies - and reputations - in which they conveniently choose, 
        or sometimes find it necessary, to cloak themselves.
      </p>

      <p className="text-base sm:text-lg leading-relaxed paragraph">
        This too-common default of assuming a ready-made corporate identity as 
        a source of real personal value and belonging continues to leave 
        individuals unfulfilled and, ironically, more vulnerable - seeking validation
        from equally misguided people while steadily compromising personal boundaries, 
        integrity, and the most critical relationships along the way.
      </p>

      <p className="text-base sm:text-lg leading-relaxed paragraph">
        The result is that countless millions of people, their families, and the 
        organizations they comprise are rendered weaker and less cohesive than they 
        often claim or appear to be. What it means to be a leader within becomes less 
        about protecting personal principles and more about navigating professional 
        politics. The irony - and the error - are clear, yet the downward spiral remains 
        largely unaddressed.
      </p>

      <p className="text-base sm:text-lg leading-relaxed paragraph">
        Just as an illness cannot generate its own cure, focus on a single leadership domain 
        cannot resolve the atrophy in life that it causes. Becoming more integrated, balanced, 
        and resilient leaders requires support across multiple domains - arguably the least important 
        of which is what we do for work.
      </p>
        <p className="text-base sm:text-lg leading-relaxed paragraph">
        The Executive Parent Company is committed to the simple idea that there are better ways to 
        live and lead—that winning at work should not mean losing at life.
      </p>
    </div>
  </section>
</div>

          </div>

        {/* Divider */}
          <div className="w-24 sm:w-32 md:w-40 h-0.5 bg-[#a9801a] mx-auto m-10 rounded-full"></div>

         {/* Call-to-action Section */}
          <section className="relative w-full py-12 header bg-[#1f1f1f]">
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(31,31,31,1) 70%)",
              }}
            />
            <div className="relative w-full max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
              <h1 className="text-2xl md:text-3xl font-semibold">
                Take The First Step
              </h1>
              <a
                href="/coaching/scheduling"
                className="px-8 py-3 text-lg font-medium rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:bg-[#DDAD11] hover:text-black transition-all duration-300 ease-out"
              >
                Schedule
              </a>
            </div>
          </section>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
