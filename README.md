# PDX Pulse — Portland Blog

A Next.js static blog site for Portland, Oregon content, deployed to GitHub Pages.

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production (outputs to /out)
npm run build
\`\`\`

## Deployment (GitHub Pages)

1. Create a GitHub repository and push this project.
2. Go to **Settings → Pages** in the repo.
3. Under **Source**, select **GitHub Actions**.
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` will build and deploy automatically.

## Adding Blog Posts

Posts are stored as structured data in `src/data/posts.ts`. Each post has:

- `slug` — URL path segment
- `title`, `date`, `excerpt`
- `content` — Markdown-style text (uses `**bold**` headers)
- `imagePlaceholder` — path under `/images/` (swap in real images when ready)
- `tags` — for categorization

## Adding Images

Place images in `public/images/` and update the `imagePlaceholder` field in `src/data/posts.ts`.
The `/images` directory is the hook for the future automated image pipeline.

## Tech Stack

- Next.js 16 (static export)
- TypeScript
- Tailwind CSS
- GitHub Actions for CI/CD
