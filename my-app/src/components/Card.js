import React from "react";
import { Link } from "react-router-dom";

function Card({article}){
    // console.log(article);
    return(
        <>
        <div>
        <div className="card  bg-base-100 border-2 border-gray-100  md:w-[592px]">
            <figure className='relative h-[240px] md:h-[280px]'>
                <img 
                className='h-full w-full'
                src="https://png.pngtree.com/background/20210709/original/pngtree-shading-background-abstract-colorful-background-colorful-art-picture-image_938007.jpg" alt="Shoes" />
               <div className='absolute bottom-0 w-full backdrop-blur-lg text-[14px] border-t-[1px] font-medium h-20 text-white'>
                    <h1 className='flex justify-between px-8 pt-4'>
                        <span>Cogoport academy</span>
                        <span>Category Name</span>
                    </h1>
                    <h1 className='px-8'>{article?.created_at?.toLocaleString()}</h1>
               </div>
            </figure>
            <div className="card-body px-4 md:px-8">
                <h2 className="card-title text-[24px] font-semibold">{article?.title}</h2>
                <p className='text-[16px] font-normal text-gray-500 mt-2'>{article?.text}</p>
                <Link to={`/Articles/${article?.id}`}>  <p className='text-[#6941C6] text-[16px] font-medium mt-4'>Read More</p> </Link>
            </div>
        </div>
    </div>
        </>
    )
}
export default Card;