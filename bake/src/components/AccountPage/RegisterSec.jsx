import React from 'react'

const RegisterSec = () => {
  return (
    <>
    <div>
        <h1 className="RegH text-3xl font-semibold">Register</h1>
        <div className="w-[590px] h-[490px] border-2 border-slate-200 p-5 rounded mt-7">
          <form >
            <div>
              <label className="text-base font-sans font-semibold text-slate-600">
                Name *
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div>
              <label className="text-base font-sans font-semibold text-slate-600">
                Username *
              </label>
              <input
                type="text"
                name="userName"
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div className="mt-4">
              <label className="text-base font-sans font-semibold text-slate-600">
                Email address *
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div className="mt-4">
              <label className="text-base font-sans font-semibold text-slate-600">
                Password *
              </label>
              <input
                type="password"
                name="password"
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div className="mt-7">
              <button
                className="font-sans text-white bg-black pl-12 pr-12 pt-3 pb-3 rounded font-semibold hover:bg-[#BB9230] "
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterSec
