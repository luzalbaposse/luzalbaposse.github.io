import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Youtube, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Oi, Open_Sans } from "next/font/google"
import { getVideoPosts } from "@/app/lib/get-videos"
import NewsletterSignup from "@/app/components/NewsletterSignup"

const oi = Oi({
  weight: "400",
  subsets: ["latin"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
})

export default async function Page() {
  const posts = await getVideoPosts()

  return (
    <div className={`min-h-screen bg-white ${openSans.className}`}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className={`text-[#734F4F] text-2xl font-bold ${oi.className}`}>Lu's</div>
        <nav className="space-x-6">
          <a href="/" className="text-[#734F4F] hover:opacity-80">
            The Vlog.
          </a>
          <a href="/the-videos" className="text-[#734F4F] hover:opacity-80 font-bold">
            The Videos.
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        {/* Blog Title */}
        <h1 className={`text-[#734F4F] text-7xl md:text-[8.2rem] font-bold mb-12 mt-10 ${oi.className}`}>
          THE VIDEOS.
        </h1>


        {/* Blog Grid */}
        <div className="flex gap-8 mb-12">
          {posts.map((post) => (
            <Link href={`${post.link}`} key={post.link}>
              <article className="group cursor-pointer border-2 border-[#734F4F] p-6 rounded-lg">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#734F4F] text-sm">{post.date}</span>
                  </div>
                  {post.coverImage && (
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={post.coverImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>
                <h3 className={`text-[#734F4F] text-2xl font-bold mb-4 ${oi.className}`}>{post.title}</h3>
                <p className="text-[#734F4F]/80 mb-4">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
          <NewsletterSignup />

        {/* Footer */}
        <footer className="bg-[#734F4F] py-8 px-4">
          <div className="w-full px-4 flex justify-between items-center">
            <div className={`text-white text-2xl font-bold ${oi.className}`}>Lu's</div>
            <div className="text-white text-sm">© Made by Lu</div>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-white hover:opacity-80 cursor-pointer" />
              <Twitter className="w-5 h-5 text-white hover:opacity-80 cursor-pointer" />
              <Youtube className="w-5 h-5 text-white hover:opacity-80 cursor-pointer" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

