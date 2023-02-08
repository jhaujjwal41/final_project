import React from "react";
import Logo from "../svg/Logo";

function Footer(){
    return(
        <>
       <div className="flex flex-col px-6 py-3 md:px-12 md:py-6 mb-[-20px]  bg-[#1D2939] "> 
        <div className="flex flex-col md:flex-row mt-[140px] md:mt-[100px] justify-between gap-3 pb-8 mb-10 border-b-2 ">
         
           <div className="flex flex-col gap-2">
               <div className="flex flex-row items-center items-start  gap-2 mb-4 md:mb-0"> 
                  <figure>
                    <Logo />
                  </figure>
                  <h3 className="text-[white] text-[16px]">Untitled Ui</h3>
               </div>
               <div className="hidden md:flex flex-wrap md:flex-row items-start  gap-4"> 
                  <span className="text-[#EAECF0] text-[16px]">Overview</span>
                  <span className="text-[#EAECF0] text-[16px]">Features</span>
                  <span className="text-[#EAECF0] text-[16px]">Pricing</span>
                  <span className="text-[#EAECF0] text-[16px]">careers</span>
                  <span className="text-[#EAECF0] text-[16px]">Help</span>
                  <span className="text-[#EAECF0] text-[16px]">Privacy</span>
               </div>

               <div className="flex md:hidden justify-between mb-6">
                     <div className="flex flex-col gap-2">
                       <span className="text-[#EAECF0] text-[16px]">Overview</span>
                       <span className="text-[#EAECF0] text-[16px]">Features</span>
                      <span className="text-[#EAECF0] text-[16px]">Pricing</span>
                     </div>
                     <div className="flex flex-col gap-2">
                       <span className="text-[#EAECF0] text-[16px]">Careers</span>
                       <span className="text-[#EAECF0] text-[16px]">Help</span>
                      <span className="text-[#EAECF0] text-[16px]">Privacy</span>
                     </div>
               </div>
           </div>

           <div className="flex flex-col gap-2 ">
               <span className="text-[white] text-[16px]">Stay up to date</span>
            <div className="flex flex-col md:flex-row flex-start gap-3">
               <input type="text" className="text-primary px-5" placeholder="Enter your mail"></input> 
               <button className="button-primary text-[white]" >Subscribe</button>
            </div>
           </div>
         
        </div>

        <div className="flex flex-row justify-between">
            <span className="flex-1 text-[#D0D5DD] text-[16px]">&copy; 2022 UntitledUi. All rights reserved.</span>
            <div className="hidden md:flex flex-row gap-3 items-end">
               <span className="text-[#667085] text-[16px]">Terms</span>
               <span className="text-[#667085] text-[16px]">Privacy</span>
               <span className="text-[#667085] text-[16px]">Cookies</span>
            </div>
        </div>
        </div>
        
        </>
    )
};

export default Footer;