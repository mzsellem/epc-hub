import Header from '../Components/header/page';
import Footer from '../Components/footer/page';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans bg-[#1f1f1f] text-white">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="grow flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 max-w-4xl w-full text-center space-y-6">
        
        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-semibold header">
          Connect directly with the Founder for strategic advisory services, private workshops, and speaking engagements:
        </h1>

        {/* Email */}
        <a
          href="mailto:kenyada@executiveparentcompany.com"
          className="
            inline-block
            max-w-full
            px-4
            py-3
            text-center
            break-all
            text-md sm:text-xl
            font-extrabold
            hover:text-[#DDAD11]
            transition
          "
        >
          kenyada@executiveparentcompany.com
        </a>

        {/* Divider */}
        <div className="w-24 sm:w-32 h-0.5 bg-[#967000] rounded-full mx-auto"></div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
