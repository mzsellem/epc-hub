'use client'

import Header from '../../Components/header/page'
import Footer from '../../Components/footer/page'
import { InlineWidget } from 'react-calendly'

const calendlyUrl =
  'https://calendly.com/kenyadameadows' +
  '?background_color=1f1f1f' +
  '&text_color=e5e7eb' +
  '&primary_color=ddad11'

export default function Scheduling() {
  return (
    <div className='font-sans'>
      <Header />

      <main className="w-full bg-[#1f1f1f]">
        <InlineWidget
          url={calendlyUrl}
          styles={{ height: '100vh' }}
          pageSettings={{
            backgroundColor: '1f1f1f',
            textColor: 'e5e7eb',
            primaryColor: 'ddad11',
          }}
        />
      </main>

      <Footer />
    </div>
  )
}
