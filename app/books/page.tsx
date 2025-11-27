import Header from "../Components/header/page";
import Footer from "../Components/footer/page";

export default function BooksPage() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans">
      <Header />

      {/* Main content */}
      <main className="grow flex flex-col items-center justify-start px-6 py-12 w-full max-w-4xl space-y-24">

        {/* Featuring Section */}
        <section
          className="text-center relative w-full"
          style={{
            WebkitMaskImage: `
              radial-gradient(
                circle at center,
                black 60%,
                transparent 100%
              )
            `,
            maskImage: `
              radial-gradient(
                circle at center,
                #757575 60%,
                transparent 100%
              )
            `,
            background: `
              radial-gradient(
                circle at center,
                #3f7d63 0%,
                #1F1F1F 70%
              )
            `,
          }}
        >
          <h1 className="text-4xl font-semibold header mb-4 text-white">
            Featuring
          </h1>
          <div className="w-1/3 h-0.5 bg-[#DDAD11] mb-10 rounded-full mx-auto"></div>

          {/* Featured Book Card */}
          <div
            className="flex flex-col items-center space-y-8 backdrop-blur-sm p-6 shadow-2xl relative rounded-xl"
            style={{
              background: `
                radial-gradient(
                  circle at center,
                  rgba(15,15,15,0.6) 0%,
                  rgba(15,15,15,0.4) 60%,
                  #1F1F1F 100%
                )
              `,
            }}
          >
            <img
              src="/the-new-alpha.png"
              alt="Featured Book"
              className="w-64 rounded-lg shadow-xl"
            />

            <p className="text-lg leading-relaxed paragraph max-w-xl mx-auto">
              This powerful guide helps executive parents reclaim balance,
              strengthen leadership at home, and thrive with intention in every
              area of life. A modern roadmap for ambitious families who want
              to grow without burning out.
            </p>

            <a
              href="#"
              className="px-8 py-3 text-lg font-medium rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:bg-[#DDAD11] hover:text-black transition-all duration-300 ease-out"
            >
              Buy
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
