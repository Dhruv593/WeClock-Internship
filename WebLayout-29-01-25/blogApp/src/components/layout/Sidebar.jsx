// src/components/layout/Sidebar.jsx
export default function Sidebar({ className }) {
  return (
    <aside className={`${className} overflow-y-auto mx-3 mb-3 rounded-lg shadow-lg p-4 bg-indigo-500`}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Categories</h3>
        <ul className="space-y-2 text-white">
          {['Technology', 'Travel', 'Food'].map((cat) => (
            <li key={cat} className="hover:bg-indigo-700 p-2 rounded">
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
