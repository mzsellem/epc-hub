import Header from "../Components/header/page";
import Footer from "../Components/footer/page";

const books = [
  {
    title: "The New Alpha",
    image: "/the-passenger-seat.png",
    alt: "The P.A.S.S.E.N.G.E.R Seat book cover",
    description: [
      `Institutions fail in patterns that have become well documented
      across time and geography. These failures are typically attributable
      to only one thing: the suppression of workplace integrity.

      Personal costs also accompany institutional ones, often due to wavering
      commitment or fear of challenging the powers that be—whether or not
      they ought to be challenged.

      This risk of suppression is a pervasive and persistent feature of
      professional life, and a serious framework is required to properly
      evaluate and address it, as well as the downstream consequences
      when risk becomes loss.`,

      `The P.A.S.S.E.N.G.E.R. Seat—a nine-discipline framework—does
      precisely that by providing critical insights and practical tools for:

      • Individual Contributors
      • HR and Training Professionals
      • Senior Management
      • Governing Boards and Oversight Bodies

      A serious study of followership is long overdue. This book was
      written to establish a much-needed framework that grounds,
      strengthens, and protects the contributions of individuals
      and institutions alike.`,
    ],
    buyLink: "https://a.co/d/08rFTzEK",
  },
  {
    title: "The New Alpha",
    image: "/the-new-alpha.png",
    alt: "The New Alpha book cover",
    description: [
      "",
    ],
    buyLink: "https://a.co/d/1SEiErQ",
  },
];

const featuredBook = books[0];
const additionalBooks = books.slice(1);

function BookCard({
  image,
  alt,
  description,
  buyLink,
  showDescription = true,
}: {
  image: string;
  alt: string;
  description?: string[];
  buyLink: string;
  showDescription?: boolean;
}) {
  return (
    <div className="flex flex-col items-center space-y-8 backdrop-blur-sm p-6 shadow-2xl relative rounded-xl">
      <img
        src={image}
        alt={alt}
        className="w-64 rounded-lg shadow-xl"
        style={{
          background: "#1F1F1F",
          boxShadow: "0 0 80px 30px rgba(63,125,99,0.25)",
        }}
      />

      {showDescription &&
        description?.map((paragraph, index) => (
          <p
            key={index}
            className="text-lg leading-relaxed paragraph max-w-xl mx-auto whitespace-pre-line"
          >
            {paragraph}
          </p>
        ))}

      <a
        href={buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 text-lg font-medium rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:bg-[#DDAD11] hover:text-black transition-all duration-300 ease-out"
      >
        Buy
      </a>
    </div>
  );
}

export default function BooksPage() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans">
      <Header />

      <main className="grow flex flex-col items-center justify-start px-6 py-12 w-full max-w-4xl space-y-24">
        <section
  className="text-left relative w-full"
  style={{ backgroundColor: "#1F1F1F" }}
>
  <h1 className="text-4xl font-semibold header mb-4 text-white text-center">
    Featuring
  </h1>

  <div className="w-24 sm:w-32 md:w-40 h-0.5 bg-[#DDAD11] mx-auto rounded-full mb-12" />

  {/* Featured Book */}
  <BookCard
  image={featuredBook.image}
  alt={featuredBook.alt}
  description={featuredBook.description}
  buyLink={featuredBook.buyLink}
/>

  {/* Additional Books */}
 {additionalBooks.map((book) => (
  <BookCard
    key={book.title}
    image={book.image}
    alt={book.alt}
    buyLink={book.buyLink}
    showDescription={false}
  />
))}
</section>
      </main>

      <Footer />
    </div>
  );
}