import type { NextConfig } from 'next'
import path from 'path'

const calendlyCSP = `
  default-src 'self';
  script-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' https:;
  frame-src https://calendly.com https://*.calendly.com https://assets.calendly.com;
  connect-src https://calendly.com https://*.calendly.com https://assets.calendly.com;
`

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },

  async headers() {
    return [
      {
        source: '/scheduling',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: calendlyCSP.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Permissions-Policy',
            // Allow payments for Stripe + Calendly
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
