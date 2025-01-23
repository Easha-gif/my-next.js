import Link from "next/link";
import logo from '@/components/assets/logo.jpg'
import Image from "next/image";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async() => {

const {getUser}=getKindeServerSession()
const user=await getUser()

const navItem=(
    <>
     <Link href='/' className="text-sm text-blue-800 font-semibold mr-4 btn border-2 border-blue-800">Home</Link>
     <Link href={user?`/profile`:'/api/auth/login'} className="text-sm text-blue-800 font-semibold mr-4 btn border-2 border-blue-800">Profile</Link>
{user?
 <LogoutLink className="text-sm text-blue-800 font-semibold mr-4 btn border-2 border-blue-800">Log-Out</LogoutLink>
 :<><LoginLink  className="text-sm text-blue-800 font-semibold mr-4 btn border-2 border-blue-800">Sign in</LoginLink>
<RegisterLink className="text-sm text-blue-800 font-semibold btn border-2 border-blue-800">Sign up</RegisterLink></>
}
 </>
)

    return (
        <div>
            <div className="navbar bg-blue-500 px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navItem}
      </ul>
    </div>
    <Image className="w-24 object-cover rounded-full" src={logo} alt="logo"></Image>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;