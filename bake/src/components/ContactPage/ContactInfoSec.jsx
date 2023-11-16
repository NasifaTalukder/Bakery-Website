import React from "react";
import HouseIcon from "@mui/icons-material/House";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const ContactInfoSec = () => {
  return (
    <>
      <div>
        <h1 className="MessageH text-[34px] font-semibold">
          CONTACT INFORMATION
        </h1>
        <p className=" text-slate-600 mt-4 leading-[30px]">
          We love to hear from you on our customer service, merchandise, website
          or any
          <br />
          topics you want to share with us. Your comments and suggestions will
          be
          <br />
          appreciated. Please complete the form below.
        </p>
        <div className="flex flex-wrap space-x-2 mt-5">
          <p>
            <HouseIcon fontSize="small" className="text-slate-600" />
          </p>
          <p className="text-slate-600">
            184 Main Rd E, St Albans Victoria 3021, Australia
          </p>
        </div>
        <div className="flex flex-wrap space-x-2 mt-4">
          <p>
            <PhoneIcon fontSize="small" className="text-slate-600" />
          </p>
          <p className="text-slate-600">1800-123-222 / 1900-1570-230</p>
        </div>
        <div className="flex flex-wrap space-x-2 mt-4">
          <p>
            <EmailIcon fontSize="small" className="text-slate-600" />
          </p>
          <p className="text-slate-600">contact@company.com</p>
        </div>
        <div className="flex flex-wrap space-x-2 mt-4">
          <p>
            <WatchLaterIcon fontSize="small" className="text-slate-600" />
          </p>
          <p className="text-slate-600">Everyday 9:00-17:00</p>
        </div>
      </div>
    </>
  );
};

export default ContactInfoSec;
