export type BlogPost = {
  slug: string
  title: string
  date: string
  duration: string
  category: string
  excerpt: string
  content: string | JSX.Element
  coverImage?: string
  mermaid?: boolean
  math?: boolean
}

