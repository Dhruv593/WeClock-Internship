// src/components/layout/Footer.jsx
export default function Footer({ className }) {
  return (
    <footer className={`${className} my-3 mr-3 rounded-lg shadow-lg bg-gray-800 text-white p-4`}>
      <div className="container mx-auto text-center">
        <p>© 2024 BlogSphere. All rights reserved.</p>
      </div>
    </footer>
  )
}
