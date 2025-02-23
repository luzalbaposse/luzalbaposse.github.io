import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { VideoPost } from "../types/videos"

const videosDirectory = path.join(process.cwd(), "app/data/videos")

export async function getVideoPosts(): Promise<VideoPost[]> {
  const fileNames = fs.readdirSync(videosDirectory)

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "")
    const fullPath = path.join(videosDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      title: data.title,
      date: data.date,
      duration: data.duration,
      excerpt: data.excerpt,
      link: data.link,
      coverImage: data.coverImage,
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getVideoPost(slug: string): Promise<VideoPost> {
  const fullPath = path.join(videosDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    title: data.title,
    date: data.date,
    duration: data.duration,
    excerpt: data.excerpt,
    link: data.link,
    coverImage: data.coverImage
  }
}

