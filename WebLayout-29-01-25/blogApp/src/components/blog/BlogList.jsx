// src/components/blog/BlogList.jsx
export default function BlogList() {
    const posts = [
      { id: 1, title: 'First Post', excerpt: 'Lorem ipsum...' },
      { id: 2, title: 'Second Post', excerpt: 'Dolor sit amet...' }
    ]
  
    return (
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    )
  }
  