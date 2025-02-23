import { getBlogPost } from "@/app/lib/get-blogs"
import BlogLayout from "@/app/components/blog-layout"
import { compileMDX } from "next-mdx-remote/rsc"
import dynamic from 'next/dynamic'

const Mermaid = dynamic(
  () => import('@/app/components/mermaid'),
  { ssr: false }
)

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPost(params.slug)
  
  const { content } = await compileMDX({
    source: post.content,
    components: {
      code: (props) => (
        props.className === 'language-mermaid' 
          ? <Mermaid chart={props.children} />
          : <code {...props} />
      )
    }
  })

  return <BlogLayout post={{ ...post, content }} />
}