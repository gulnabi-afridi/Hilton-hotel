import React from "react";
import { TextField, IconButton } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import Badge from "@mui/material/Badge";
import { HiOutlineChevronDown } from "react-icons/hi";

function ProfileHeader() {
  return (
    <>
      <div className="w-full h-[120px] bg-white px-6 lg:px-0">
        <div className="w-full h-full m-auto max-w-[1120px] flex flex-wrap justify-between items-center ">
          {/* =============left portion */}
          {/* Logo and search bar */}
          <div className="md:w-auto w-full flex gap-4 md:gap-32 justify-center items-center">
            <img
              src="/logo.svg"
              alt="logo"
              className="w-[140px] md:w-[177px] h-[24px] object-contain "
            />
            {/* Seacrh bar */}
            <div className="w-[380px] h-[45px] flex justify-center items-center">
              <input
                className="w-full h-full rounded-md bg-OffWhite placeholder:text-[12px] placeholder:text-lightBlack px-6 font-Mullish focus:outline-none"
                type="text"
                name="search "
                id="search"
                placeholder="Search Location"
              />
              <div className="w-[55px] md:w-[80px] h-full flex justify-center items-center bg-Secondary cursor-pointer rounded-r-md">
                <FiSearch className="text-[20px] text-white" />
              </div>
            </div>
          </div>
          {/* ==================Right portion */}
          <div className=" w-full md:w-auto flex justify-center items-center gap-8">
            {/* ======> cart icon */}
            <IconButton>
              <Badge
                badgeContent={3}
                sx={{
                  "& .MuiBadge-badge": {
                    width: "20px",
                    height: "20px",
                    background: "#EC1F46",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "12px",
                  },
                }}
              >
                <GrCart className="text-[24px]" />
              </Badge>
            </IconButton>
            {/* ===========> profile image */}
            <div className="flex justify-center items-center gap-4">
              <img
                className="w-[35px] h-[35px] rounded-[50%]"
                src="/profileImage.svg"
                alt=""
              />
              {/* ===========> user name */}
              <div className="flex justify-center items-center gap-4">
                <p className="text-16px text-lightBlack font-Mullish">Nathan</p>
                <HiOutlineChevronDown className="text-[24px] text-black font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
