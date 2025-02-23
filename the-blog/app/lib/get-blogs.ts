import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { BlogPost } from "../types/blog"

const blogsDirectory = path.join(process.cwd(), "app/data/blogs")

export async function getBlogPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(blogsDirectory)

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "")
    const fullPath = path.join(blogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      duration: data.duration,
      category: data.category,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      content,
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const fullPath = path.join(blogsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    duration: data.duration,
    category: data.category,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    content,
  }
}

