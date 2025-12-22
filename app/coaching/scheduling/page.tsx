'use client'

import Header from '../../Components/header/page'
import Footer from '../../Components/footer/page'
import { InlineWidget } from 'react-calendly'

// ✅ Use the InlineWidget URL (not root Calendly page)
const calendlyUrl =
  'https://calendly.com/kenyadameadows?embed_domain=yourdomain.com&embed_type=Inline' +
  '&background_color=1f1f1f&text_color=e5e7eb&primary_color=ddad11'

export default function Scheduling() {
  return (
    <div className="font-sans">
      <Header />

      <main className="w-full bg-[#1f1f1f] min-h-screen">
        <InlineWidget
          url={calendlyUrl}
          styles={{ height: '100vh' }}
        />
      </main>

      <Footer />
    </div>
  )
}
