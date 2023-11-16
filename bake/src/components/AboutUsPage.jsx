import React from "react";
import MenuSec from "../components/HomePage/MenuSec";
import AboutHeroSec from "./AboutUsPage/AboutHeroSec";
import OurMissionSec from "./AboutUsPage/OurMissionSec";
import OurApproSec from "./AboutUsPage/OurApproSec";
import OurStorySec from "./AboutUsPage/OurStorySec";
import OurPhilocopySec from "./AboutUsPage/OurPhilocopySec";
import QuoteSec from "./AboutUsPage/QuoteSec";
import MemberOneSec from "./AboutUsPage/MemberOneSec";
import MemberTwoSec from "./AboutUsPage/MemberTwoSec";
import MemberThreeSec from "./AboutUsPage/MemberThreeSec";
import FooterAddressSec from "../components/HomePage/FooterAddressSec";
import FooterCategorySec from "../components/HomePage/FooterCategorySec";
import FooterInfoSec from "../components/HomePage/FooterInfoSec";
import FooterQuickLinkSec from "../components/HomePage/FooterQuickLinkSec";
import FooterSignUpSec from "../components/HomePage/FooterSignUpSec";
import FooterCopyrightSec from "../components/HomePage/FooterCopyrightSec";
const AboutUsPage = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-[1200px] m-auto">
          <div className="h-[150px]">
            {/* ----------Menu Section-------- */}
            <MenuSec />
          </div>
        </div>

        <div className="AboutHeroImg">
          {/* --------------------About Us Hero section--------- */}
          <AboutHeroSec />
        </div>

        <div className="h-[1100px]">
          <div className="w-[1200px] m-auto">
            <div className="flex flex-wrap space-x-20 mt-14">
              <div>
                {/* ---------------Our Mission Section--------------- */}
                <OurMissionSec />
                {/* ----------------Our Approach Section----------- */}
                <OurApproSec />
              </div>
              <div>
                {/* ------------------Our Stories Section----------- */}
                <OurStorySec />
                {/* -------------------Our Philocopies Section------------ */}
                <OurPhilocopySec />
              </div>
            </div>
            <div>
              {/* ------------------Quote Text section-------------- */}
              <QuoteSec />
            </div>

            <div className="flex flex-wrap space-x-[45px] mt-20">
              {/* --------------------Member One Section------------------ */}
              <MemberOneSec />
              {/* --------------------Member Two Section------------------ */}
              <MemberTwoSec />
              {/* --------------------Member Three Section------------------ */}
              <MemberThreeSec />
            </div>
          </div>
        </div>

        <div className="footerBack mt-[30px]">
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

export default AboutUsPage;
