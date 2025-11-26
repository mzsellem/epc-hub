export default function Footer() {
  return (
    <footer className="w-full relative">
  <div className="relative bg-black">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-linear-to-t from- #757575 to-[#1f1f1f] pointer-events-none"></div>

    <div className="relative layout-width max-w-6xl flex flex-col items-center space-y-4 py-8 px-4 sm:px-6 md:px-6 text-[#d4af37]">
      {/* Text Row */}
      <div className="text-sm sm:text-base text-center">
        © 2025 Executive Parent Company. All rights reserved.
        {/* <a href="/privacy" className="hover:underline px-1">Privacy</a> | 
        <a href="/terms" className="hover:underline px-1">Terms</a> | 
        <a href="/disclaimer" className="hover:underline px-1">Disclaimer</a> */}
      </div>
    </div>
  </div>
</footer>

  );
}
