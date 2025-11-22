import Header from "../Components/header/page";
import Footer from "../Components/footer/page";

export default function Books() {
  return (
    <>
      <Header />

      <div className="min-h-screen flex justify-center px-6 py-20 font-sans">
        <main className="max-w-4xl w-full space-y-24">
          
          {/* FEATURED SECTION */}
          <section className="space-y-10 text-center">
            <h1 className="text-4xl font-semibold header">Featured</h1>

            {/* Featured Book Card */}
            <div className="flex flex-col items-center space-y-8">
              
              {/* Image with subtle drop shadow */}
              <img 
                src="/featured-book.png"
                alt="Featured Book"
                className="w-64 md:w-72 rounded-lg shadow-xl"
              />

              {/* Description */}
              <p className="text-lg leading-relaxed paragraph max-w-xl mx-auto">
                This powerful guide helps executive parents reclaim balance,
                strengthen leadership at home, and thrive with intention in every
                area of life. A modern roadmap for ambitious families who want
                to grow without burning out.
              </p>

              {/* CTA Button */}
              <a 
                href="#"
                className="inline-block gold text-black px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition"
              >
                Buy
              </a>
            </div>
          </section>

          {/* OTHER BOOKS SECTION */}
          <section className="space-y-10">
            <h2 className="text-3xl font-semibold header text-center">
              More Books
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Book Card 1 */}
              <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
                <img 
                  src="/book-placeholder.png"
                  alt="Book"
                  className="w-40 rounded shadow-md"
                />
                <h3 className="text-2xl font-semibold header">Book Title 1</h3>
                <p className="text-base paragraph text-center">
                  A concise description of the book, highlighting value,
                  transformation, or theme.
                </p>
                <a 
                  href="#"
                  className="inline-block gold text-black px-6 py-2 rounded-md text-lg font-medium hover:opacity-90 transition"
                >
                  Buy
                </a>
              </div>

              {/* Book Card 2 */}
              <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
                <img 
                  src="/book-placeholder.png"
                  alt="Book"
                  className="w-40 rounded shadow-md"
                />
                <h3 className="text-2xl font-semibold header">Book Title 2</h3>
                <p className="text-base paragraph text-center">
                  Another book description that gives meaningful insight while
                  keeping the layout balanced.
                </p>
                <a 
                  href="#"
                  className="inline-block gold text-black px-6 py-2 rounded-md text-lg font-medium hover:opacity-90 transition"
                >
                  Buy
                </a>
              </div>

            </div>
          </section>

        </main>
      </div>

      <Footer />
    </>
  );
}
