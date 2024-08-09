import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'

export default function Home() {
  return (
      <div >
     
      <main className="flex-1">
        <section className="bg-[#fafafa] py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className= "text-10xl  font-bold tracking-tight text-gray-900 sm:text-5xl">Human stories & ideas</h1>
              
              <p className="mt-4 text-xl text-gray-600">A place to read, write, and deepen your understanding.</p>
             <Link href="/blogs"> <button  className="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Start reading
</button></Link>
            </div>
            <div className="relative mt-12 md:mt-20">
              <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5]" />
                <div className="absolute top-0 left-0 h-full w-full">
                  <div className="absolute top-0 left-0 h-full w-full">
                    <img
                      src="/placeholder.svg"
                      width={400}
                      height={400}
                      alt="Flower"
                      className="absolute top-[-100px] left-[-100px] h-[500px] w-[500px] opacity-50"
                      style={{ aspectRatio: "400/400", objectFit: "cover" }}
                    />
                    <img
                      src="/placeholder.svg"
                      width={300}
                      height={300}
                      alt="Hand"
                      className="absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] opacity-50"
                      style={{ aspectRatio: "300/300", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer/> */}
      
    </div>

  )
}
