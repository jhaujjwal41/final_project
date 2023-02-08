import React from "react";

function BlockPageHeader({article}){

    

    return(
        <>
         <div className="flex flex-col justify-center gap-3 px-6 py-3 md:px-12 md:py-6 bg-[#F9FAFB]">
            <span className="text-[#7F56D9] text-[16px]"> Resources</span>
            <h1 className="text-[48px]">Resource Library</h1>
            <span className="text-[#475467] text-[20px]">Tools and strategies helps to grow</span>
            <div className="flex md:flex-row flex-col  gap-4">
                <div className="flex flex-col gap-1">
                    <input className="w-[360px] text-center text-primary" type="text" placeholder="Type here to search"></input>
                    <div className="text-[#475467] text-[12px]">Privacy policy</div>
                </div>
                <button className="rounded-md button-primary h-[50%]  text-white">Get Started</button>
             </div>

         </div>

        </>
    )
};

export default BlockPageHeader;