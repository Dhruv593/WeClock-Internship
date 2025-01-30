// src/components/blog/BlogPost.jsx
export default function BlogPost({ post }) {
    return (
      <article className="mb-8">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600">{post.excerpt}</p>
        <div className="mt-2 text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString()}
        </div>
      </article>
    )
  }
  