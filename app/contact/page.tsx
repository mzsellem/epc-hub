import Header from '../Components/header/page';
import Footer from '../Components/footer/page';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="grow flex flex-col items-center justify-center px-6 py-24 max-w-4xl w-full text-center space-y-6">
        
        {/* Title */}
        <h1 className="text-2xl font-semibold header">
        Connect directly with the Founder for strategic advisory services, private workshops, and speaking engagements:
        </h1>

        {/* Email */}
        <a
          href="mailto:kenyada@executiveparentcompany.com"
          className="
          inline-block
          max-w-full
          px-4 sm:px-6
          py-2
          text-center
          break-all
          text-2xl
          font-extrabold
          "
        >
          kenyada@executiveparentcompany.com
        </a>


        {/* Divider */}
        <div className="w-24 h-0.5 bg-[#967000] rounded-full mx-auto"></div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
