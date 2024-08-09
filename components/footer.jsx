import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-600 py-8 text-gray-400">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h4 className="text-sm font-medium text-gray-300">Help</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300">About</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300">Legal</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300">Follow</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-gray-200" prefetch={false}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">&copy; 2024 fahad.kazmi. All rights reserved.</div>
        </div>
      </footer>
  )
}

export default Footer