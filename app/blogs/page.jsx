
import React from 'react'
import Link from 'next/link'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firestore/firebaseConfig"; // Adjust the path if needed


async function getData() {
  const blogCollectionRef = collection(db, "blogs");
  const blogSnapshot = await getDocs(blogCollectionRef);
  const blogs = blogSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return blogs;
}
export default async function Blogs() {
  const blogs= await getData()
  // console.log(blogs)
  return (
    <div className="py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
 <div className="flex flex-col gap-8 mb-8">
        <div className="space-y-2">
        <Link href="/" prefetch={false}>
            <div className="text-xl font-xl text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">
              ← Go Back
            </div>
          </Link>
          <h1 className="text-4xl font-bold">All Blogs</h1>
          <p className="text-muted-foreground">Explore our collection of insightful blog posts.</p>
        </div>
        </div>
 
 


 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {blogs?.map((blog, index) => (
    <div
      key={index}
      className="group relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
    >
      <Link href={`/blogs/${blog.id}`} prefetch={false}>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          width={400}
          height={225}
          className="h-56 w-full object-cover transition-opacity duration-300 group-hover/card:opacity-80"
          style={{ aspectRatio: "400/225", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center space-x-3">
            {/* <Avatar className="h-8 w-8 shrink-0">
              <AvatarImage src="/placeholder-user.jpg" alt="Author Avatar" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar> */}
            <div>
              <h3 className="text-sm font-medium">{blog?.author}</h3>
              <p className="text-xs text-gray-300">{blog?.authorProfession}</p>
            </div>
          </div>
          <h2 className="mt-2 text-lg font-semibold">{blog.title}</h2>
          <p className="mt-2 text-sm text-gray-300">
  {blog?.description?.trim().substring(0, 50)}{blog?.description?.length > 50 ? '...' : ''}
</p>
        </div>
      </Link>
    </div>
  ))}
</div>
    

    </div>

  
  )
}

