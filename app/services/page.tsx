import Banner from "@/app/components/Home/Banner";
import React from "react";
import Service from "@/app/components/Home/Service";
import contentData from "@/components/Content/servicePage.json";
import { Metadata } from "next";
import ContactInfo from "@/components/Content/ContactInfo.json";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: {
    absolute: contentData.metaTitle?.split("[location]").join( ContactInfo.location)
    ?.split("[phone]").join(ContactInfo.No),
  },
  description: contentData.metaDescription?.split("[location]").join( ContactInfo.location)
  ?.split("[phone]").join(ContactInfo.No),
  alternates: {
    canonical: `${ContactInfo.baseUrl}services/`,
  },
};
const page = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <Banner
          h1={contentData.h1Banner?.split("[location]").join( ContactInfo.location)
            ?.split("[phone]").join(ContactInfo.No)}
          image={contentData.bannerImage}
          header={contentData.bannerQuote}
          p1={contentData.metaDescription?.split("[location]").join( ContactInfo.location)
            ?.split("[phone]").join(ContactInfo.No)}
        />

        {/* Content 1 */}
        <div className="">
          {/* <Affordable /> */}
          <Service />
          {/* <TypeOfDumpster /> */}
        </div>
        {/* Content 1 */}
      </div>
    </div>
  );
};

export default page;
