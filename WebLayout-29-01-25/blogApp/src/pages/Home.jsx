// src/pages/Home.jsx
import BlogList from '../components/blog/BlogList'

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl mb-8">Latest Posts</h2>
      <BlogList />
    </div>
  )
}
