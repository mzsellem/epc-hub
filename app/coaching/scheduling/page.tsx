'use client'

import Header from '../../Components/header/page'
import Footer from '../../Components/footer/page'
import Script from 'next/script'

export default function Scheduling() {
  return (
    <div className="font-sans">
      <Header />

      <main className="w-full bg-[#1f1f1f] min-h-screen">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/kenyadameadows?background_color=1f1f1f&text_color=e5e7eb&primary_color=ddad11"
          style={{ minWidth: '320px', height: '100vh' }}
        />
      </main>

      <Footer />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
