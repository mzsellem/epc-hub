import Header from '../Components/header/page';
import Footer from '../Components/footer/page';

export default function ContactPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen flex justify-center px-6 py-24 font-sans">
        <main className="max-w-2xl w-full text-center space-y-12">
          {/* Title */}
          <h1 className="text-4xl font-semibold header">
            Your story deserves our attention.
          </h1>

          {/* Description */}
          <p className="text-lg leading-relaxed paragraph">
            For speaking engagements, workshops, or other inquiries,<br />
            connect with us.
          </p>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-[#DDAD11] rounded-full"></div>
          </div>

          {/* Email */}
        <a
  href="mailto:kenyada@executiveparentcompany.com"
  className="
    text-xl font-medium tracking-wide transition 
    hover:text-white
    hover:drop-shadow-[0_0_12px_rgba(221,173,17,0.55)]
  "
>
  kenyada@executiveparentcompany.com
</a>


        </main>
      </div>

      <Footer />
    </>
  );
}
