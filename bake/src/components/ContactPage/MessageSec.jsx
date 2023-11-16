import React from "react";

const MessageSec = () => {
  return (
    <>
      <div className="w-[550px]">
        <h1 className="MessageH text-[34px] font-semibold">DROP US A LINE</h1>
        <div>
          <div>
            <label className="text-base font-sans font-semibold text-slate-600">
              Your name (Required)
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border-2 border-slate-400 mt-2 outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="text-base font-sans font-semibold text-slate-600">
              Your email (Required)
            </label>
            <input
              type="email"
              required
              className="w-full p-2 border-2 border-slate-400 mt-2 outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="text-base font-sans font-semibold text-slate-600">
              Your Phone Number
            </label>
            <input
              type="number"
              required
              className="w-full p-2 border-2 border-slate-400 mt-2 outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="text-base font-sans font-semibold text-slate-600">
              Your Message
            </label>
            <input
              type="text"
              required
              className="pl-[6px] pr-[365px] pt-[5px] pb-[220px] border-2 border-slate-400 mt-2 outline-none"
            />
          </div>

          <div className="mt-5">
            <button className="pl-[260px] pr-[260px] pt-[5px] pb-[5px] border-2 border-black text-black font-semibold mt-2 outline-none hover:bg-[#BB9230] hover:text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSec;
