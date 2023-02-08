import React from "react";

function FooterOverlap(){
    return (
        <>
        <div className="mx-6 md:mx-12 mt-12 mb-[-122px] md:mb-[-62px] relative rounded-md bg-[#F9FAFB] ">
            <div className="px-6 py-4 md:px-12 md:py-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-2 ">
                <span className="md:text-[#101828]  md:text-[30px]">Start Your 30 day free trial today</span>
                <span className="text-[#101828] md:hidden text-[24px]">Start Your free Trial</span>
                <span className="text-[#475467] text-[12px]">Join over 4,000+ startups already ggrowing with UntitledUi</span>
            </div>
            <div className="flex flex-col md:flex-row mt-4 flex-end gap-2">
              <button className="text-primary rounded-xl  border-black bg-[white] items-center text-[black] h-[60%]">Learn More</button>
              <button className="button-primary h-[60%] text-[white]">Get Started</button>
            </div>
            </div>
        </div>
        </>
    )
};

export default FooterOverlap;