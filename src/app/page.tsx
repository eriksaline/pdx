import Link from "next/link";
import { blogPosts } from "@/data/posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-emerald-300 font-semibold text-sm uppercase tracking-widest mb-3">
              Welcome to the Rose City
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Discover Portland, Oregon
            </h2>
            <p className="text-lg text-emerald-100 leading-relaxed mb-8">
              From food carts to forest trails, bridges to bookstores — PDX Pulse is your
              guide to the weirdest, most wonderful city in the Pacific Northwest.
            </p>
            <a
              href="#posts"
              className="inline-block bg-white text-emerald-800 font-semibold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors"
            >
              Read the Blog
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-50 to-transparent" />
      </section>

      {/* Blog Posts */}
      <section id="posts" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-stone-800 mb-2">Latest Posts</h2>
        <p className="text-stone-500 mb-10">
          Stories, guides, and hidden gems from Portland, Oregon.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image */}
              {post.imagePlaceholder.endsWith(".svg") ? (
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <span className="text-6xl opacity-40">📸</span>
                </div>
              ) : (
                <img
                  src={post.imagePlaceholder}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-stone-400 mb-2">{formatDate(post.date)}</p>
                <h3 className="text-xl font-bold text-stone-800 mb-2">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="hover:text-emerald-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition-colors"
                >
                  Read more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-emerald-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">About PDX Pulse</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              PDX Pulse is a community-driven blog celebrating Portland, Oregon — a city
              known for its food, nature, creativity, and wonderfully weird culture. Whether
              you're planning a visit or a lifelong local, we've got stories and guides for
              you.
            </p>
            <p className="text-stone-500 text-sm">
              Images and content are updated regularly. Check back often for new posts about
              the Rose City.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
