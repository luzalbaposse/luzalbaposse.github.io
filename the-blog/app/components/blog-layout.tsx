import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Oi, Open_Sans } from "next/font/google"
import type { BlogPost } from "../types/blog"

const oi = Oi({
  weight: "400",
  subsets: ["latin"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
})

// Add MDX components configuration
const components = {
  // Add any custom components here if needed
  h1: (props: any) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold my-3" {...props} />,
  p: (props: any) => <p className="my-2" {...props} />,
}

export default function BlogLayout({ post }: { post: BlogPost }) {
  return (
    <div className={`min-h-screen bg-white ${openSans.className}`}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className={`text-[#734F4F] text-2xl font-bold ${oi.className}`}>Lu&apos;s</div>
        <nav className="space-x-6">
          <a href="/" className="text-[#734F4F] hover:opacity-80">
            The Blog.
          </a>
          <a href="/the-videos" className="text-[#734F4F] hover:opacity-80">
            The Videos.
          </a>
          <a href="/the-now" className="text-[#734F4F] hover:opacity-80">
            The Now.
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className={`text-[#734F4F] text-6xl md:text-7xl font-bold mb-6 ${oi.className}`}>{post.title}</h1>
            <p className="text-[#734F4F]/80 text-lg mb-8">{post.excerpt}</p>
          </div>
          {post.coverImage && (
            <div className="mb-12">
              <Image
                src={post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full overflow-hidden border-2 border-[#734F4F] rounded-lg"
                unoptimized={true}
              />
            </div>
          )}

          <div className="flex items-center gap-4 text-sm text-[#734F4F] mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.duration}</span>
            <span className="ml-auto border border-[#734F4F] px-3 py-1 rounded-full">{post.category}</span>
          </div>

          <div className="prose prose-brown max-w-none">
            {post.content}
          </div>
        </article>

        {/* Footer */}
        <footer className="bg-[#734F4F] py-8 px-4 mt-12">
          <div className="w-full px-4 flex justify-between items-center">
            <div className={`text-white text-2xl font-bold ${oi.className}`}>Lu&apos;s</div>
            <div className="text-white text-sm">© Made by Lu</div>
          </div>
        </footer>
      </main>
    </div>
  )
}
