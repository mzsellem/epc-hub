import Header from '../Components/header/page';
import Footer from '../Components/footer/page';

export default function About() {
  return (
    <>
        <Header />
        <div className="min-h-screen flex justify-center px-6 py-20 font-sans">
          <main className="max-w-3xl w-full flex flex-col space-y-16">
            {/* <h1 className='flex justify-center header text-3xl'>About</h1> */}
            {/* SECTION WRAPPER */}
            <div className="space-y-28">

              {/* Mission Section */}
              <section className="flex flex-col md:flex-row items-center gap-10">
                <img 
                  src="/kenyada.png" 
                  alt="Kenyada" 
                  className="w-1/2 md:w-1/3 rounded-lg shadow-lg object-cover"
                />

                <div className="flex-1">
                  <h2 className="flex justify-center sm:justify-start text-3xl font-semibold mb-4 header">Our Mission</h2>
                  <p className="text-center sm:text-left text-lg leading-relaxed paragraph">
                    At EPC Hub, our mission is to empower executive parents with tools,
                    strategies, and a supportive community that helps them excel in both
                    their professional and personal lives. We believe that leadership
                    starts at home and extends into the workplace, and we are dedicated
                    to guiding families toward healthier, more intentional success. and 
                    we are dedicated to guiding families toward healthier, more intentional
                    success. and we are dedicated to guiding families toward healthier, more
                    intentional success.
                  </p>
                </div>
              </section>


              {/* Our Story Section */}
              <section className="flex flex-col-reverse md:flex-row items-center gap-10">

                <div className="flex-1">
                  {/* Gold Divider */}
                  <div className="w-16 h-1 bg-[#DDAD11] mb-6 rounded-full mx-auto md:mx-0"></div>

                  <h2 className="flex justify-center sm:justify-start text-3xl font-semibold mb-4 header">Our Story</h2>

                  <p className="text-center sm:text-left text-lg leading-relaxed paragraph">
                    EPC Hub was founded with the understanding that executive parents
                    face unique challenges—from burnout to competing priorities to the
                    constant pressure to perform. Our goal is to offer a space that
                    balances ambition with compassion, ambition with rest, and
                    performance with presence. Through coaching, curated resources,
                    and thoughtful programs, we help families thrive in a world that
                    rarely slows down.
                  </p>
                </div>

                <img 
                  src="/kenyada.png"
                  alt="Kenyada Portrait"
                  className="w-1/2 md:w-1/3 rounded-lg shadow-lg object-cover"
                />
              </section>
            </div>

              <section 
              className="relative w-full py-24 header bg-[#1f1f1f]">
                <div
                className="absolute inset-0"
                style={{background:"radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(31,31,31,1) 70%)",}}/>
                  <div className="relative layout-width text-center flex flex-col items-center space-y-6">
                    <h1 className="text-2xl md:text-2xl font-semibold">
                      Transform your mindset — one chapter at a time.
                    </h1>
                    <a 
                    href="/books"
                    className="inline-block gold text-black px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition">
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
