import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const profile = async() => {
    const {getUser}=getKindeServerSession()
    const user=await getUser()
    return (
        <div>
            <p className="text-center my-7 text-2xl font-bold text-green-950">Welcome To your Profile !!</p>
<div className="flex justify-center items-center gap-5 bg-slate-100 p-5 mt-6 border-4 rounded-lg w-fit mx-auto shadow-lg">
    <div>
        <p className="text-base font-semibold text-gray-600">Email : </p>
        <p className="text-base font-semibold text-gray-600">Name : </p>
    </div>
    <div>
        <p className="text-base font-semibold text-gray-600">{user?.email}</p>
        <p className="text-base font-semibold text-gray-600">{user?.given_name} {user?.family_name}</p>
    </div>
</div>
        </div>
    );
};

export default profile;