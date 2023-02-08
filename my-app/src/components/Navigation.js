import React from "react";
import Logo from "../svg/Logo";
import { Link } from "react-router-dom";
import Navbutton from "../svg/NavButton";





function NavigationMenu({user, setUser}){
   console.log(user);
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('user');
      }
    return (
        <>
        <div  className="flex gap-3 flex-row items-center justify-between border-b-2 px-6 md:px-12 py-2 mb-10">
             <div className="flex items-center flex-row gap-5">
                 <div className="flex gap-1 items-center flex-row">
                 <span> <Logo/> </span>
                 <span className="text-[#101828] text-[18px]">Untitled Ui</span>
                 </div>

                 <div className="flex gap-3 items-center flex-row justify-center ">
                 <Link to="/"><span className="text-[16px] text-[#475467] hidden lg:block">HomePage</span> </Link> 
                  <Link to="/addArticles"> <span className="text-[16px] text-[#475467] hidden lg:block "> Articles</span> </Link> 
                  
                 </div>
             </div>
             
             {/* <div className="flex  justify-center gap-2 hidden lg:flex">
             <Link to="/Login">  <button className="text-primary text-[black]">Login</button> </Link>
             <Link to="/signup">   <button className="button-primary rounded-md px-5 text-white">Sign Up</button> </Link>
             </div> */}

             <div className="block sm:hidden">
                <Navbutton />
             </div>

             {
                !user ? 
                 <div className='hidden md:flex  gap-3'>
                <Link to='/login'><button className='btn btn-ghost'>Login</button></Link>
                <Link to='/signup'> <button className='btn bg-[#7F56D9] py-2'>Sign Up</button></Link>
                </div> : 
                <div className="flex items-center">
                <div className='flex gap-3 mr-4'>
                <figure className='w-8 h-8 rounded-full bg-red-400'>
                    <img className='h-full w-full ' src='https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png'/>
                </figure>
                <h1>Welcome, {user?.name}</h1>
                </div>
                <button onClick={logout} className='btn bg-[#7F56D9] py-2'>Logout</button>
                </div>
        }
             
        </div>

        </>
    )
}

export default NavigationMenu;