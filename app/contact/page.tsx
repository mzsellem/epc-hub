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
        For speaking engagements, workshops, or other inquiries,<br />
          connect with us.
        </h1>

        {/* Description */}
        {/* <p className="text-xl leading-relaxed paragraph">
          For speaking engagements, workshops, or other inquiries,<br />
          connect with us.
        </p> */}

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
