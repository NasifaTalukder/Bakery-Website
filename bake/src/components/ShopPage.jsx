import React from "react";
import MenuSec from "./HomePage/MenuSec";
import ShopProdOne from "./ShopPage/ShopProdOne";
import ShopProdTwo from "./ShopPage/ShopProdTwo";
import ShopProdThree from "./ShopPage/ShopProdThree";
import ShopProdFour from "./ShopPage/ShopProdFour";
import ShopProdFive from "./ShopPage/ShopProdFive";
import ShopProdSix from "./ShopPage/ShopProdSix";
import ShopProdSeven from "./ShopPage/ShopProdSeven";
import ShopProdEight from "./ShopPage/ShopProdEight";
import ShopProdNine from "./ShopPage/ShopProdNine";
import ShopProdTen from "./ShopPage/ShopProdTen";
import ShopProdEleven from "./ShopPage/ShopProdEleven";
import ShopProdTwel from "./ShopPage/ShopProdTwel";
import ShopHead from "./ShopPage/ShopHead";
import FooterAddressSec from "../components/HomePage/FooterAddressSec";
import FooterCategorySec from "../components/HomePage/FooterCategorySec";
import FooterInfoSec from "../components/HomePage/FooterInfoSec";
import FooterQuickLinkSec from "../components/HomePage/FooterQuickLinkSec";
import FooterSignUpSec from "../components/HomePage/FooterSignUpSec";
import FooterCopyrightSec from "../components/HomePage/FooterCopyrightSec";

const ShopPage = () => {
  return (
    <>
      <div className="w-full h-[1000px]">
        <div className="w-[1200px] m-auto">
          <div className="w-full h-[100px]">
            {/* ----------Menu Section-------- */}
            <MenuSec />
          </div>
        </div>
        <div className="w-[1200px] m-auto">
          <div className="mt-[100px]">
            <div>
              <div className="flex flex-wrap justify-between">
                {/* ----------------Shop Heading--------------- */}
                <ShopHead />
              </div>
            </div>

            <div className="flex flex-wrap mt-8 space-x-3">
              {/* -------------------Shop Product One---(Cherry Cupcakes)------------------- */}
              <ShopProdOne />
              {/* ---------------------Shop Product Two-(Anadaman Cookies)------------------- */}
              <ShopProdTwo />
              {/* ----------------------Shop Product Three (Borodinsky Breads)----------- */}
              <ShopProdThree />
              {/* -----------------------Shop Product Four (Cereal Bagel)--------------------- */}
              <ShopProdFour />
            </div>

            <div className="flex flex-wrap mt-6 space-x-3">
              {/* ------------------------Shop Product Five (Chocolate Cookies)---------------------------- */}
              <ShopProdFive />
              {/* ---------------------------Shop Product Six(Pistachio Financiers)---------------- */}
              <ShopProdSix />
              {/* ----------------------------Shop Product Seven(Pane Di Altamura)------------------- */}
              <ShopProdSeven />
              {/* ----------------------------Shop Product Eight(Sourdough)------------------ */}
              <ShopProdEight />
            </div>

            <div className="flex flex-wrap mt-6 space-x-3">
              {/* --------------------------Shop Product Nine(Sesame De Outlets Breads)----------------- */}
              <ShopProdNine />
              {/* --------------------------Shop Product Ten(Double Choco Cookie)----------------- */}
              <ShopProdTen />

              {/* ---------------------------Shop Product Eleven (Anadaman Cookies)----------------------- */}
              <ShopProdEleven />
              {/* --------------------------Shop Product Twelev--(Croissant Breads)---------------- */}
              <ShopProdTwel />
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

export default ShopPage;
