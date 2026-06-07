import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <p className="text-7xl mb-6">🌹</p>
      <h1 className="text-3xl font-bold text-stone-800 mb-4">Page Not Found</h1>
      <p className="text-stone-500 mb-8">
        Looks like this page wandered off into the Willamette. Head back to the blog to
        find what you're looking for.
      </p>
      <Link
        href="/"
        className="inline-block bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-800 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
