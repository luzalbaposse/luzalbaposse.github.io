import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Youtube, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Oi, Open_Sans } from "next/font/google"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import NewsletterSignup from "./components/NewsletterSignup"

const oi = Oi({
  weight: "400",
  subsets: ["latin"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
})

async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'app/data/blogs')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      duration: data.duration,
      category: data.category,
      excerpt: data.excerpt,
      coverImage: data.coverImage
    }
  })

  return posts
}

export default async function Page() {
  const posts = await getBlogPosts()

  return (
    <div className={`min-h-screen bg-white ${openSans.className}`}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className={`text-[#734F4F] text-2xl font-bold ${oi.className}`}>Lu's</div>
        <nav className="space-x-6">
          <a href="/" className="text-[#734F4F] hover:opacity-80 font-bold">
            The Vlog.
          </a>
          <a href="/the-videos" className="text-[#734F4F] hover:opacity-80">
            The Videos.
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        {/* Blog Title */}
        <h1 className={`text-[#734F4F] text-7xl md:text-[8.2rem] font-bold mb-12 mt-10 ${oi.className}`}>
          THE VLOG.
        </h1>
        <p className={`text-[#734F4F] text-[1-rem] md:text-[1rem] font-bold mb-12 ${openSans.className}`}>
        Hey! I'm Luz 😁 This is my blog, just brain dumps of things I'm interested in. I sometimes document stuff in videos too, so if you want to see me embarrassed, click on The Videos section. Cheers!
        <br></br>
        <br></br>
        Pdata: If you actually like what I write, you can always subscribe to the newsletter. 
        </p>
{/* 
       
        <div className="mb-12">
          <h2 className={`text-[#734F4F] mb-4 font-bold ${oi.className}`}>CATEGORIES</h2>
          <div className="flex gap-2 flex-wrap">
            {["ALL", "TECH", "REFLEXION", "TRAVELLING"].map((category) => (
              <button
                key={category}
                className="px-4 py-1 rounded-full border border-[#734F4F] text-[#734F4F] text-sm hover:bg-[#734F4F] hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div> 
  */}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Link href={`/the-vlog/${post.slug}`} key={post.slug}>
              <article className="group cursor-pointer border-2 border-[#734F4F] p-6 rounded-lg">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#734F4F] text-sm">{post.date}</span>
                    <span className="text-[#734F4F] text-sm border border-[#734F4F] px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
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
                <div className="flex items-center gap-4 text-sm text-[#734F4F]">
                  <span>Duration: {post.duration}</span>
                </div>
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
