import Header from '../Components/header/page';
import Footer from '../Components/footer/page';

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen items-center justify-center px-6 py-24 font-sans">
        <main className="max-w-4xl w-full flex flex-col space-y-16">
          <h2 className="flex justify-center text-4xl font-semibold mb-4 header">
          About
          </h2>

          <div className="w-1/3 h-0.5 bg-[#DDAD11] mb-10 rounded-full mx-auto"></div>

          {/* SECTION WRAPPER */}
          <div className="space-y-28">
            {/* Mission Section */}
            <section className="flex flex-col md:flex-row gap-6 md:gap-10 items-center text-center sm:text-start">
              <img
                src="/kenyada.png"
                alt="Kenyada"
                className="w-full md:w-1/2 max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover"
              />

              <div className="flex flex-col space-y-4">
                <p className="text-lg leading-relaxed paragraph text-center md:text-left">
                  Kenyada Meadows is founder of The Executive Parent Company, an ecosystem
                  devoted to helping high-performing professionals rebalance their lives and
                  lead with vulnerability to unleash true power and lasting influence.
                </p>

                <p className="text-lg leading-relaxed paragraph text-center md:text-left">
                  Kenyada developed The New Alpha framework to help leaders redefine strength
                  and success through emotional intelligence, humility, and balance across
                  three domains — their relationships at work, home, and with themselves.
                </p>

                <p className="text-lg leading-relaxed paragraph text-center md:text-left">
                  Kenyada is a global finance executive, governance expert, and board member
                  focused on organizations that deeply enhance the human experience through
                  education and wellness.
                </p>
              </div>
            </section>
          </div>

          {/* Call-to-action Section */}
          <section className="relative w-full py-24 header bg-[#1f1f1f]">
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(31,31,31,1) 70%)",
              }}
            />
            <div className="relative layout-width text-center flex flex-col items-center space-y-6">
              <h1 className="text-2xl md:text-2xl font-semibold">
                Transform your mindset — one chapter at a time.
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
      </div>
      <Footer />
    </>
  );
}
