"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Loader from '@/components/loader';

export default function TopReaders() {
    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/top-readers')
            .then((res) => res.json())
            .then((data) => {
                console.log('API Response:', data); // Debugging
                setUsers(data);
                setLoading(false)
            })
            .catch((error) => console.error('Error fetching users:', error));
            setLoading(false);
    }, []);

   // console.log('Users state:', users); // Debug the state here

    return (<div className="py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
    <div className="flex flex-col gap-8 mb-8 p-8">
        <div className="space-y-2">
        <Link href="/" prefetch={false}>
            <div className="text-xl font-xl text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">
              ← Go Back
            </div>
          </Link>
          <h1 className="text-4xl font-bold">Top Readers</h1>
          <p className="text-muted-foreground">Explore top readers of the week.</p>
        </div>
        </div>

        {loading?(<Loader/>):(<section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
        {users.map((user) => (
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Reader</span>
          </Link>
          <img
            src={user.image}
            alt="Reader 1"
            width="300"
            height="300"
            className="object-cover w-full h-64"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
          <div className="p-4 bg-background">
            <h3 className="text-xl font-bold">{`${user.firstName} ${user.lastName}`}</h3>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-semibold">{`${user.age} reads`}</span>
              <BookIcon className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        </div>
        ))}
        
      </section>)}
      </div>
  
    );
}


function BookIcon(props) {
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
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }