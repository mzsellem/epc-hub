export default function About() {
  return (
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

      </main>
    </div>
  );
}
