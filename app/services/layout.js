import Link from 'next/link'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-64 min-h-screen bg-amber-200 p-4">
        <ul className="flex flex-col gap-4 text-white font-bold">
          <li>
            <Link href="/services/web-design" className="hover:text-black transition-all block">
              web design
            </Link>
          </li>
          <li>
            <Link href="/services/web-development" className="hover:text-black transition-all block">
              web development
            </Link>
          </li>
          <li>
            <Link href="/services/mern" className="hover:text-black transition-all block">
              mern stack
            </Link>
          </li>
          <li>
            <Link href="/services/grapic" className="hover:text-black transition-all block">
              grapic design
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6 bg-gray-50">
        {children}
      </div>

    </div>
  )
}

export default Layout;