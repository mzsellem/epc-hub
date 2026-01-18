import Header from '../Components/header/page';
import Footer from '../Components/footer/page';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      {/* Main content */}
      <main className="grow flex flex-col items-center px-6 py-12 w-full">
        <div className="max-w-4xl w-full flex flex-col space-y-10">
          
          {/* Page Title */}
          <h2 className="text-4xl font-semibold mb-4 header text-center">
            About
          </h2>

          {/* Divider */}
          <div className="w-24 sm:w-32 md:w-40 h-0.5 bg-[#DDAD11] mx-auto mb-10 rounded-full"></div>

          <header className='text-2xl font-bold'>I. Who is the Founder and What is The Executive Parent Company?</header>

          {/* Mission / Bio Section */}
          <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full">
  {/* Image */}
  <img
    src="/kenyada.png"
    alt="Kenyada"
    className="w-1/2 rounded-lg shadow-lg object-cover"
  />

  {/* Text */}
  <div className="flex flex-col space-y-4 text-center md:text-left md:w-3/5 lg:w-3/5">
    <p className="text-lg leading-relaxed paragraph">
      <span className="font-extrabold">Kenyada Meadows</span> is the founder of The Executive Parent Company, an ecosystem devoted to helping high-performing professionals rebalance their lives and lead with vulnerability to unlock durable power and lasting influence.
    </p>

    <p className="text-lg leading-relaxed paragraph">
      He developed The Balanced Leadership Institute framework to help individuals redefine strength and success through emotional intelligence, humility, and balance across three domains: work, home, and self. The three domains or “pillars” are explored in depth in his book, “The New Alpha”. 
    </p>

    <p className="text-lg leading-relaxed paragraph">
      Kenyada is a global finance executive, governance expert, and board member focused on organizations that meaningfully enhance the human experience through education and wellness.
    </p>

    <p className="text-lg leading-relaxed paragraph">
      His coaching is distinguished by the way it fuses governance discipline and leadership principles with deep human insight - helping leaders translate complexity into clear, confident action.
    </p>
  </div>

</section>

        </div>

        {/* Section II */}
<section className="w-full max-w-4xl mx-auto flex flex-col space-y-6">

    <header className='text-2xl font-bold mt-10'>II. Why The Executive Parent Company Exists</header>

  {/* Two-Column Content */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
    {/* Column One */}
    <div className="space-y-4">
      <p className="text-lg leading-relaxed paragraph">
        Despite decades in leadership roles at some of the most recognized and
        respected companies in the world, I always maintained a separation
        between these professional associations and my personal identity.
      </p>

      <p className="text-lg leading-relaxed paragraph">
        I recognized that even the most senior leaders often have little lasting
        control over the companies — and reputations — in which they cloak
        themselves, mistaking proximity for purpose.
      </p>

      <p className="text-lg leading-relaxed paragraph">
        This default of adopting a ready-made corporate identity continues to
        leave individuals unfulfilled and increasingly vulnerable, seeking
        validation while compromising personal boundaries and integrity.
      </p>
    </div>

    {/* Column Two */}
    <div className="space-y-4">
      <p className="text-lg leading-relaxed paragraph">
        The result is that millions of people, their families, and the
        organizations they comprise are rendered weaker and less cohesive than
        they appear. Leadership becomes less about principle and more about
        navigation.
      </p>

      <p className="text-lg leading-relaxed paragraph">
        Just as an illness cannot generate its own cure, focus on a single
        leadership domain cannot resolve the atrophy it causes elsewhere.
        Integration across life domains is essential.
      </p>

      <p className="text-lg leading-relaxed paragraph">
        The Executive Parent Company exists to advance a simple truth: winning
        at work should not mean losing at life.
      </p>
    </div>

  </div>
</section>


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
