import React from "react";
import MenuSec from "../components/HomePage/MenuSec";
import BlogOneSec from "./BlogPage/BlogOneSec";
import BlogTwoSec from "./BlogPage/BlogTwoSec";
import BlogThreeSec from "./BlogPage/BlogThreeSec";
import FooterAddressSec from "../components/HomePage/FooterAddressSec";
import FooterCategorySec from "../components/HomePage/FooterCategorySec";
import FooterInfoSec from "../components/HomePage/FooterInfoSec";
import FooterQuickLinkSec from "../components/HomePage/FooterQuickLinkSec";
import FooterSignUpSec from "../components/HomePage/FooterSignUpSec";
import FooterCopyrightSec from "../components/HomePage/FooterCopyrightSec";

const BlogPage = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-[1200px] m-auto">
          <div className="h-[150px]">
            {/* ----------Menu Section-------- */}
            <MenuSec />
          </div>

          <div className="flex flex-wrap space-x-7 mt-10">
            {/* -------------Blog One Section---------------- */}
            <BlogOneSec />
            {/* -------------Blog Two Section---------------- */}
            <BlogTwoSec />
            {/* -------------Blog Three Section---------------- */}
            <BlogThreeSec />
          </div>
          <div className="flex flex-wrap space-x-7 mt-20">
            {/* -------------Blog One Section---------------- */}
            <BlogOneSec />
            {/* -------------Blog Two Section---------------- */}
            <BlogTwoSec />
            {/* -------------Blog Three Section---------------- */}
            <BlogThreeSec />
          </div>
        </div>

        <div className="footerBack mt-[130px]">
          <div className="w-[1200px] m-auto">
            <div className="flex flex-wrap pt-20 space-x-[40px]">
              {/* -----------------Footer Address Setion------------------------------------ */}
              <FooterAddressSec />
              {/* -----------------Footer Categories Section-------------------  */}
              <FooterCategorySec />
              {/* -----------------Footer Information Section----------------- */}
              <FooterInfoSec />
              {/* -------------------Footer Quick Links Section----------------------- */}
              <FooterQuickLinkSec />
              {/* ---------------------Footer Newsletter Signup Section-------------------- */}
              <FooterSignUpSec />
            </div>
          </div>
        </div>

        <div className="w-full h-16 bg-[#222222] ">
          <div className="w-[1200px] m-auto">
            {/* ------------------------Footer CopyRight Section-------------- */}
            <FooterCopyrightSec />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
