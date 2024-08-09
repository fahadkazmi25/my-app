import React from 'react'
import Link from 'next/link'

const Pricing = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-20 lg:py-24 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
      <Link href="/" prefetch={false}>
            <div className="text-xl font-xl text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">
              ← Go Back
            </div>
          </Link>
        <h1 className="text-3xl md:text-4xl font-bold">Pricing for Your Blog</h1>
        <p className="text-muted-foreground text-lg md:text-xl">Choose the plan that fits your needs and budget.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-black">
          <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
            <h2 className="text-2xl font-bold">Basic</h2>
          </div>
          <div className="p-6 space-y-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                1 blog post per week
              </li>
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                Basic analytics
              </li>
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                Custom domain
              </li>
            </ul>
            <div className="text-center">
              <div className="text-4xl font-bold">$9</div>
              <div className="text-muted-foreground text-sm">/month</div>
            <button className="bg-black text-white px-4 py-2 mt-6 rounded-full font-medium hover:bg-gray-700 transition duration-150 ease-in-out">Get Started</button>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-black">
          <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
            <h2 className="text-2xl font-bold">Pro</h2>
          </div>
          <div className="p-6 space-y-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                3 blog posts per week
              </li>
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                Advanced analytics
              </li>
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                Custom domain
              </li>
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                Email newsletter
              </li>
            </ul>
            <div className="text-center">
              <div className="text-4xl font-bold">$19</div>
              <div className="text-muted-foreground text-sm">/month</div>
            <button className="bg-black text-white px-4 py-2 mt-6 rounded-full font-medium hover:bg-gray-700 transition duration-150 ease-in-out">Get Started</button>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-black">
          <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
            <h2 className="text-2xl font-bold">Enterprise</h2>
          </div>
          <div className="p-6 space-y-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                Unlimited blog posts
              </li>
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                Advanced analytics and reporting
              </li>
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                Custom domain and branding
              </li>
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                Email newsletter and automation
              </li>
              <li>
                <CheckIcon className="w-5 h-5 mr-2 inline-block" />
                Dedicated account manager
              </li>
            </ul>
            <div className="text-center">
              <div className="text-4xl font-bold">$49</div>
              <div className="text-muted-foreground text-sm">/month</div>
            <button className="bg-black text-white px-4 py-2 mt-6 rounded-full font-medium hover:bg-gray-700 transition duration-150 ease-in-out">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }

export default Pricing