import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";



function SignUp(){
    
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();


  const SignupUser = async ()=>{
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const response = await fetch('http://172.25.27.106:3000/user/create',{
          method:'POST',
          headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name,
              email,
              password
            })
      });
      
      const data = await response.json();
      console.log(data);

      if(data.id){
          navigate('/login');
      }
  }



    return(
        <>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                  <p className="text-gray-500">Please sign in to your account.</p>
                </div>
                <div className="space-y-5">

                <div className="space-y-2">
                                  <label className="text-sm font-medium text-gray-700 tracking-wide">Name</label>
                  <input ref={nameRef} className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Enter your name" /> 
                  </div>

                            <div className="space-y-2">
                                  <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                  <input ref={emailRef} className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="mail@gmail.com" /> 
                  </div>
                              <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input ref={passwordRef} className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Enter your password" />
                </div>
                  <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-green-400 hover:text-green-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button onClick={SignupUser} type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign Up
                  </button>
                </div>
                
                
                
                </div>
                <div className="pt-5 text-center text-gray-400 text-xs">
                  <span>
                    Copyright &copy; 2021-2022
                   </span>
                </div>

                {/* <Link to ='/signup'>siggnup</Link> */}
            </div>
          </div>
        </>
    )
}

export default SignUp;

