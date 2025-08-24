import React from "react";
import DistinctiveSection from "@/components/PageManagement/DistinctiveSection";
import HomePageBanner from "@/components/PageManagement/HomePageBanner";
const PageManagement = () => {
  return (
    <div className="w-full p-10 bg-white min-h-screen">
      <HomePageBanner />
      <DistinctiveSection />
    </div>
  );
};

export default PageManagement;
