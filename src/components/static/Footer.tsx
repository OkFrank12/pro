import {
  AiOutlineCopyrightCircle,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-auto flex justify-center  items-center text bg-[#001d23] flex-col ">
        <div className="w-[85%] h-full grid grid-cols-4 gap-10 justify-between items-center text-white meduim:flex-wrap meduim:w-full meduim:flex small:flex small:flex-wrap">
          <div className="border-white meduim:w-[300px]  meduim:pl-[25px] w-[300px]  h-[350px] flex justify-center flex-col">
            <div className="text-[30px] font-bold text-white">ecoFund</div>
            <div className="my-5 w-[100%] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              itaque.
            </div>
          </div>
          <div className="border-white meduim:w-[300px]  meduim:pl-[25px]  w-[250px] h-[350px] ml-[60px] flex justify-center flex-col  ">
            <div className="text-white text-[25px] font-bold">
              Project Ideas
            </div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500 mt-5">
              Social Energy
            </div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">
              Wind Energy
            </div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">
              Hydro-Electric Power
            </div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">
              Biomass Energy
            </div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">
              Hydropower
            </div>
          </div>
        </div>
        <div className="w-[85%] h-[80px]  mb-6 px-5 flex justify-between meduim:flex-col">
          <div className="flex text-white items-center">
            <AiOutlineCopyrightCircle />
            <div className="ml-2">All Rights Reserved</div>
          </div>
          <div className="w-[150px] flex justify-between items-center text-[25px] hover:cursor-pointer text-white ">
            <AiOutlineTwitter />
            <BsFacebook />
            <AiOutlineInstagram />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
