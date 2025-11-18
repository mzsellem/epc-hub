export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-6">
        <div>
          <img src="/logo.png" alt="EPC Hub Logo" width={125} height={125} />
        </div>
        <div>
          <img src="/logo-title.png" alt="EPC Hub Text Logo" width={300} height={75} />
        </div>
        <ul className="flex space-x-8 text-2xl">
          <li><a href="/about">About</a></li>
          <li><a href="/books">Books</a></li>
          <li><a href="/coaching">Coaching</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </main>
    </div>
  );
}
