import { useCallback, useMemo, useRef, useState } from "react";
import { Button } from "@/components/common/Button";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { BookGrid } from "@/components/books/BookGrid";
import { getRecommendations, getBooks } from "@/services/api";
import { handleApiError } from "@/utils/errorHandling";

type Recommendation = {
  title: string;
  author: string;
  reason: string;
  confidence?: number; // 0..1 (opsiyonel)
};

type Book = {
  id: string | number;
  title: string;
  author: string;
  genre?: string;
  coverImage?: string | null;
};

export function Recommendations() {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Cache: "title||author" -> Book
  const bookCacheRef = useRef<Map<string, Book>>(new Map());
  const [cacheVersion, setCacheVersion] = useState(0);

  // Race condition fix
  const activeRequestIdRef = useRef(0);

  const exampleQueries = [
    "I love mystery novels with strong female protagonists",
    "Looking for science fiction books about space exploration",
    "Recommend me some feel-good romance novels",
    "I want to read about personal development and productivity",
  ];

  const safeCover = (cover?: string | null) => {
    if (!cover || !String(cover).trim()) return "/book-covers/no-cover.jpg";
    const c = String(cover).trim();

    if (c.includes("via.placeholder.com")) return "/book-covers/no-cover.jpg";
    if (c.startsWith("http://") || c.startsWith("https://")) return c;
    if (c.startsWith("/")) return c;

    return `/book-covers/${c}`;
  };

  const norm = (s: string) =>
    (s ?? "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[“”‘’]/g, "'");

  const makeKey = (title: string, author: string) => `${norm(title)}||${norm(author)}`;

  const cachedBooks = useMemo(() => {
    void cacheVersion;
    return {
      getByRec(rec: Recommendation) {
        return bookCacheRef.current.get(makeKey(rec.title, rec.author));
      },
      listFromRecommendations(recs: Recommendation[]) {
        const seen = new Set<string>();
        const out: Book[] = [];
        for (const r of recs) {
          const key = makeKey(r.title, r.author);
          if (seen.has(key)) continue;
          seen.add(key);
          const b = bookCacheRef.current.get(key);
          if (b) out.push(b);
        }
        return out;
      },
    };
  }, [cacheVersion]);

  const handleGetRecommendations = useCallback(async () => {
    const q = query.trim();
    if (!q) {
      alert("Please enter a query");
      return;
    }

    const requestId = ++activeRequestIdRef.current;
    setIsLoading(true);

    try {
      // 1) AI recommendations (Lambda)
      const recs = (await getRecommendations(q)) as Recommendation[];

      if (requestId !== activeRequestIdRef.current) return;
      setRecommendations(recs);

      // 2) Books list (API) - sadece 1 kere çekip eşleştireceğiz
      // (Kütüphanende çok kitap yoksa bu en pratik ve stabil çözüm)
      const books = (await getBooks()) as Book[];

      if (requestId !== activeRequestIdRef.current) return;

      // 3) Cache’i doldur
      let changed = false;
      for (const b of books) {
        const key = makeKey(b.title, b.author);
        if (!bookCacheRef.current.has(key)) {
          bookCacheRef.current.set(key, b);
          changed = true;
        }
      }

      // 4) UI re-render
      if (changed) setCacheVersion((v) => v + 1);
      else setCacheVersion((v) => v + 1);
    } catch (error) {
      if (requestId === activeRequestIdRef.current) {
        handleApiError(error);
      }
    } finally {
      if (requestId === activeRequestIdRef.current) {
        setIsLoading(false);
      }
    }
  }, [query]);

  const recommendedBooks = useMemo(() => {
    return cachedBooks.listFromRecommendations(recommendations);
  }, [recommendations, cachedBooks]);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5.0 5.0 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="gradient-text">AI-Powered Recommendations</span>
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Tell us what you're looking for, and our AI will suggest the perfect books for you
          </p>
        </div>

        {/* Query box */}
        <div className="glass-effect rounded-3xl shadow-2xl border border-white/20 p-8 mb-8">
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            What kind of book are you looking for?
          </label>

          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe your ideal book... (e.g., 'I want a thrilling mystery set in Victorian London')"
            className="input-modern min-h-[140px] resize-none"
          />

          <div className="mt-6">
            <p className="text-sm text-slate-700 font-semibold mb-3">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {exampleQueries.map((example) => (
                <button
                  key={example}
                  onClick={() => setQuery(example)}
                  className="text-sm bg-gradient-to-r from-violet-50 to-indigo-50 hover:from-violet-100 hover:to-indigo-100 text-slate-800 px-4 py-2 rounded-xl transition-all border border-violet-200 hover:border-violet-300 font-medium hover:shadow-md"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetRecommendations}
              disabled={isLoading}
              className="w-full"
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {isLoading ? "Getting Recommendations..." : "Get Recommendations"}
            </Button>
          </div>
        </div>

        {isLoading && (
          <div className="flex justify-center py-12">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {!isLoading && recommendations.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">
              <span className="gradient-text">Recommended for You</span>
            </h2>

            {/* Recommendation cards: kitap bulunmasa bile kartı göster */}
            <div className="space-y-6 mb-12">
              {recommendations.map((rec, idx) => {
                const book = cachedBooks.getByRec(rec);

                return (
                  <div
                    key={`${rec.title}-${rec.author}-${idx}`}
                    className="glass-effect rounded-2xl shadow-xl border border-white/20 p-6 hover-glow transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <img
                        src={safeCover(book?.coverImage ?? null)}
                        alt={book?.title ?? rec.title}
                        className="w-28 h-40 object-cover rounded-xl shadow-lg"
                        onError={(e) => {
                          e.currentTarget.src = "/book-covers/no-cover.jpg";
                        }}
                      />

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {book?.title ?? rec.title}
                        </h3>
                        <p className="text-slate-600 mb-3 font-medium">
                          by {book?.author ?? rec.author}
                        </p>

                        <p className="text-slate-700 mb-4 leading-relaxed">{rec.reason}</p>

                        <div className="flex flex-wrap items-center gap-3">
                          <div className="bg-gradient-to-r from-violet-100 to-indigo-100 px-3 py-1.5 rounded-xl border border-violet-200">
                            <span className="text-sm text-violet-700 font-semibold">
                              Confidence: {Math.round(((rec.confidence ?? 0.75) as number) * 100)}%
                            </span>
                          </div>

                          {!!book?.genre && <span className="badge-gradient px-3 py-1.5 text-sm">{book.genre}</span>}

                          {!book && (
                            <span className="px-3 py-1.5 text-sm rounded-xl border border-slate-200 bg-white/60 text-slate-700">
                              Not found in library list (showing AI suggestion)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Grid sadece gerçekten eşleşen kitapları gösterir */}
            <BookGrid books={recommendedBooks} />
          </div>
        )}

        {!isLoading && recommendations.length === 0 && query && (
          <div className="text-center py-12">
            <p className="text-slate-700 text-lg">
              No recommendations yet. Try describing what you're looking for!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}