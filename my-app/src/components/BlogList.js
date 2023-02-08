import React from 'react'
import BlogCard from './BlogCard';

const BlogList = () => {
  return (
   <>
     <div className="flex flex-col md:flex-row px-6 py-4 md:px-12 md:py-8 gap-3 border-t-2 mt-8 ">
          <div className="flex flex-1 flex-col gap-4">
              <span className='text-[16px] text-[#6941C6]'>Latest</span>
              <h1 className='text-[32px] md:text-[36px]'>From the blog</h1>
              <p className='text-[#667085]'>The latest industry news, interviews, technologies, and resources.</p>

              <button className="hidden md:button-primary text-[#f0e8e8] fit-content  ">View All Posts</button>
          </div>

        <BlogCard />
        <BlogCard />
      </div>
   </>
  )
}

export default BlogList;