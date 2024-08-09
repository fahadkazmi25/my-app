"use client"

import React from 'react'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <div className="py-4 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <section className="mb-12 md:mb-16 lg:mb-20">
      <Link href="/" prefetch={false}>
            <div className="text-xl font-xl text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">
              ← Go Back
            </div>
          </Link>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">About Our Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
          <div>
            <p className="mb-4 text-muted-foreground">
              Welcome to our blog, where we share our passion for all things related to technology. Our goal is to
              provide our readers with insightful and informative content that helps them to educate.
            </p>
            <p className="text-muted-foreground">
              Behind the scenes, our team of dedicated writers and researchers work tirelessly to bring you the latest
              news, trends, and expert advice on science. We're driven by a love for the subject matter and a
              desire to empower our readers to wonder.
            </p>
          </div>
          <div>
            <p className="mb-4 text-muted-foreground">
              At the heart of our blog is Fahad Kazmi, a software engineer. With years of experience in the
              field, he has a deep understanding of the industry and a keen eye for spotting the latest
              developments and insights.
            </p>
            <p className="text-muted-foreground">
              Fahad Kazmi is passionate about sharing his knowledge and expertise with our readers, and
              he is always excited to engage with the community and hear your thoughts and feedback.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">What You'll Find on Our Blog</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <div>
            <h3 className="mb-2 text-xl font-bold">Latest News</h3>
            <p className="text-muted-foreground">
              Stay up-to-date with the latest news and trends in the tech industry.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Expert Advice</h3>
            <p className="text-muted-foreground">
              Get expert insights and practical tips to help you to transform.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Industry Insights</h3>
            <p className="text-muted-foreground">
              Dive deep into the latest developments and trends shaping the science landscape.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Product Reviews</h3>
            <p className="text-muted-foreground">
              Discover the best tools, services, and resources to help you to grow.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Case Studies</h3>
            <p className="text-muted-foreground">
              Learn from real-world examples and success stories in the fiction industry.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Community Engagement</h3>
            <p className="text-muted-foreground">
              Connect with like-minded individuals and share your experiences and insights.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}

export default AboutUs