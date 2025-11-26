import Header from '../Components/header/page';
import Footer from '../Components/footer/page';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="grow flex flex-col items-center justify-center px-6 py-24 max-w-4xl w-full text-center space-y-12">
        
        {/* Title */}
        <h1 className="text-4xl font-semibold header">
          Your story deserves our attention.
        </h1>

        {/* Description */}
        <p className="text-xl leading-relaxed paragraph">
          For speaking engagements, workshops, or other inquiries,<br />
          connect with us.
        </p>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-[#967000] rounded-full mx-auto"></div>

        {/* Email */}
        <a
          href="mailto:kenyada@executiveparentcompany.com"
          className="text-xl font-medium tracking-wide transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(221,173,17,0.55)]"
        >
          kenyada@executiveparentcompany.com
        </a>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
