'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Header from '../../Components/header/page'
import Footer from '../../Components/footer/page'
import { InlineWidget } from 'react-calendly'

const calendlyUrl =
  'https://calendly.com/kenyadameadows/30min' +
  '?background_color=1f1f1f' +
  '&text_color=e5e7eb' +
  '&primary_color=ddad11'

export default function Scheduling() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      ;(window as any).Calendly.initBadgeWidget({
        url: calendlyUrl,
        text: 'Book a session',
        color: '#181818',
        textColor: '#f9fafb',
        branding: false,
      })
    }
  }, [])

  return (
    <>
      <Header />

      {/* Calendly styles */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Calendly only */}
      <div className="w-full bg-[#1f1f1f]">
        <InlineWidget
          url={calendlyUrl}
          styles={{ height: '100vh' }}
        />
      </div>

      <Footer />
    </>
  )
}
