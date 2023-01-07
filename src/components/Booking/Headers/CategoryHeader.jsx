import React from "react";

function CategoryHeader() {
  return (
    <div className="w-full h-[100px] md:h-[80px] bg-Main py-2 md:py-0">
      <div className="w-full max-w-[1120px] m-auto h-full flex flex-wrap justify-between items-center px-6 lg:px-0 ">
        {CategoryLink.map((nav, index) => {
          return (
            <button
              key={index}
              className="text-white uppercase text-[14px] font-Mullish font-semibold mr-4 md:mx-0"
            >
              {nav.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const CategoryLink = [
  { name: "All deals" },
  { name: "Hotels" },
  { name: "Activities" },
  { name: "Hotel Day Packages" },
  { name: "Restaurants" },
  { name: "Events" },
  { name: "Rodrigues" },
];

export default CategoryHeader;
