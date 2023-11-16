import React from "react";

const LoginSec = () => {
  return (
    <>
      <div>
        <h1 className="LogH text-3xl font-semibold">Login</h1>
        <div className="w-[590px] h-[490px] border-2 border-slate-200 p-5 rounded mt-7">
          <form>
            <div>
              <label className="text-base font-sans font-semibold text-slate-600">
                Username or email address *
              </label>
              <input
                type="email"
                required
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div className="mt-4">
              <label className="text-base font-sans font-semibold text-slate-600">
                Password *
              </label>
              <input
                type="password"
                required
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div className="mt-5 flex flex-wrap space-x-1">
              <input type="checkbox" name="" id="" />
              <label
                htmlFor=""
                className="text-base font-sans font-semibold text-slate-600"
              >
                Remember me
              </label>
            </div>
            <div className="mt-6">
              <button className="font-sans text-white bg-black pl-10 pr-10 pt-3 pb-3 rounded font-semibold hover:bg-[#BB9230] ">
                LOG IN
              </button>
            </div>
            <div className="mt-5">
              <p className="text-lg font-sans text-slate-600">
                Lost your password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginSec;
