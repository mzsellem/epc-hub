import Header from '../../Components/header/page';
import Footer from '../../Components/footer/page';

export default function Scheduling() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center px-6 py-24 font-sans" style={{ backgroundColor: '#1f1f1f' }}>
        <main className="grow flex flex-col items-center justify-start px-6 py-12 w-full max-w-4xl space-y-6">

          {/* Title */}
          <h1 className="text-4xl font-semibold">
            Schedule Your Session
          </h1>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-0.5 bg-[#DDAD11] rounded-full"></div>
          </div>

          {/* Calendly Embed */}
          <div className="mt-10 w-full p-6 md:p-10 rounded-xl shadow-lg relative"
               style={{ 
                 background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, #1f1f1f 90%)',
                 border: '1px solid rgba(255,255,255,0.1)'
               }}>
            <iframe
              src="https://calendly.com/YOUR_CALENDLY_USERNAME?hide_event_type_details=1&hide_gdpr_banner=1"
              className="w-full h-[700px] md:h-[800px] rounded-lg"
            ></iframe>
          </div>

        </main>
      </div>

      <Footer />
    </>
  );
}
