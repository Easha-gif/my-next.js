import '@/app/globals.css'
import Link from 'next/link';

const Home=async()=> {

const res =await fetch(' https://jsonplaceholder.typicode.com/posts')
const data=await res.json()

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
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