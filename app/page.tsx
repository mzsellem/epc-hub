export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-6">
        <div>
          <img src="/logo.png" alt="EPC Hub Logo" width={125} height={125} />
        </div>
        <div>
          <img src="/logo-title.png" alt="EPC Hub Text Logo" width={400} height={100} />
        </div>
        <ul className="flex space-x-8 text-xl home-nav font-light">
          <li><a href="/about" className="hover:underline underline-offset-4 decoration-1">About</a></li>
          <li><a href="/books" className="hover:underline underline-offset-4 decoration-1">Books</a></li>
          <li><a href="/coaching" className="hover:underline underline-offset-4 decoration-1">Coaching</a></li>
          <li><a href="/contact" className="hover:underline underline-offset-4 decoration-1">Contact</a></li>
        </ul>
      </main>
    </div>
  );
}
