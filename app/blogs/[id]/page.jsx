import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firestore/firebaseConfig";
import Link from 'next/link';
import Image from 'next/image';


function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


export default async function BlogById({ params }) {
  const { id } = params;
  const blogDoc = doc(db, "blogs", id);
  const blogSnapshot = await getDoc(blogDoc);

  if (!blogSnapshot.exists()) {
    return <div>Blog not found</div>;
  }

  const blog = {
    id: blogSnapshot.id,
    ...blogSnapshot.data(),
  };
  // console.log(blog)
  return (
<div className="bg-background text-foreground">
      <div className="container mx-auto py-12 md:py-16 lg:py-20">
        <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
          <div className="mb-8 md:mb-12">
          <Link href="/blogs" prefetch={false}>
            <div className="text-xl font-xl text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">
              ← Go Back
            </div>
          </Link>
            <Image
              src={blog.imageUrl}
              alt="Featured Image"
              width="1200"
              height="480"
              className="rounded-lg object-cover aspect-[5/2]"
            />
            <div className="mt-6 space-y-2">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                {blog.title}
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                 
                  <span>{blog.author}</span>
                </div>
                <span>Published on August 9, 2024</span>
              </div>
            </div>
          </div>
          <p>{blog.description}</p>
          <div className="mt-8 flex justify-between">
            <div className="flex items-center space-x-4">
              {/* <img
                src="/placeholder.svg"
                alt="Author Avatar"
                width={40}
                height={40}
                className="rounded-full"
                style={{ aspectRatio: "40/40", objectFit: "cover" }}
              /> */}
              <div>
                <h3 className="font-medium">{blog.author}</h3>
                <p className="text-muted-foreground">{blog.authorProfession}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <CalendarIcon className="h-5 w-5" />
              <span>Published on August 9, 2024</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  
  )
}

// export default BlogById




