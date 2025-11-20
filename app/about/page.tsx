import Header from '../Components/header/page';

export default function About() {
  return (
    <>
        <Header />
        <div className="min-h-screen flex justify-center px-6 py-20 font-sans">
        <main className="max-w-3xl w-full flex flex-col space-y-16">
            
            {/* Section 1 */}
            <section>
            <h2 className="text-3xl font-semibold mb-4 header">Our Mission</h2>
            <p className="text-lg leading-relaxed paragraph">
                At EPC Hub, our mission is to empower executive parents with tools, 
                strategies, and a supportive community that helps them excel in both 
                their professional and personal lives. We believe that leadership starts 
                at home and extends into the workplace, and we are dedicated to guiding 
                families toward healthier, more intentional success.
            </p>
            </section>

            {/* Section 2 */}
            <section>
            <h2 className="text-3xl font-semibold mb-4 header">Our Story</h2>
            <p className="text-lg leading-relaxed paragraph">
                EPC Hub was founded with the understanding that executive parents face 
                unique challenges—from burnout to competing priorities to the constant 
                pressure to perform. Our goal is to offer a space that balances ambition 
                with compassion, ambition with rest, and performance with presence. 
                Through coaching, curated resources, and thoughtful programs, we help 
                families thrive in a world that rarely slows down.
            </p>
            </section>
            <section 
              className="w-full py-24 header bg-gradient-radial from-neutral-600 to-#383838" 
              style={{background: "radial-gradient(circle at center, #a1a1a1, #1f1f1f)"}}>
          <div className="layout-width text-center flex flex-col items-center space-y-6">

            {/* Heading */}
            <h1 className="text-4xl md:text-2xl font-semibold">
              Transform your mindset — one chapter at a time.
            </h1>

            {/* Centered Button */}
            <a
              href="/books"
              className="inline-block gold text-black px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition"
            >
              Explore
            </a>
          </div>
        </section>
        </main>
        </div>
    </>
  );
}
