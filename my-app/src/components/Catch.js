import React from "react";


function Catch(){
    return(
        <>
         <div className="flex px-6 md:px-12 py-2 flex-col md:flex-row items-center gap-4 justify-between">

            <div className="flex flex-col gap-3 items-start">
                <div>
               <h1 className="text-[30px] font-semibold md:text-[48px]">No Long Term Contracts.</h1>
               <h1 className="text-[30px] font-semibold md:text-[48px]">No Catches.</h1>
               </div>
               <span className="text-[#475467] text-[16px]">Start your 30 day free trial today</span>

               <div className="flex md:flex-row gap-3">
                    <button className="text-primary text-[gray]">Learn More</button>
                    <button className="button-primary text-[white]">Get Started </button>
               </div>
            </div>

            <figure>
                <img className="h-[50%] w-[500px]"fit-content  src="https://img.freepik.com/free-vector/business-partners-signing-contract-online-leaders-affixing-signatures-document-monitor-flat-vector-illustration-internet-agreement_74855-8265.jpg?w=2000&t=st=1675703464~exp=1675704064~hmac=f7163f0defa2eeb57a9acebb729ea4c2299477ae3306dd9ea7dc5ef116aa3c03"></img>
            </figure>


         </div>
         
        </>
    )
};
export default Catch;
