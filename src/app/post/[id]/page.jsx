

const postDetails = async({params}) => {
    const {id}= await params
const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const data = await res.json()
    return (
       <>
       <h1 className="text-2xl font-bold text-black my-4">Blog Detail : {id}</h1>
           <div className="card bg-gray-500 p-5 my-7">
  <div className="card-body">
    <h2 className="text-white text-3xl font-bold text-center pb-5">{data.title}</h2>
    <p className="text-sm text-gray-300 font-semibold text-center">{data.body}</p>
  </div>
</div>
       </>
    );
};

export default postDetails;