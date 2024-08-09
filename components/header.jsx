import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-600 py-4 shadow-lg">
     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" prefetch={false}>
            {/* <Sun className="h-8 w-8 text-yellow-300" /> */}
            <span className="text-2xl font-bold text-white">fahad.kazmi</span>
          </Link>

          <nav className="hidden space-x-4 md:flex">
        <Link href="/blogs" className="text-sm font-medium text-gray-200 hover:text-white transition duration-150 ease-in-out" prefetch={false}>
          Blogs
        </Link>
        <Link href="/about-us" className="text-sm font-medium text-gray-200 hover:text-white transition duration-150 ease-in-out" prefetch={false}>
          About Us
        </Link>
        <Link href="/top-readers" className="text-sm font-medium text-gray-200 hover:text-white transition duration-150 ease-in-out" prefetch={false}>
          Top Readers
        </Link>
        <Link href="/pricing" className="text-sm font-medium text-gray-200 hover:text-white transition duration-150 ease-in-out" prefetch={false}>
          Pricing
        </Link>
      </nav>
           <div className="hidden md:block">
            <Link href="/blogs" className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-150 ease-in-out">
              Get started
            </Link>
          </div>
          </div>
          </div>
        
      </header>
  )
}

export default Header