import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("**") && block.endsWith("**")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-stone-800 mt-8 mb-4">
          {block.replace(/\*\*/g, "")}
        </h2>
      );
    }
    if (block.startsWith("**")) {
      const titleMatch = block.match(/^\*\*(.+?)\*\*\s*/);
      if (titleMatch) {
        return (
          <div key={i} className="mt-8 mb-4">
            <h2 className="text-2xl font-bold text-stone-800 mb-3">{titleMatch[1]}</h2>
            <div className="text-stone-600 leading-relaxed whitespace-pre-line">
              {block.slice(titleMatch[0].length).replace(/\*\*/g, "")}
            </div>
          </div>
        );
      }
    }
    return (
      <p key={i} className="text-stone-600 leading-relaxed mb-4 whitespace-pre-line">
        {block.replace(/\*\*/g, "")}
      </p>
    );
  });
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — PDX Pulse`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="text-emerald-700 font-medium text-sm hover:text-emerald-800 transition-colors mb-6 inline-block"
      >
        &larr; Back to all posts
      </Link>

      {/* Image */}
      {post.imagePlaceholder.endsWith(".svg") ? (
        <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl mb-8 flex items-center justify-center">
          <span className="text-7xl opacity-40">📸</span>
        </div>
      ) : (
        <img
          src={post.imagePlaceholder}
          alt={post.title}
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
        />
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-stone-400 mb-3">{formatDate(post.date)}</p>

      <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6 leading-tight">
        {post.title}
      </h1>

      <p className="text-lg text-stone-500 leading-relaxed mb-8 italic border-l-4 border-emerald-400 pl-4">
        {post.excerpt}
      </p>

      <hr className="border-stone-200 mb-8" />

      <div className="prose-content">{renderContent(post.content)}</div>

      <hr className="border-stone-200 mt-12 mb-6" />

      <div className="bg-emerald-50 rounded-xl p-6">
        <p className="text-stone-600 text-sm">
          Enjoyed this post? Follow PDX Pulse for more Portland stories, guides, and
          hidden gems. New content added regularly.
        </p>
      </div>
    </article>
  );
}
