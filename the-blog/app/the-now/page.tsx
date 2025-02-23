import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Youtube, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Oi, Open_Sans } from "next/font/google"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
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

  return (
    <div className={`min-h-screen bg-white ${openSans.className}`}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className={`text-[#734F4F] text-2xl font-bold ${oi.className}`}>Lu's</div>
        <nav className="space-x-6">
          <a href="/" className="text-[#734F4F] hover:opacity-80">
            The Blog.
          </a>
          <a href="/the-videos" className="text-[#734F4F] hover:opacity-80">
            The Videos.
          </a>
          <a href="/the-now" className="text-[#734F4F] hover:opacity-80 font-bold">
            The Now.
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        {/* Blog Title */}
        <h1 className={`text-[#734F4F] text-7xl md:text-[8.2rem] font-bold mb-12 mt-10 ${oi.className}`}>
          THE NOW.
        </h1>
        <p className={`text-[#734F4F] text-[1-rem] md:text-[1rem] font-bold mb-12 ${openSans.className} font-bold`}>
        (Updated: February 2025, from Switzerland.)
        </p>
        <h2 className={`text-[#734F4F] text-xl md:text-[2rem] font-bold ${oi.className}`}>
        Learning to Do Research
        </h2>
        <p className={`text-[#734F4F] text-[1-rem] md:text-[1rem] font-bold mb-12 ${openSans.className}`}>
        I’m working at <a href='https://defi.sucks'  className='underline'>defi.sucks</a>, figuring out how to do research. Ethereum is my subject. The goal: make it better.
        </p>
        <h2 className={`text-[#734F4F] text-xl md:text-[2rem] font-bold ${oi.className}`}>
        Studying        
        </h2>
        <p className={`text-[#734F4F] text-[1-rem] md:text-[1rem] font-bold mb-12 ${openSans.className}`}>
        <a  className='underline' href='https://www.utdt.edu/ver_contenido.php?id_contenido=19866&id_item_menu=31534'> Bs. in Digital Technology</a> at <a  className='underline' href='https://www.utdt.edu/'>UTDT</a>. On exchange at <a  className='underline' href='https://www.unisg.ch/de/'>University of St. Gallen</a>, studying in the Bs. in Computer Science.
        </p>
        <h2 className={`text-[#734F4F] text-xl md:text-[2rem] font-bold ${oi.className}`}>
        Writing & Filmmaking        
        </h2>
        <p className={`text-[#734F4F] text-[1-rem] md:text-[1rem] font-bold mb-12 ${openSans.className}`}>
        I enjoy documenting my thoughts. That’s why this blog exists. That’s why I record. Learning filmmaking in my free time—how to tell stories in frames instead of words.
        </p>
        <h2 className={`text-[#734F4F] text-xl md:text-[2rem] font-bold ${oi.className}`}>
        Place        
        </h2>
        <p className={`text-[#734F4F] text-[1-rem] md:text-[1rem] font-bold mb-12 ${openSans.className}`}>
        From Argentina. Living in Switzerland. I move, I watch, I write. I hike when I need space. I code for fun.
        </p>
        <h2 className={`text-[#734F4F] text-xl md:text-[2rem] font-bold ${oi.className}`}>
        Consuming        
        </h2>
        <p className={`text-[#734F4F] text-[1-rem] md:text-[1rem] font-bold mb-12 ${openSans.className}`}>
        📖 Brief Answers to Big Questions — Stephen Hawking <br></br>
🎥 The Gentlemen — Watching with my boyfriend<br></br>
🎵 Toe — on repeat       <br></br>
 </p>


 <h2 className={`text-[#734F4F] text-xl md:text-[2rem] font-bold ${oi.className}`}>
        Questioning        
        </h2>
        <p className={`text-[#734F4F] text-[1-rem] md:text-[1rem] font-bold mb-12 ${openSans.className}`}>
      Recently I read this <a className='underline' href='https://maraoz.com/what-do-you-optimize-for/'>blog post</a> from <a  className='underline' href='https://x.com/maraoz'>maraoz</a> and I can't stop asking myself: What are you optimizing for?
 </p>


 <h2 className={`text-[#734F4F] text-xl md:text-[2rem] font-bold ${oi.className}`}>
        Credits        
        </h2>
        <p className={`text-[#734F4F] text-[1-rem] md:text-[1rem] font-bold mb-12 ${openSans.className}`}>
I stoled this idea of 'the now page' from <a href='https://nownownow.com/about' className="underline">this page</a> and <a href='https://maraoz.com/now' className="underline">this page</a>.
 </p>


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
