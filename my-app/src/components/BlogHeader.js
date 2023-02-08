import React from "react";
import Copy from "../svg/Copy";
import Facebook from "../svg/Facebook";
import Linkedin from "../svg/LnkedIn";
import Telegram from "../svg/Telegram";
import Twiter from "../svg/Twitter";
import BlogCard from "./BlogCard";
import BlogDescription from "./BlogDescription";
import BlogList from "./BlogList";
import { useState, useEffect } from "react";
function BlogHeader( {id}){
   // console.log({id});
   const [article, setArticle] = useState([]);

    useEffect(()=>{
      fetch(`http://172.25.27.106:3000/article/show/${id}`)
      .then(data=>data.json())
      .then(data=>setArticle(data));
      
  },[])
  
   //  console.log(article);
    return (
     <>
      <div className="flex px-6 md:px-12 py-2 flex-col flex-wrap gap-3 mb-10">
          <div className=" flex flex-1 py-1 gap-2 rounded-3xl px-2 fit-content bg-[#F9F5FF]">
             <span className="rounded-3xl text-[#6941C6] px-2 bg-[white]">
                LeaderShip
             </span>
             <span className="text-[#6941C6]">8 min read</span>
          </div>

          <h1 className="text-[36px] md:text-[48px]">{article?.title}</h1>
          <p numberoflines={1} className="md:w-full text-[#475467] text-[16px] md:text-[20px] lg:w-[70%]">
          {/* Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
          {article?.text}
          </p>
          <figure className="w-[full] md:mt-10">
            <img className="h-[240px] w-[343px] md:w-full rounded-xl md:h-[516px]" src="https://e1.pxfuel.com/desktop-wallpaper/858/117/desktop-wallpaper-mountain-lake-alps-glacial-lake-morning-sunrise-mountain-landscape-beautiful-lake-sunrise-in-mountains-bavaria-germany-with-resolution-1920x1200-high-quality-beautiful-mountain-sunrise.jpg"></img>
          </figure>

          <div className="flex justify-between items-center">
            <div className="flex gap-14 md:gap-6">
              <div className="flex flex-col gap-2">
                   <span className="text-[#7F56D9] text-[14px]">Written By</span>
                    <span>Alec Whitten</span>
              </div>
              <div className="flex flex-col gap-2">
                    <span className="text-[#7F56D9] text-[14px]">Published On</span>
                    <span>17 Jan 2022 {article.created_at} </span>
              </div>
              </div>

              <div className="hidden md:flex items-end gap-2">
                 <button className="text-primary text-[#344054] text-[12px]"><Copy />Copy Link</button>
                 <button className="text-primary"> <Twiter /> </button>
                 <button className="text-primary"> <Facebook /> </button>
                 <button className="text-primary"> <Linkedin /> </button>
              </div>

          </div>
      </div>


      {/* Another-part another component */}
      <BlogDescription />
      {/* another component on this page  */}

      <BlogList />
     </>
    )
};

export default BlogHeader;