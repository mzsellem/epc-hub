import Header from '../Components/header/page';
import Footer from '../Components/footer/page';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      {/* Main content */}
      <main className="grow flex flex-col items-center px-6 py-12 w-full">
        <div className="max-w-4xl w-full flex flex-col space-y-10">
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
<div className="flex flex-col space-y-10 w-full max-w-3xl mx-auto text-left">

  {/* Section I */}
  <section className="space-y-6">
    <header className="text-2xl font-bold">
      I. Who is the Founder and What is The Executive Parent Company?
    </header>

    <div className="space-y-4">
      <p className="text-lg leading-relaxed paragraph">
        <span className="font-extrabold">Kenyada Meadows</span> is the founder of
        The Executive Parent Company, an ecosystem devoted to helping
        high-performing professionals rebalance their lives and lead with
        vulnerability to unlock durable power and lasting influence.
      </p>

      <p className="text-lg leading-relaxed paragraph">
        He developed The Balanced Leadership Institute framework to help
        individuals redefine strength and success through emotional intelligence,
        humility, and balance across three domains: work, home, and self.
      </p>

      <p className="text-lg leading-relaxed paragraph">
        Kenyada is a global finance executive, governance expert, and board member
        focused on organizations that meaningfully enhance the human experience
        through education and wellness.
      </p>

      <p className="text-lg leading-relaxed paragraph">
        His coaching is distinguished by the way it fuses governance discipline
        with deep human insight — translating complexity into clear, confident
        action.
      </p>
    </div>
  </section>

  {/* Section II */}
  <section className="space-y-6">
    <header className="text-2xl font-bold">
      II. The Executive Parent Company: An Urgent Need
    </header>

    <div className="space-y-4">
      <p className="text-lg leading-relaxed paragraph">
        Despite decades in leadership roles at some of the most recognized and
        respected companies in the world, I maintained a separation between
        professional association and personal identity.
      </p>

      <p className="text-lg leading-relaxed paragraph">
        Even the most senior leaders often mistake proximity for purpose,
        cloaking themselves in institutions that offer limited permanence or
        control.
      </p>

      <p className="text-lg leading-relaxed paragraph">
        This default leaves individuals increasingly vulnerable — seeking
        validation while compromising personal boundaries and integrity.
      </p>

      <p className="text-lg leading-relaxed paragraph">
        The Executive Parent Company exists to advance a simple truth:
        winning at work should not mean losing at life.
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
                Work With Kenyada
              </h1>
              <a
                href="/books"
                className="px-8 py-3 text-lg font-medium rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:bg-[#DDAD11] hover:text-black transition-all duration-300 ease-out"
              >
                Explore
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
