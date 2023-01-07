import React from "react";
import SupportHeader from "./Headers/SupportHeader";
import ProfileHeader from "./Headers/ProfileHeader";
import CategoryHeader from "./Headers/CategoryHeader"
import Home from "./Home/Home";

function Index() {
  return (
    <>
      <SupportHeader />
      <ProfileHeader />
      <CategoryHeader />
      <Home/>
    </>
  );
}

export default Index;
