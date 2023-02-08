import React from "react";
import Uparray from "../svg/Uparray";

function BlogCard(){
    return (
        <>
        <div className="flex flex-col gap-4 mr-3 my-10">
             <figure>
                  <img  src="https://png.pngtree.com/background/20210709/original/pngtree-shading-background-abstract-colorful-background-colorful-art-picture-image_938007.jpg" alt="profile_image" className="rounded h-[240px] w-[360px]"></img>
               </figure>

             <div className="flex gap-0 px-2 py-1 fit-content rounded-3xl bg-[#F9F5FF]">
                <span className="px-2 py-1 rounded-3xl bg-white text-[#6941C6]">Design</span>
                <span className="px-2 py-1 text-[#6941C6]">8 min read</span>
             </div>
            <div className="flex justify-between">
             <h1 className="text-[24px] font-semibold">UX Review Presentations!</h1>
             <Uparray />
             </div>
             <p className="w-[320px]">
             How do you create compelling presentations that wow your colleagues and impress your managers?
             </p>

             <div className="flex flex-col gap-2">
               {/* <figure>
                  <img  src="https://png.pngtree.com/background/20210709/original/pngtree-shading-background-abstract-colorful-background-colorful-art-picture-image_938007.jpg" alt="profile_image" className="rounded h-[240px] w-[360px]"></img>
               </figure> */}
               <div className="flex  gap-3">
                  <figure>
                  <img  src="https://png.pngtree.com/background/20210709/original/pngtree-shading-background-abstract-colorful-background-colorful-art-picture-image_938007.jpg" alt="profile_image" className="h-[40px] w-[40px] rounded-full"></img>
                 </figure>
                <div className="flex flex-col">
                  <span>Olive Rhyea</span>
                 
                  <span className="text-[#475467] mt-[-5px]">20 Jan 2020</span>
                  </div>
               </div>
             </div>
        </div>
        </>
    )
}

export default BlogCard;