import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";

const Header = () => {
  const [state, setState] = useState<boolean>(false);

  const dropDown = () => {
    setState(!state);
  };

  return (
    <div
      className="h-[70px] bg-[#DFF6F1] w-full flex justify-center items-center  "
      style={{
        boxShadow: "0 6px 15px 0 rgba( 31, 38, 135, 0.37 )",
      }}
    >
      <div className="medium:w-[90%]  w-[85%] flex justify-between items-center small:w-[95%]">
        <div className="font-bold flex items-center text-[30px]">
          <HiLightBulb />
          eco<span className="text-emerald-500">Funds</span>
        </div>
        {/* <div className="flex ">
          <nav className="mx-5 cursor-pointer text-[#001D23] hover:text-emerald-500 font-bold transition-all duration-300">
            Home
          </nav>
          <nav className="mx-5 cursor-pointer text-[#001D23] hover:text-emerald-500 font-bold transition-all duration-300">
            Invest
          </nav>
        </div> */}
        <button className="py-3 px-[80px] bg-[#7FD096] rounded-md text-white meduim:hidden small:hidden">
          Seek for funds
        </button>
        <div
          className="p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer hover:scale-[1.02] duration-700 transition-all text-[25px] hidden small:flex hover:text-black  "
          onClick={dropDown}
        >
          <AiOutlineMenu />
        </div>
        {state ? (
          <div
            className="h-[150px] w-[200px]  top-[90px] rounded-md absolute right-3 flex flex-col justify-between text-[white] font-semibold z-100"
            style={{
              backdropFilter: "blur( 7px )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              background: "rgba( 255, 255, 255, 0.25 )",
            }}
          >
            <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all hover:text-black ">
              Home
            </div>
            <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all hover:text-black ">
              Launch a campaign
            </div>
            <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all  hover:text-black">
              Sign in
            </div>
            <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all  hover:text-black">
              Sign up
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
