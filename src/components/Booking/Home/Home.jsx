import React from "react";
import { AiFillStar } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { FiHome } from "react-icons/fi";
import { BsTelephoneX } from "react-icons/bs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "@mui/lab";
import PackageSummery from "../Tabs/PackageSummery";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full min-h-[calc(100vh-260px)] bg-OffWhite">
      <div className="w-full flex flex-col justify-center items-start max-w-[1120px] h-full m-auto px-6 lg:px-0">
        {/* ==========>Top pagination */}
        <p className="text-[14px] font-Mullish text-Main py-4">
          Home / Flash Offers / Grand Hilton Hotel
        </p>
        {/* ===========> 5 star */}
        <div className="flex justify-center items-center gap-0 mt-6">
          {[0, 1, 2, 3, 4].map(() => {
            return <AiFillStar className="text-[18px] fill-[#F2994A]" />;
          })}
        </div>
        {/* ==========> Hotel name + user rating */}
        <div className="w-full flex flex-wrap gap-4 md:gap-0 justify-center md:justify-between items-center">
          {/* name */}
          <div className="flex flex-col justify-center items-start">
            <div className="flex justify-start items-center gap-4">
              <p className="text-[18px] md:text-[30px] uppercase text-lightBlack font-bold font-Mullish ">
                GRAND HILTON HOTEL
              </p>
              <button className="flex justify-center items-center bg-Secondary text-OffWhite px-2 py-1 rounded-md text-[12px]">
                Flash Offer
              </button>
            </div>
            <p className="text-[12px] md:text-[14px] font-Mullish font-normal text-lightBlack">
              Half-Board/ All Inclusive + Complimentary Activities + Child Stays
              Free
            </p>
          </div>
          {/* =========> user Rating */}
          <div className="sm:w-auto w-[80%] flex flex-col justify-center items-center bg-Secondary px-4 py-2 text-white rounded-md">
            <p className="font-Mullish text-[11px]">User Ratings</p>
            <p className="font-Mullish text-[18px]">
              4.5<span className="text-[14px]">/5</span>
            </p>
          </div>
        </div>
        {/* ==================>hotel image + view other options + map */}
        <div className="w-full flex lg:flex-row flex-col gap-6 justify-start items-center py-6 md:py-4">
          {/* ===========>hotel image */}
          <div className="relative w-full lg:w-[75%] flex justify-center items-center">
            <img className="w-full h-full " src="hotelImage.png" alt="" />
            {/* overly on image */}
            <div className="w-full h-full left-0 top-0 absolute imageOverly rounded-[8px]"></div>
          </div>
          {/* =================View other options + map */}
          <div className=" w-full lg:w-[35%] h-full flex flex-col justify-center items-center gap-6 md:gap-4">
            <div className="w-full h-[50%] flex flex-col justify-center items-center bg-Main p-6 rounded-lg">
              {/* ===>price */}
              <div className="w-full flex justify-between items-center">
                <p className="text-[11px] text-white font-Mullish">
                  price starts as
                </p>
                <p className="text-[11px] text-white flex gap-2 font-Mullish justify-center items-center">
                  <RxPerson className="text-[16px]" />2 x Guests
                </p>
              </div>
              {/* =======> price per room */}
              <div className="w-full flex justify-between items-center">
                <p className="text-[28px] font-bold text-white font-Mullish">
                  $ 8,500
                  <br />{" "}
                  <p className="text-[11px] font-normal text-white font-Mullish">
                    per room / night
                  </p>
                </p>
                <p className="text-[11px] text-white flex gap-2 justify-center font-Mullish items-center">
                  <FiHome className="text-[16px]" />2 x Guests
                </p>
              </div>
              {/* ========> Quick booking */}
              <div className="w-full flex justify-between items-center py-2">
                <p className="text-[20px] font-normal text-white font-Mullish">
                  Quick Booking
                </p>
                <p className="text-[18px] font-semibold text-white flex gap-2 justify-center font-Mullish items-center">
                  <BsTelephoneX className="text-[16px]" />
                  12100
                </p>
              </div>
              {/* =========> view other option button */}
              <button className="w-full flex justify-center items-center text-base rounded-md font-Mullish text-white py-3 my-2 bg-Secondary ">
                {" "}
                View Other Options{" "}
              </button>
            </div>
            {/* ===========>map */}
            <div className="w-full h-[50%] flex flex-col justify-center items-center rounded-lg">
              <img
                className="w-full h-full object-cover"
                src="/map.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* ===========================> tabs */}
        <div className="w-full py-8">
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {TabsData.map((tab, index) => {
                return <Tab label={tab.name} value={tab.value} />;
              })}
            </TabList>
            <TabPanel sx={{padding:"0px"}} value="Package Summery"><PackageSummery/></TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  );
}


const TabsData = [
  {
    name: "Package Summery",
    value: "Package Summery",
  },
  {
    name: "Hotel Information",
    value: "Hotel Information",
  },
  {
    name: "Rooms",
    value: "Rooms",
  },
  {
    name: "Facilities & Activities",
    value: "Facilities & Activities",
  },
  {
    name: "Dining & Entertainment",
    value: "Dining & Entertainment",
  },
  {
    name: "Reviews ",
    value: "Reviews ",
  },
  {
    name: "Questions & Answers ",
    value: "Questions & Answers ",
  },
];

export default Home;
