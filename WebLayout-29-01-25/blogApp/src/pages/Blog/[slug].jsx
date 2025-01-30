// src/pages/Blog/[slug].jsx
import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams()
  const post = {
    title: "Sample Blog Post",
    content: "Lorem ipsum dolor sit amet...",
    date: "2024-03-15",
    author: "John Doe"
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <div className="text-gray-500">
          <span>By {post.author}</span> • 
          <span> {new Date(post.date).toLocaleDateString()}</span>
        </div>
      </header>
      <div className="prose max-w-none">
        {post.content}
      </div>
    </article>
  )
}
