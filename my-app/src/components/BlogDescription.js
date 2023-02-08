import React from 'react'
import { Link } from 'react-router-dom';
import Articles from '../pages/Articles';
import Telegram from '../svg/Telegram';
import { useEffect } from 'react';

const BlogDescription = () => {
  

  return (
   <>
   <div className="flex flex-col md:flex-row px-6 my-4 md:px-12  md:my-8 gap-12 justify-between  ">
          <div  className="flex md:w-[140%] flex-col ">
            <h1 className="text-[24px] md:text-[30px]">Introduction</h1>
            <p className="text-[12x] md:text-[18px] mt-4 text-[#475467] "> 
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
            </p>
            <figure >
               <img className="fit-content w-[1216px] rounded-md" src="https://prepinsta.com/wp-content/uploads/2022/04/tips-to-crack-group-discussion.webp" alt="p-image"></img>
            </figure>
          </div>

          <div className="flex px-4 fit-content py-4 rounded-b-xl bg-[#F9FAFB] flex-col gap-3 border-t-2 border-[#6941C6]">
            <Telegram />
            <h1 className="text-[24px]">Weekly NewsLetter</h1>
            <p className="text-[16x] text-[#475467]">
            No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week.
            </p>
            <input type="text" className="text-primary" placeholder="Enter your email"></input>
           <span className="mt-[-10px] text-[#475467] text-[14px]">Read about our <u>Privacy Policy</u></span>

            <button className="button-primary mt-4 text-[white]">Subscribe</button>

          </div>
      </div>

   </>
  )
}

export default BlogDescription;

