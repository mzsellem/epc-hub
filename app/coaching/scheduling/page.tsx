import Header from '../../Components/header/page';
import Footer from '../../Components/footer/page';

export default function Scheduling() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center px-6 py-24 font-sans" style={{ backgroundColor: '#1f1f1f' }}>
        <main className="max-w-4xl w-full text-center space-y-12 text-white">
          {/* Calendly Embed */}
            <iframe
              src="https://calendly.com/YOUR_CALENDLY_USERNAME"
              className="w-full h-[700px] md:h-[800px] rounded-xl shadow-lg border border-white/20"
            ></iframe>
        </main>
      </div>
      <Footer />
    </>
  );
}
