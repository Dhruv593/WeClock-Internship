// src/components/ui/Card.jsx
export default function Card({ children }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        {children}
      </div>
    )
  }
  