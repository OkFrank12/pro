import { HiLightBulb } from "react-icons/hi";
import heroImg from "../../assets/hero-line.png";
import { BsArrowRight } from "react-icons/bs";
import heroImg1 from "../../assets/hero-line-2.png";
import heroImg3 from "../../assets/hero-one-small.jpg";
import heroImg5 from "../../assets/hero-one-big.jpg";
import heroImg4 from "../../assets/hero-one-small-2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="w-full min-h-[100vh] bg-[#e6fdb7] p-5">
        <span className="flex items-center text-[#001D23] font-bold  w-full justify-center">
          <HiLightBulb className="text-[80px] tablet:text-[50px]" />
          <span className="text-[60px] tablet:text-[40px]">
            eco<span className="text-emerald-500">Funds</span>
          </span>
        </span>
        <div className="w-full relative h-full justify-center py-5 items-center flex-col flex">
          <img src={heroImg} className="absolute blur-sm left-0" alt="" />
          <img src={heroImg1} className="absolute right-0 blur-sm" alt="" />
          <span className="text-slate-500 tablet:mt-7 capitalize font-bold mt-20">
            green energy
          </span>
          <p className="text-[#001D23] medium:text-[60px] smallTab:text-[30px] smallTab:w-[100%] tablet:text-[45px] tablet:w-[90%] font-bold text-[80px] w-[70%] text-center">
            Raise Hand to Promote Best Products
          </p>
          <div className="flex">
            {/* <button className="mt-5 flex mx-3 items-center px-[30px] py-3 border border-[#001D23] hover:bg-[#001D23] hover:rounded-md transition-all duration-300 hover:text-white text-[#001D23] font-bold rounded-full">
              <Link to={`/explore`} className="flex items-center">
                Explore Project
                <BsArrowRight className="ml-3" />
              </Link>
            </button> */}
            <button className="mt-5 flex mx-3 items-center px-[30px] py-3 border border-[#001D23] hover:bg-[#001D23] hover:rounded-md transition-all duration-300 hover:text-white text-[#001D23] font-bold rounded-full">
              <Link to={`/register`} className="flex items-center">
                Seek Funds
                <BsArrowRight className="ml-3" />
              </Link>
            </button>
          </div>
          <div className="w-full mt-20 tablet:mt-7 tablet:justify-center h-full flex items-center justify-between">
            <img
              src={heroImg3}
              alt=""
              className="w-[270px] tablet:hidden medium:w-[250px] h-[300px] object-cover medium:h-[280px] rounded-l-full"
            />
            <img
              src={heroImg5}
              alt=""
              className="w-[700px] smallTab:h-[250px] tablet:w-full tablet:h-[400px] object-cover medium:w-[530px] rounded"
            />
            <img
              src={heroImg4}
              alt=""
              className="w-[270px] tablet:hidden h-[300px] medium:w-[250px] object-cover medium:h-[280px] rounded-r-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
