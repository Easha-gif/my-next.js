import '@/app/globals.css'
import Image from 'next/image';
import Link from 'next/link';
import img from '@/components/assets/blog.jpg'
const Home=async()=> {

const res =await fetch(' https://jsonplaceholder.typicode.com/posts')
const data=await res.json()

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

<div className="card card-side bg-base-100 shadow-xl p-2 my-16">
  <figure>
    <Image className='h-[300px] object-cover w-[800px]'  width={400} height={500}
      src={img}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold text-blue-950">Blog Viewers</h2>
    <p className='text-sm font-semibold text-gray-700'>An easy way to find a blog on a website you already visit is to look for a mention of it on the home page or somewhere in the menu. If that doesnt work, you can find the blog with a search engine; just enter the company or persons name followed by the word blog.</p>
  </div>
</div>
<h1 className='text-4xl font-bold text-center'>Reviews</h1>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
{data.splice(0,20).map(post=><div key={post.id} className="card border-2 bg-base-100 shadow-xl h-[260px]">
  <div className="card-body">
    <h2 className="card-title">{post?.title}</h2>
    <div>
     <Link href={`/post/${post.id}`}><button className="btn btnBottom btn-success">View Details</button></Link>
    </div>
  </div>
</div>)}
</div>
    </div>
  );
}
export default Home