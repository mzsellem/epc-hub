export default function Footer() {
  return (
    <footer className="w-full relative">
  <div className="relative bg-black">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-linear-to-t from- #757575 to-[#1f1f1f] pointer-events-none"></div>

    <div className="relative layout-width max-w-6xl flex flex-col items-center space-y-4 py-8 px-4 sm:px-6 md:px-6 text-[#d4af37]">
      {/* Social Icons */}
      <div className="flex space-x-6">
          {/* Social Icons Row */}
        <div className="flex space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#d4af37"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0V8zm7.5 0h4.78v2.16h.07c.67-1.27 2.3-2.61 4.73-2.61 5.05 0 5.99 3.33 5.99 7.66V24h-5v-7.94c0-1.89-.03-4.33-2.64-4.33-2.64 0-3.05 2.07-3.05 4.21V24h-5V8z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#d4af37"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.963.24 2.417.403a4.92 4.92 0 0 1 1.77 1.03 4.92 4.92 0 0 1 1.03 1.77c.164.454.35 1.246.403 2.416.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.963-.403 2.417a4.92 4.92 0 0 1-1.03 1.77 4.92 4.92 0 0 1-1.77 1.03c-.454.164-1.247.35-2.417.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.963-.24-2.417-.403a4.92 4.92 0 0 1-1.77-1.03 4.92 4.92 0 0 1-1.03-1.77c-.164-.454-.35-1.247-.403-2.417C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.054-1.17.24-1.963.403-2.417a4.92 4.92 0 0 1 1.03-1.77 4.92 4.92 0 0 1 1.77-1.03c.454-.164 1.247-.35 2.417-.403C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.737 0 8.332.012 7.052.07 5.773.127 4.782.308 4.03.545a7.08 7.08 0 0 0-2.565 1.676A7.08 7.08 0 0 0 .545 4.03c-.237.752-.418 1.743-.475 3.022C0 8.332 0 8.737 0 12s.012 3.668.07 4.948c.057 1.279.238 2.27.475 3.022a7.08 7.08 0 0 0 1.676 2.565 7.08 7.08 0 0 0 2.565 1.676c.752.237 1.743.418 3.022.475C8.332 24 8.737 24 12 24s3.668-.012 4.948-.07c1.279-.057 2.27-.238 3.022-.475a7.08 7.08 0 0 0 2.565-1.676 7.08 7.08 0 0 0 1.676-2.565c.237-.752.418-1.743.475-3.022C24 15.668 24 15.263 24 12s-.012-3.668-.07-4.948c-.057-1.279-.238-2.27-.475-3.022a7.08 7.08 0 0 0-1.676-2.565 7.08 7.08 0 0 0-2.565-1.676c-.752-.237-1.743-.418-3.022-.475C15.668 0 15.263 0 12 0z"/>
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#d4af37"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M23.498 6.186a2.98 2.98 0 0 0-2.102-2.104C19.537 3.5 12 3.5 12 3.5s-7.537 0-9.396.582a2.98 2.98 0 0 0-2.102 2.104C0 8.026 0 12 0 12s0 3.974.502 5.814a2.98 2.98 0 0 0 2.102 2.104c1.859.583 9.396.583 9.396.583s7.537 0 9.396-.583a2.98 2.98 0 0 0 2.102-2.104C24 15.974 24 12 24 12s0-3.974-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Text Row */}
      <div className="text-sm sm:text-base text-center">
        © 2025 Executive Parent Company | 
        <a href="/privacy" className="hover:underline px-1">Privacy</a> | 
        <a href="/terms" className="hover:underline px-1">Terms</a> | 
        <a href="/disclaimer" className="hover:underline px-1">Disclaimer</a>
      </div>
    </div>
  </div>
</footer>

  );
}
