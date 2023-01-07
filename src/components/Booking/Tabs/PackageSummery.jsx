import React from "react";
import { BsCalendar } from "react-icons/bs";

function PackageSummery() {
  return (
    <div className="w-full py-8 flex flex-col justify-center items-center">
      <p className="text-lightBlack w-full text-start text-[26px] font-bold font-Mullish uppercase">
        Package Summery
      </p>
      {/* ===============>package highlights + offer details */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-4 my-6">
        {/* ==========> package hightlights */}
        <div className="w-full lg:w-[50%] grid grid-cols-2 grid-rows-[60px,240px] lg:grid-rows-[60px,170px] bg-white rounded-md">
          {/* ========>top header */}
          <div className="col-span-2 bg-Main text-white text-[16px] font-Mullish flex justify-start px-4 items-center rounded-t-md">
            Package Highlights
          </div>
          <div className="col-span-1 flex flex-col justify-start items-start gap-6 p-4 pt-8">
            {HightLight1.map((highlight, index) => {
              return (
                <div className="flex justify-center items-center gap-6">
                  <img src="/check.svg" alt="" />
                  <p className="text-[14px] font-Mullish text-lightBlack">
                    {highlight}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="col-span-1 flex flex-col justify-start items-start gap-6  pl-7 p-4 pt-8">
            {HightLight2.map((highlight, index) => {
              return (
                <div className="flex justify-center items-center gap-6">
                  <img src="/check.svg" alt="" />
                  <p className="text-[14px] font-Mullish text-lightBlack">
                    Luxurious 5-Star Hotel
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* ==========> offer detail */}
        <div className="w-full lg:w-[50%] grid grid-cols-2 grid-rows-[60px,240px] lg:grid-rows-[60px,170px] bg-white">
          {/* Top header */}
          <div className="col-span-2 bg-Main text-white text-[16px] font-Mullish flex justify-start px-4 items-center rounded-t-md">
            Offer Details
          </div>
          {/* ============ */}
          <div className="col-span-1 flex flex-col justify-start items-start gap-4 p-4 pt-8">
            <div className="flex justify-center items-start gap-6">
              <img className="mt-1" src="/check.svg" alt="" />
              <div className="flex flex-col gap-10 justify-center items-start">
                <p className="text-[14px] font-Mullish text-lightBlack">
                  Benefit from a special discounted CHILL’OUT OFFER at Grand
                  Hilton Hotel.
                </p>
                <p className="text-[14px] font-Mullish text-lightBlack">
                  {" "}
                  * Valid until 30 April 2020
                </p>
              </div>
            </div>
          </div>
          {/* ================= */}
          <div className="col-span-1 flex flex-col justify-start items-start gap-4  pl-7 p-4 pt-8">
            <div className="flex justify-center items-center gap-6">
              <BsCalendar className="text-[18px]" />
              <p className="text-[14px] font-Mullish text-lightBlack">
                10th March - 30th April 2020
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ================> package summery detail */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[60px,auto,auto] bg-white rounded-md ">
        {/* ========>top header */}
        <div className="col-span-full bg-Main text-white text-[16px] font-Mullish flex justify-start px-4 items-center rounded-t-md">
          Package Summery Details
        </div>
        {/* ==============ist column */}
        <div className="col-auto lg:col-span-1 flex flex-col justify-start items-start gap-6 p-4 py-5 my-6 md:py-0 md:py-10">
          <p className="text-[16px] font-Mullish text-[red]">
            Purchase Inclusions
          </p>
          {PurchaseInclusions.map((value, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center gap-6"
              >
                <img src="/check.svg" alt="" />
                <p className="text-[14px] font-Mullish text-lightBlack">
                  {value}
                </p>
              </div>
            );
          })}
        </div>
        {/* ==============2nd column */}
        <div className="col-auto lg:col-span-1 flex flex-col justify-start items-start gap-6 p-4  py-5 md:py-10">
          <p className="text-[14px] font-Mullish text-[red]">
            Complimentary Land Based Activities
          </p>
          {ComplimentaryLandBasedActivities.map((value, index) => {
            return (
              <div className="flex justify-center items-center gap-6">
                <img src="/check.svg" alt="" />
                <p className="text-[14px] font-Mullish text-lightBlack">
                  {value}
                </p>
              </div>
            );
          })}
        </div>
        {/* ==============3rd column */}
        <div className="col-auto lg:col-span-1  row-span-2 flex flex-col justify-start items-start gap-6 p-4  py-5 md:py-10">
          <p className="text-[14px] font-Mullish text-[red]">
            Complimentary Water Based Activities
          </p>
          {ComplimentaryWaterBasedActivities.map((value, index) => {
            return (
              <div className="flex justify-center items-center gap-6">
                <img src="/check.svg" alt="" />
                <p className="text-[14px] font-Mullish text-lightBlack">
                  {value}
                </p>
              </div>
            );
          })}
        </div>
        {/* ===========> line */}
        <div className="lg:block hidden col-auto lg:col-span-3 row border-[1px] border-dashed border-[#E0E0E0] mx-4"></div>
        {/* ===========> Meal Plan Available */}
        <div className="col-auto lg:col-span-1 flex flex-col justify-start items-start gap-6 p-4  py-5 md:py-10">
          <p className="text-[14px] font-Mullish text-[red]">
            Meal Plan Available
          </p>
          {MealPlanAvailable.map((value, index) => {
            return (
              <div className="flex justify-center items-center gap-6">
                <img src="/check.svg" alt="" />
                <p className="text-[14px] font-Mullish text-lightBlack">
                  {value}
                </p>
              </div>
            );
          })}
        </div>
        {/* ===========> Entertainment Plan Available */}
        <div className="col-auto lg:col-span-1  flex flex-col justify-start items-start gap-6 p-4  py-5 md:py-10">
          <p className="text-[14px] font-Mullish text-[red]">Entertainment</p>
          {Entertainment.map((value, index) => {
            return (
              <div className="flex justify-center items-center gap-6">
                <img src="/check.svg" alt="" />
                <p className="text-[14px] font-Mullish text-lightBlack">
                  {value}
                </p>
              </div>
            );
          })}
        </div>
        {/* ===========> Check In & Check Out */}
        <div className="col-auto lg:col-span-1 flex flex-col justify-start items-start gap-6 p-4  py-5 md:py-10">
          <p className="text-[14px] font-Mullish text-[red]">
            Check In & Check Out
          </p>
          {CheckInCheckOut.map((value, index) => {
            return (
              <div className="flex justify-center items-center gap-6">
                <img src="/check.svg" alt="" />
                <p className="text-[14px] font-Mullish text-lightBlack">
                  {value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const HightLight1 = [
  "Half Board/ All Inclusive",
  "Child Under 11 Years Stay Free",
  "LUX* Me Spa",
];
const HightLight2 = ["Luxurious 5-Star Hotel", "Banyan An Adult Only Zone"];

const PurchaseInclusions = [
  "Room as per selection",
  "Half Board or All Inclusive Meal Plan",
  "Complimentary Land & Water activities",
  "Child Under 11 years old stays free",
  "Free Wi-Fi",
  "Free Secure Parking",
];
const ComplimentaryLandBasedActivities = [
  "Gym",
  "Beach Volley",
  "Table tennis",
  "Soccer balls",
  "Yoga",
  "Unlimited access to driving range",
];
const ComplimentaryWaterBasedActivities = [
  "Water skiing",
  "Windsurfing",
  "Pedal boats",
  "Kayaking",
  "Aqua Gym",
  "Glass bottom boat trips",
];
const MealPlanAvailable = ["Half Board", "All Inclusive"];
const Entertainment = ["Live music", "DJ & Mauritian Dance Show"];
const CheckInCheckOut = ["Check In Time 14:00", "Check Out Time 11:00"];


export default PackageSummery;
