import React from "react";

function SupportHeader() {
  return (
    <div className="w-full h-[70px] md:h-[60px] bg-OffWhite px-6 lg:px-0 md:py-0 py-2 ">
      <div className="w-full h-full m-auto max-w-[1120px] flex justify-between flex-wrap items-center ">
        {/* Help Tag lines */}
        <p className="flex w-full md:w-auto justify-between md:justify-center items-center text-[12px] leading-[12.55px] text-[#333333] font-normal ">
          <span className="font-bold mr-1">Questions?</span>
          <span className="font-bold mr-2">Need Help?</span>
          Call us on (+123) 456 1500
        </p>

        {/* Gift tags */}
        <div className="flex w-full md:w-auto justify-between md:justify-center items-center">
          {/* Git tag */}
          <div className="flex justify-center items-center mr-20">
            <img
              src="/gift.svg"
              alt="gift"
              className="object-contain w-[18px] h-[18px] "
            />
            <p className="text-[12px] leading-[12.55px] text-[#333333] font-normal ml-3 ">
              BTP Gift Card
            </p>
          </div>
          {/* star card */}
          <div className="flex justify-center items-center">
            <img
              src="/star.svg"
              alt="gift"
              className="object-contain w-[18px] h-[18px] "
            />
            <p className="text-[12px] leading-[12.55px] text-[#333333] font-normal ml-3 ">
              BTP Gift Card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportHeader;
